<template>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-4/12 px-4">
        <div
          class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0"
        >
          <div class="rounded-t mb-0 px-6 py-6">
            <div class="text-center mb-3">
              <h6 class="text-gray-600 text-sm font-bold">
                Sign in with
              </h6>
            </div>
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form @submit.prevent="login(loginData)">
              <div class="relative wfull mb-3">
                <label
                  class="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Tai Khoan
                </label>
                <input
                  v-model="loginData.username"
                  type="text"
                  class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  placeholder="Ma so giao vien"
                >
              </div>

              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  v-model="loginData.password"
                  type="password"
                  class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                >
              </div>
              <div>
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    class="form-checkbox text-gray-800 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                  >
                  <span class="ml-2 text-sm font-semibold text-gray-700">
                    Remember me
                  </span>
                </label>
              </div>

              <div class="text-center mt-6">
                <button
                  class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="flex flex-wrap mt-6 relative">
          <div class="w-1/2">
            <!-- <a href="javascript:void(0)" class="text-gray-300"> -->
            <small class="text-gray-300">Bách Khoa Đà Nẵng</small>
            <!-- </a> -->
          </div>
          <div class="w-1/2 text-right">
            <nuxt-link to="/auth/register" class="text-gray-300">
              <small>Create new account</small>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  layout: 'Auth',
  data () {
    return {
      // github,
      // google,
      loginData: {
        username: '',
        password: ''
      },
      error: ''
    }
  },
  mounted () {
    // firebase.firestore().collection('Admin').get().then((res) => {
    //   res.forEach((x) => {
    //     console.log(x.data())
    //   })
    // })
  },
  methods: {
    ...mapActions({
      login: 'login'
    })
  }
}
</script>
