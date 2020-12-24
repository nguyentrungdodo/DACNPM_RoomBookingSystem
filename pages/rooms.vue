<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"
      >
        <div class="rounded-t mb-0 px-4 py-3 border-0">
          <div class="flex flex-wrap items-center">
            <div class="relative w-full px-4 max-w-full flex-grow flex-1 flex justify-between">
              <h3
                class="font-semibold text-lg text-gray-800"
              >
                Thông Tin Phòng
              </h3>
              <button
                class="bg-green-600 text-white ml-0 active:bg-gray-100 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
                @click="showFormAddNewRoom()"
              >
                Thêm Phòng
              </button>
            </div>
          </div>
        </div>
        <div class="block w-full overflow-x-auto">
          <!-- Projects table -->
          <table class="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200"
                >
                  Tên
                </th>
                <th
                  class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200"
                >
                  Type
                </th>
                <th
                  class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200"
                >
                  status
                </th>
                <th
                  class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200"
                >
                  Broken
                </th>
                <th
                  class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200"
                >
                  Amount
                </th>
                <th
                  class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(room, index) in rooms"
                :key="'Room-'+ index"
              >
                <th
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center"
                >
                  <span
                    class="ml-3 font-bold text-gray-700"
                  >
                    {{ room.name }}
                  </span>
                </th>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                >
                  {{ room.type }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                >
                  {{ room.status }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                >
                  {{ room.broken }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                >
                  {{ room.amount }}
                </td>
                <td
                  v-if="permission"
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-right flex"
                >
                  <button class="rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150" @click="showFormUpdateRoom(index)">
                    sửa
                  </button>
                  <button class="ml-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150" @click="confirmDeleteRoom(index)">
                    xóa
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="btn-wrapper text-center">
            <button
              class="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
              type="button"
              @click="testAdd()"
            >
              Test addFirebase
            </button>
            <button
              class="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
              type="button"
            >
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- modal -->
    <div v-if="showModalUpdate" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex ">
      <div class="relative w-auto my-6 mx-auto max-w-3xl">
        <!--content Modal-->
        <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <!--header Modal-->
          <div class="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
            <h3 class="text-3xl font-semibold">
              Thông tin phòng: {{ roomInfo.name }}
            </h3>
          </div>
          <!--body-->
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>
              <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                User Information
              </h6>
              <div class="flex flex-wrap">
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Tên
                    </label>
                    <input
                      v-model="roomInfo.name"
                      type="text"
                      class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    >
                  </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Loại Phòng
                    </label>
                    <input
                      v-model="roomInfo.type"
                      type="email"
                      class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    >
                  </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Trạng thái phòng
                    </label>
                    <input
                      v-model="roomInfo.status"
                      type="text"
                      class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    >
                  </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Số máy hỏng
                    </label>
                    <input
                      v-model="roomInfo.broken"
                      type="text"
                      class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    >
                  </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Số máy
                    </label>
                    <input
                      v-model="roomInfo.amount"
                      type="text"
                      class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    >
                  </div>
                </div>
              </div>
            </form>
          </div>
          <!--Modal footer-->
          <div class="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
            <button class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" @click="toggleModdalUpdate()">
              Close
            </button>
            <button class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" @click="confirmUpdateRoom()">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModalAddNew" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex ">
      <div class="relative w-auto my-6 mx-auto max-w-3xl">
        <!--content Modal-->
        <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <!--header Modal-->
          <div class="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
            <h3 class="text-3xl font-semibold">
              <!-- Thông tin sinh viên: {{ roomInfo.name }} -->
            </h3>
          </div>
          <!--body-->
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>
              <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                User Information
              </h6>
              <div class="flex flex-wrap">
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Tên
                    </label>
                    <input
                      v-model="roomInfo.name"
                      type="text"
                      class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    >
                  </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Loại Phòng
                    </label>
                    <input
                      v-model="roomInfo.type"
                      type="email"
                      class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    >
                  </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Tình trạng phòng
                    </label>
                    <input
                      v-model="roomInfo.status"
                      type="text"
                      class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    >
                  </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Số máy hỏng
                    </label>
                    <input
                      v-model="roomInfo.broken"
                      type="text"
                      class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    >
                  </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Số máy
                    </label>
                    <input
                      v-model="roomInfo.amount"
                      type="text"
                      class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    >
                  </div>
                </div>
              </div>
            </form>
          </div>
          <!--Modal footer-->
          <div class="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
            <button class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" @click="toggleModdalAddNew()">
              Close
            </button>
            <button class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" @click="confirmAddNewRoom()">
              Add New Room
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { firebase } from '@firebase/app'
// import '@firebase/firestore'
import { mapState, mapActions } from 'vuex'
// import { firebase } from '@firebase/app'
// import '@firebase/firestore'
export default {
  middleware: 'auth',
  layout: 'Admin',
  components: {
  },
  data () {
    return {
      showModalUpdate: false,
      showModalAddNew: false,
      roomInfo: {
        id: ' ',
        type: ' ',
        status: ' ',
        broken: ' ',
        name: ' ',
        amount: ' '
      }
    }
  },
  computed: mapState({
    rooms: state => state.rooms,
    permission: state => state.permission
  }),
  async mounted () {
    await this.fetchRooms()
    console.log(this.rooms)
  },
  methods: {
    ...mapActions({
      fetchRooms: 'fetchRooms',
      updateRoom: 'updateRoom',
      deleteRoom: 'deleteRoom'
    }),
    testAdd () {
      this.showModalUpdate = !this.showModalUpdate
    },
    // toggle de hien form Update Room
    toggleModdalUpdate () {
      this.showModalUpdate = !this.showModalUpdate
    },
    // toggle de hien form Add New Room
    toggleModdalAddNew () {
      this.showModalAddNew = !this.showModalAddNew
    },
    // Hien Modal AddNewRoom
    showFormAddNewRoom () {
      // Cong them id them 1 de kiem soat
      this.roomInfo.id = String(+this.rooms[this.rooms.length - 1].id + 1)
      this.toggleModdalAddNew()
    },
    // Hien Modal UpdateRoom
    // Phai truyen index vao
    showFormUpdateRoom (index) {
      this.roomInfo = this.rooms[index]
      // console.log(this.roomInfo)
      // console.log(index)
      // console.log(this.Rooms.length)
      this.toggleModdalUpdate()
    },
    // Xac nhan add Room vao database --> data truyen vao updateRoom phai co id
    confirmAddNewRoom () {
      this.updateRoom(this.roomInfo)
      this.fetchRooms()
      this.toggleModdalAddNew()
      this.resetroomInfo()
    },
    confirmUpdateRoom () {
      this.updateRoom(this.roomInfo)
      this.resetroomInfo()
      this.toggleModdalUpdate()
    },
    confirmDeleteRoom (index) {
      this.roomInfo = this.rooms[index]
      this.deleteRoom(this.roomInfo)
      this.fetchRooms()
      this.resetroomInfo()
    },
    resetroomInfo () {
      this.roomInfo = {
        id: '',
        type: '',
        status: '',
        broken: '',
        name: '',
        amount: ''
      }
    }
  }
}
</script>
