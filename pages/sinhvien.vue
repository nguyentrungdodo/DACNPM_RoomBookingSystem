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
                Thông Tin Sinh Viên
              </h3>
              <button
                class="bg-green-600 text-white ml-0 active:bg-gray-100 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
                @click="showFormAddNewStudent"
              >
                Thêm Sinh Viên
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
                  Email
                </th>
                <th
                  class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200"
                >
                  Ngày Sinh
                </th>
                <th
                  class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200"
                >
                  MSSV
                </th>
                <th
                  class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200"
                >
                  Điện thoại
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
                v-for="(student, index) in students"
                :key="'student-'+ index"
              >
                <th
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center"
                >
                  <span
                    class="ml-3 font-bold text-gray-700"
                  >
                    {{ student.name }}
                  </span>
                </th>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                >
                  {{ student.email }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                >
                  {{ student.birthday }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                >
                  {{ student.mssv }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                >
                  {{ student.phone }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-right flex"
                >
                  <button class="rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150" @click="showFormUpdateStudent(index)">
                    sửa
                  </button>
                  <button class="ml-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150" @click="confirmDeleteStudent(index)">
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
              @click="showModalUpdate=!showModalUpdate"
            >
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="w-full mb-12 px-4">
      <card-table color="dark" />
    </div> -->
    <!-- modal -->
    <div v-if="showModalUpdate" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex ">
      <div class="relative w-auto my-6 mx-auto max-w-3xl">
        <!--content Modal-->
        <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <!--header Modal-->
          <div class="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
            <h3 class="text-3xl font-semibold">
              Thông tin sinh viên: {{ studentInfo.mssv }}
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
                      v-model="studentInfo.name"
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
                      Email address
                    </label>
                    <input
                      v-model="studentInfo.email"
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
                      MSSV
                    </label>
                    <input
                      v-model="studentInfo.mssv"
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
                      Phone
                    </label>
                    <input
                      v-model="studentInfo.phone"
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
                      Ngày sinh
                    </label>
                    <input
                      v-model="studentInfo.birthday"
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
            <button class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" @click="toggleModdalUpdate">
              Close
            </button>
            <button class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" @click="confirmUpdateStudent">
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
              Thông tin sinh viên: {{ studentInfo.mssv }}
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
                      v-model="studentInfo.name"
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
                      Email address
                    </label>
                    <input
                      v-model="studentInfo.email"
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
                      MSSV
                    </label>
                    <input
                      v-model="studentInfo.mssv"
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
                      Phone
                    </label>
                    <input
                      v-model="studentInfo.phone"
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
                      Ngày sinh
                    </label>
                    <input
                      v-model="studentInfo.birthday"
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
            <button class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" @click="toggleModdalAddNew">
              Close
            </button>
            <button class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" @click="confirmAddNewStudent">
              Add New Student
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
import { firebase } from '@firebase/app'
import '@firebase/firestore'
export default {
  layout: 'Admin',
  components: {
  },
  data () {
    return {
      showModalUpdate: false,
      showModalAddNew: false,
      studentInfo: {
        id: '',
        birthday: '',
        email: '',
        mssv: '',
        name: '',
        phone: ''
      }
    }
  },
  computed: mapState({
    students: state => state.students
  }),
  async mounted () {
    await this.fetchStudents()
  },
  methods: {
    ...mapActions({
      fetchStudents: 'fetchStudents',
      updateStudent: 'updateStudent',
      deleteStudent: 'deleteStudent'
    }),
    testAdd () {
      // ->> set data voi id Admin 2
      // firebase.firestore().collection('Admin').doc('Admin2').set({ email: 'abc@gmail.com', Password: '1234567' }).catch(error => alert(error))
      // order by mssv 25 -> pagination
      // firebase.firestore().collection('students').orderBy('mssv').limit(25).get().then((res) => {
      //   res.forEach((x) => {
      //     console.log(x.data())
      //   })
      // })
      // test 2
      // const temp = firebase.firestore().collection('students').where('mssv', '==', '102160244')
      // temp.get().then((res) => { console.log(res) })
      // if (temp) {
      //   temp.get()
      //     .then(function (querySnapshot) {
      //       querySnapshot.forEach(function (doc) {
      //       // doc.data() is never undefined for query doc snapshots
      //         console.log(doc.id, ' => ', doc.data())
      //       })
      //     })
      // } else { (console.log(temp)) }
      // console.log(this.students)
      this.showModalUpdate = !this.showModalUpdate
    },
    // toggle de hien form Update Student
    toggleModdalUpdate () {
      this.showModalUpdate = !this.showModalUpdate
    },
    // toggle de hien form Add New Student
    toggleModdalAddNew () {
      this.showModalAddNew = !this.showModalAddNew
    },
    // Hien Modal AddNewStudent
    showFormAddNewStudent () {
      // Cong them id them 1 de kiem soat
      this.studentInfo.id = String(+this.students[this.students.length - 1].id + 1)
      this.studentInfo.mssv = String(+this.students[this.students.length - 1].mssv + 1)
      this.toggleModdalAddNew()
    },
    // Hien Modal UpdateStudent
    // Phai truyen index vao
    showFormUpdateStudent (index) {
      this.studentInfo = this.students[index]
      // console.log(this.students.length)
      this.toggleModdalUpdate()
    },
    // Xac nhan add student vao database --> data truyen vao updateStudent phai co id
    confirmAddNewStudent () {
      firebase.firestore()
      this.updateStudent(this.studentInfo)
      this.fetchStudents()
      this.toggleModdalAddNew()
      this.resetStudentInfo()
    },
    confirmUpdateStudent () {
      this.updateStudent(this.studentInfo)
      this.resetStudentInfo()
      this.toggleModdalUpdate()
    },
    confirmDeleteStudent (index) {
      this.studentInfo = this.students[index]
      this.deleteStudent(this.studentInfo)
      this.fetchStudents()
      this.resetStudentInfo()
    },
    resetStudentInfo () {
      this.studentInfo = {
        id: '',
        birthday: '',
        email: '',
        mssv: '',
        name: '',
        phone: ''
      }
    }
  }
}
</script>
