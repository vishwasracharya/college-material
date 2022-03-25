<template>
  <div class="">
      <div class="bg-white position-fixed p-2 rounded pb-5" id="siedBar">
        <!-- <button class="btn" id="siedBarBtn">
            <i class="fa fa-bars" aria-hidden="true"></i>
        </button> -->
        <div class="m-3">
          <p class="fw-bold">College Materials 📚</p>

          <a class="fw-bold collapsed " role="button" data-bs-toggle="collapse" href="#generalnotes" aria-expanded="false">General Notes</a>
          <div id="generalnotes" class="accordion-collapse collapse d-flex align-items-start justify-content-start flex-column mb-3">
              <a href="" class="text-muted tab ps-2 w-100 lh-lg">C & C++</a>
              <a href="" class="text-muted tab ps-2 w-100 lh-lg">ITF</a>
          </div>
          <a class="fw-bold collapsed" type="button" data-bs-toggle="collapse" href="#sem3" aria-expanded="false" aria-controls="sem3">SEM-3</a>
          <div id="sem3" class="d-flex align-items-start justify-content-start flex-column accordion-collapse collapse mb-3">
              <a href="" class="text-muted tab ps-2 w-100 lh-lg">DBMS</a>
              <a href="" class="text-muted tab ps-2 w-100 lh-lg">DF</a>
              <a href="" class="text-muted tab ps-2 w-100 lh-lg">DS</a>
              <a href="" class="text-muted tab ps-2 w-100 lh-lg">ETC</a>
              <a href="" class="text-muted tab ps-2 w-100 lh-lg">IC</a>
              <a href="" class="text-muted tab ps-2 w-100 lh-lg">PS</a>
          </div>
          <a class="fw-bold">SEM-4</a>
          <div class="d-flex align-items-start justify-content-start flex-column mb-3">
              <a href="" class="text-muted tab ps-2 w-100 lh-lg">DBMS</a>
              <a href="" class="text-muted tab ps-2 w-100 lh-lg">DF</a>
              <a href="" class="text-muted tab ps-2 w-100 lh-lg">DS</a>
              <a href="" class="text-muted tab ps-2 w-100 lh-lg">ETC</a>
              <a href="" class="text-muted tab ps-2 w-100 lh-lg">IC</a>
              <a href="" class="text-muted tab ps-2 w-100 lh-lg">PS</a>
          </div>
          <a class="fw-bold">SEM-5</a>
          <div class="d-flex align-items-start justify-content-start flex-column mb-3">
              <a href="" class="text-muted tab ps-2 w-100 lh-lg">DBMS</a>
              <a href="" class="text-muted tab ps-2 w-100 lh-lg">DF</a>
              <a href="" class="text-muted tab ps-2 w-100 lh-lg">DS</a>
              <a href="" class="text-muted tab ps-2 w-100 lh-lg">ETC</a>
              <a href="" class="text-muted tab ps-2 w-100 lh-lg">IC</a>
              <a href="" class="text-muted tab ps-2 w-100 lh-lg">PS</a>
          </div>
        </div>
      </div>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 4px;
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
