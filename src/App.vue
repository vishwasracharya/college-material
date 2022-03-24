<template>
  <NavbarTop />
  <router-view />
</template>

<script>
import NavbarTop from './components/Navbar-Top.vue'
export default {
  components: {
    NavbarTop
  }
}
</script>
