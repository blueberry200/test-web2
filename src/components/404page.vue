<template>
    <div id="p404" class="d-flex flex-column justify-content-center align-items-center">
    <div class="container text-center">
      <h1>404錯誤！</h1>
      <h2>找不到頁面，點擊以下連結回到首頁！</h2>
      <a href="./" class="btn-get-started scrollto">回首頁</a>
    </div>
  </div>
</template>

<style scoped>

#p404 {
  width: 100%;
  height: 60vh;
  background-size: cover;
  position: relative;
  padding: 0;
}

#p404:before {
  content: "";
  background: rgba(56, 64, 70, 0.7);
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}

#p404 .container {
  z-index: 2;
}

#p404 h1 {
  margin: 0 0 10px 0;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  color: #fff;
}

#p404 h1 span {
  border-bottom: 4px solid #3498db;
}

#p404 h2 {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 30px;
  font-size: 24px;
}

#p404 .btn-get-started {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 13px;
  letter-spacing: 2px;
  display: inline-block;
  padding: 12px 28px;
  border-radius: 4px;
  transition: ease-in-out 0.3s;
  color: #fff;
  background: #3498db;
  text-transform: uppercase;
}

#p404 .btn-get-started:hover {
  background: #4ea5e0;
}

@media (max-width: 992px) {
  #p404 {
    height: calc(100vh - 70px);
  }
}

@media (max-width: 768px) {
  #p404 h1 {
    font-size: 30px;
    line-height: 36px;
  }

  #p404 h2 {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 30px;
  }
}
</style>

<script>
  export default{
    name:'p404',
    methods: {
      navbarToggle () {
      var element = document.getElementById("navbar")
      element.classList.toggle("navbar-mobile")
      event.target.classList.toggle("bi-list")
      event.target.classList.toggle("bi-x")
      }
    }
  }

</script>