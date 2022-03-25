<template>
  <header>
    <nav class="d-flex align-items-center justify-content-center pt-2 position-fixed bg-white" id="navbarTop">
      <router-link to="/" class="tab m-1 p-1" active-class="tab-active" id="homeRouter">Home</router-link>
      <router-link to="/about" class="tab m-1 p-1" active-class="tab-active" id="aboutRouter">About</router-link>
    </nav>
  </header>
</template>

<style>
#navbarTop{
    width: 100%;
    height: fit-content;
}
</style>