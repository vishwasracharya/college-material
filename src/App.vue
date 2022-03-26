<template>
<div>
  <NavbarTop />
    <div class="row m-0 p-0">
      <div class="col-sm-2 m-0 p-0">
        <SideBar />
      </div>
      <div class="col-sm-10 m-0 p-0 ps-md-1">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import NavbarTop from "./components/Navbar-Top.vue";
import SideBar from "./components/SideBar.vue";
export default {
  components: {
    NavbarTop,
    SideBar,
  },
};
</script>
