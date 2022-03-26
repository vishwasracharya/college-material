<template>
  <div class="">
      <div class="bg-white position-fixed p-2 rounded pb-5" id="siedBar">
        <!-- <button class="btn" id="siedBarBtn">
            <i class="fa fa-bars" aria-hidden="true"></i>
        </button> -->
        <div class="m-3">
          <p class="fw-bold mb-1">College Materials 📚</p>
          <p class="text-muted">A Place where you can get everything related to I.T Engineering studies</p>
          <hr>
          <a class="fw-bold">General Notes</a>
          <div class="accordion-collapse collapse d-flex align-items-start justify-content-start flex-column mb-3">
              <a href="" class="text-muted tab ps-2 w-100 py-1">C & C++</a>
              <a href="" class="text-muted tab ps-2 w-100 py-1">ITF</a>
          </div>
          <a class="fw-bold">SEM-3</a>
          <div class="d-flex align-items-start justify-content-start flex-column mb-3">
              <a href="" class="text-muted tab ps-2 w-100 py-1">DataBase Management System (DBMS)</a>
              <a href="" class="text-muted tab ps-2 w-100 py-1">Digital Fundamentals (DF)</a>
              <a href="" class="text-muted tab ps-2 w-100 py-1">Data Structures (DS)</a>
              <a href="" class="text-muted tab ps-2 w-100 py-1">Effective Technical Communication (ETC)</a>
              <a href="" class="text-muted tab ps-2 w-100 py-1">Indian Constitution (IC)</a>
              <a href="" class="text-muted tab ps-2 w-100 py-1">Probability & Statistics (PS)</a>
          </div>
          <a class="fw-bold">SEM-4</a>
          <div class="d-flex align-items-start justify-content-start flex-column mb-3">
              <a href="" class="text-muted tab ps-2 w-100 py-1">Computer Organization & Architecture (COA)</a>
              <a href="" class="text-muted tab ps-2 w-100 py-1">Discrete Maths</a>
              <a href="" class="text-muted tab ps-2 w-100 py-1">Java</a>
              <a href="" class="text-muted tab ps-2 w-100 py-1">Operating System (OS)</a>
              <a href="" class="text-muted tab ps-2 w-100 py-1">Principles of Economics & Management (PEM)</a>
          </div>
          <a class="fw-bold">SEM-5</a>
          <div class="d-flex align-items-start justify-content-start flex-column mb-3">
              <a href="" class="text-muted tab ps-2 w-100 py-1">Analysis & Design of Algorithms (ADA)</a>
              <a href="" class="text-muted tab ps-2 w-100 py-1">Computer Networks (CN)</a>
              <a href="" class="text-muted tab ps-2 w-100 py-1">Contributer Personality Development Program (CPDP)</a>
              <a href="" class="text-muted tab ps-2 w-100 py-1">Cyber Security (CS)</a>
              <a href="" class="text-muted tab ps-2 w-100 py-1">Professional Ethics (PE)</a>
              <a href="" class="text-muted tab ps-2 w-100 py-1">Web Development (WD)</a>
          </div>
          <a class="fw-bold">SEM-6</a>
          <div class="d-flex align-items-start justify-content-start flex-column mb-3">
              <a href="" class="text-muted tab ps-2 w-100 py-1">Artificial Intelligence (AI)</a>
              <a href="" class="text-muted tab ps-2 w-100 py-1">Cryptography & Network Security (CNS)</a>
              <a href="" class="text-muted tab ps-2 w-100 py-1">Contributor Personality Development Program (CPDP)</a>
              <a href="" class="text-muted tab ps-2 w-100 py-1">Data Wearhouse & Data Mining (DWDM)</a>
              <a href="" class="text-muted tab ps-2 w-100 py-1">Moblie Application Development (MAD)</a>
              <a href="" class="text-muted tab ps-2 w-100 py-1">Software Engineering (SE)</a>
          </div>
          <a class="fw-bold">SEM-7</a>
          <div class="d-flex align-items-start justify-content-start flex-column mb-3">
              <a href="" class="text-muted tab ps-2 w-100 py-1">Computer Vision (CV)</a>
              <a href="" class="text-muted tab ps-2 w-100 py-1">Interntwork Security and Web Analytics (ISWA)</a>
              <a href="" class="text-muted tab ps-2 w-100 py-1">Internet of Things (IOT)</a>
              <a href="" class="text-muted tab ps-2 w-100 py-1">Software Project Management (SPM)</a>
              <a href="" class="text-muted tab ps-2 w-100 py-1">Agile Development and UI/UX design (UI/UX)</a>
              <a href="" class="text-muted tab ps-2 w-100 py-1">Wireless Communication (WC)</a>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleSideBar() {
      this.isActive = !this.isActive;
    },
  },
}
</script>

<style scoped>
::-webkit-scrollbar {
  width: 0px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 7px rgba(228, 228, 228, 0.877);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: rgba(218, 218, 218, 0.816);
  border-radius: 15px;
}
::-webkit-scrollbar-thumb:hover {
  background: #cececef3;
}
#siedBar{
    width: 250px;
    height: 100%;
    font-size: small;
    overflow: auto;
}
@media screen and (max-width: 768px){
    #siedBar{
        display: none;
        position: absolute;
    }   
}
</style>
