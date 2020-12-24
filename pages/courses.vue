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
                Thông Tin Lớp Học Phần
              </h3>
              <button
                class="bg-green-600 text-white ml-0 active:bg-gray-100 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
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
                  STT
                </th>
                <th
                  class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200"
                >
                  Mã Học Phần
                </th>
                <th
                  class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200"
                >
                  Tên Học Phần
                </th>
                <th
                  class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200"
                >
                  Giảng Viên
                </th>
                <th
                  class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200"
                >
                  Thời Khóa Biểu
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
                v-for="(course, index) in courses"
                :key="'course-'+ index"
              >
                <th
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center"
                >
                  <span
                    class="ml-3 font-bold text-gray-700"
                  >
                    {{ index }}
                  </span>
                </th>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                >
                  {{ course.id }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                >
                  {{ course.name }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                >
                  {{ course.giangvien }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                >
                  Thứ: {{ course.day }}, Tiết: {{ course.period }}, Phòng: C{{ course.room }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-right flex"
                >
                  <button
                    class="bg-green-600 text-white ml-0 active:bg-gray-100 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                    @click="showStudent(index)"
                  >
                    Danh Sách Lớp
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
    <div v-if="showModalStudents" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex ">
      <div class="relative w-auto my-6 mx-auto max-w-3xl">
        <!--content Modal-->
        <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <!--header Modal-->
          <div class="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
            <h3 class="text-3xl font-semibold">
              Thông tin lớp học phần: {{ }}
            </h3>
          </div>
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
                  MSSV
                </th>
                <th
                  class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200"
                >
                  Điện thoại
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(student, index) in classInfo"
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
                  {{ student.mssv }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                >
                  {{ student.phone }}
                </td>
              </tr>
            </tbody>
          </table>
          <div class="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
            <button class="bg-red-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" @click="toggleModdalShowStudents">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

// import { mapState, mapActions } from 'vuex'
import { mapActions, mapState } from 'vuex'
export default {
  middleware: 'auth',
  layout: 'Admin',
  components: {
  },
  data () {
    return {
      showModalStudents: false,
      classInfo: null
    }
  },
  async mounted () {
    console.log('goi fetch')
    await this.fetchCourses()
  },
  computed: mapState({
    courses: state => state.courses
  }),
  methods: {
    ...mapActions({
      fetchCourses: 'fetchCourses'
    }),
    testAdd () {
      console.log(this.courses)
    },
    // toggle de hien form Update Student
    toggleModdalShowStudents () {
      this.showModalStudents = !this.showModalStudents
    },
    showStudent (index) {
      this.classInfo = this.courses[index].students
      this.toggleModdalShowStudents()
    }
  }
}
</script>
