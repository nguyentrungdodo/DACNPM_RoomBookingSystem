<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 bg-gray-200">
      <admin-navbar />
      <header-stats />
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <router-view />
        <footer-admin />
      </div>
    </div>
  </div>
</template>
<script>
import { AdminNavbar, Sidebar, HeaderStats, FooterAdmin } from '~/components/common/index.js'
export default {
  name: 'AdminLayout',
  components: {
    AdminNavbar,
    Sidebar,
    HeaderStats,
    FooterAdmin
  }
}
</script>
