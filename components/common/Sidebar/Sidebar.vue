<template>
  <nav
    class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
  >
    <div
      class="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
    >
      <!-- Toggler -->
      <button
        class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
        type="button"
        @click="toggleCollapseShow('bg-white m-2 py-3 px-6')"
      >
        <i class="fas fa-bars" />
      </button>
      <!-- Brand -->
      <router-link
        class="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0"
        to="/"
      >
        Bách Khoa Đà Nẵng
      </router-link>
      <!-- User -->
      <ul class="md:hidden items-center flex flex-wrap list-none">
        <li class="inline-block relative">
          <notification-dropdown />
        </li>
        <li class="inline-block relative">
          <user-dropdown />
        </li>
      </ul>
      <!-- Collapse -->
      <div
        class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded"
        :class="collapseShow"
      >
        <!-- Collapse header -->
        <div
          class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-300"
        >
          <div class="flex flex-wrap">
            <div class="w-6/12">
              <router-link
                class="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0"
                to="/"
              >
                Vue Notus
              </router-link>
            </div>
            <div class="w-6/12 flex justify-end">
              <button
                type="button"
                class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                @click="toggleCollapseShow('hidden')"
              >
                <i class="fas fa-times" />
              </button>
            </div>
          </div>
        </div>
        <!-- Form -->
        <form class="mt-6 mb-4 md:hidden">
          <div class="mb-3 pt-0">
            <input
              type="text"
              placeholder="Search"
              class="px-3 py-2 h-12 border border-solid border-gray-600 placeholder-gray-400 text-gray-700 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
            >
          </div>
        </form>

        <!-- Divider -->
        <hr class="my-4 md:min-w-full">
        <!-- Heading -->
        <!-- <h6
          class="md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
        >
          Admin Layout Pages
        </h6> -->
        <!-- Navigation -->

        <ul class="md:flex-col md:min-w-full flex flex-col list-none">
          <li class="items-center">
            <router-link
              v-slot="{ href, route, navigate, isActive }"
              to="/students"
            >
              <a
                :href="href"
                class="text-xs uppercase py-3 font-bold block"
                :class="[
                  isActive
                    ? 'text-green-500 hover:text-green-600'
                    : 'text-gray-800 hover:text-gray-600',
                ]"
                @click="navigate"
              >
                <i
                  class="fas fa-tv mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-gray-400']"
                />
                List Sinh Viên
              </a>
            </router-link>
          </li>

          <li class="items-center">
            <router-link
              v-slot="{ href, route, navigate, isActive }"
              to="/professors"
            >
              <a
                :href="href"
                class="text-xs uppercase py-3 font-bold block"
                :class="[
                  isActive
                    ? 'text-green-500 hover:text-green-600'
                    : 'text-gray-800 hover:text-gray-600',
                ]"
                @click="navigate"
              >
                <i
                  class="fas fa-tools mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-gray-400']"
                />
                List Giáo Viên
              </a>
            </router-link>
          </li>

          <li class="items-center">
            <router-link
              v-slot="{ href, route, navigate, isActive }"
              to="/courses"
            >
              <a
                :href="href"
                class="text-xs uppercase py-3 font-bold block"
                :class="[
                  isActive
                    ? 'text-green-500 hover:text-green-600'
                    : 'text-gray-800 hover:text-gray-600',
                ]"
                @click="navigate"
              >
                <i
                  class="fas fa-table mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-gray-400']"
                />
                List Học Phần
              </a>
            </router-link>
          </li>

          <li class="items-center">
            <router-link
              v-slot="{ href, route, navigate, isActive }"
              to="/admin/maps"
            >
              <a
                :href="href"
                class="text-xs uppercase py-3 font-bold block"
                :class="[
                  isActive
                    ? 'text-green-500 hover:text-green-600'
                    : 'text-gray-800 hover:text-gray-600',
                ]"
                @click="navigate"
              >
                <i
                  class="fas fa-map-marked mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-gray-400']"
                />
                Maps
              </a>
            </router-link>
          </li>
        </ul>

        <!-- Divider -->
        <hr class="my-4 md:min-w-full">
        <!-- Heading -->
        <h6
          class="md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
        >
          Auth Layout Pages
        </h6>
        <!-- Navigation -->

        <ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
          <li class="items-center">
            <router-link
              class="text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block"
              to="/auth/login"
            >
              <i class="fas fa-fingerprint text-gray-400 mr-2 text-sm" />
              Login
            </router-link>
          </li>

          <li class="items-center">
            <router-link
              class="text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block"
              to="/auth/register"
            >
              <i class="fas fa-clipboard-list text-gray-400 mr-2 text-sm" />
              Register
            </router-link>
          </li>
        </ul>

        <!-- Divider -->
        <hr class="my-4 md:min-w-full">
        <!-- Heading -->
        <h6
          class="md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
        >
          No Layout Pages
        </h6>
        <!-- Navigation -->

        <ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
          <li class="items-center">
            <router-link
              class="text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block"
              to="/landing"
            >
              <i class="fas fa-newspaper text-gray-400 mr-2 text-sm" />
              Landing Page
            </router-link>
          </li>

          <li class="items-center">
            <router-link
              class="text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block"
              to="/profile"
            >
              <i class="fas fa-user-circle text-gray-400 mr-2 text-sm" />
              Profile Page
            </router-link>
          </li>
        </ul>

        <!-- Divider -->
        <hr class="my-4 md:min-w-full">
        <!-- Heading -->
        <h6
          class="md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
        >
          Documentation
        </h6>
        <!-- Navigation -->
        <ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
          <li class="inline-flex">
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind/vue/colors/notus"
              target="_blank"
              class="text-gray-800 hover:text-gray-600 text-sm block mb-4 no-underline font-semibold"
            >
              <i class="fas fa-paint-brush mr-2 text-gray-400 text-base" />
              Styles
            </a>
          </li>

          <li class="inline-flex">
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus"
              target="_blank"
              class="text-gray-800 hover:text-gray-600 text-sm block mb-4 no-underline font-semibold"
            >
              <i class="fab fa-css3-alt mr-2 text-gray-400 text-base" />
              CSS Components
            </a>
          </li>

          <li class="inline-flex">
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus"
              target="_blank"
              class="text-gray-800 hover:text-gray-600 text-sm block mb-4 no-underline font-semibold"
            >
              <i class="fab fa-angular mr-2 text-gray-400 text-base" />
              Angular
            </a>
          </li>

          <li class="inline-flex">
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus"
              target="_blank"
              class="text-gray-800 hover:text-gray-600 text-sm block mb-4 no-underline font-semibold"
            >
              <i class="fab fa-js-square mr-2 text-gray-400 text-base" />
              Javascript
            </a>
          </li>

          <li class="inline-flex">
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus"
              target="_blank"
              class="text-gray-800 hover:text-gray-600 text-sm block mb-4 no-underline font-semibold"
            >
              <i class="fab fa-react mr-2 text-gray-400 text-base" />
              NextJS
            </a>
          </li>

          <li class="inline-flex">
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus"
              target="_blank"
              class="text-gray-800 hover:text-gray-600 text-sm block mb-4 no-underline font-semibold"
            >
              <i class="fab fa-react mr-2 text-gray-400 text-base" />
              React
            </a>
          </li>

          <li class="inline-flex">
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus"
              target="_blank"
              class="text-gray-800 hover:text-gray-600 text-sm block mb-4 no-underline font-semibold"
            >
              <i class="fas fa-link mr-2 text-gray-400 text-base" />
              Svelte
            </a>
          </li>

          <li class="inline-flex">
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus"
              target="_blank"
              class="text-gray-800 hover:text-gray-600 text-sm block mb-4 no-underline font-semibold"
            >
              <i class="fab fa-vuejs mr-2 text-gray-400 text-base" />
              VueJS
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
); }

<script>
import { UserDropdown, NotificationDropdown } from '~/components/common'

export default {
  components: {
    NotificationDropdown,
    UserDropdown
  },
  data () {
    return {
      collapseShow: 'hidden'
    }
  },
  methods: {
    toggleCollapseShow (classes) {
      this.collapseShow = classes
    }
  }
}
</script>
