<template>
    <div id="header" class="fixed-top d-flex">
      <div class="container d-flex align-items-center">
        <div class="logo me-auto">
          <h1><router-link to="/" class="nav-link" href="#hero">藍莓實驗室</router-link></h1>
        </div>
        <nav id="navbar" class="navbar">
          <ul>
            <li @click="mobileNavClick()"><router-link to="/" class="nav-link scrollto" href="#hero">首頁</router-link></li>
            <li @click="mobileNavClick()"><router-link to="/about" class="nav-link scrollto" href="#about">關於藍莓</router-link></li>
            <li @click="mobileNavClick()"><router-link to="/Information" class="nav-link scrollto" href="#Information">作品展示</router-link></li>
            <li @click="mobileNavClick()"><router-link to="/contact" class="nav-link scrollto" href="#contact">聯絡藍莓</router-link></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle" @click="navbarToggle()"></i>
        </nav>
      </div>
    </div>
    <div class="HeaderAndContent-overlapping-dealer"></div>
    <router-view></router-view>
</template>

<style scoped>
/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/

#header {
    height: 70px;
    transition: all 0.5s;
    z-index: 997;
    transition: all 0.5s;
    background: #fff;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  }

  #header .logo h1 {
    font-size: 28px;
    margin: 0;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #384046;
  }

  #header .logo h1 a,
  #header .logo h1 a:hover {
    color: #384046;
    text-decoration: none;
  }

  .HeaderAndContent-overlapping-dealer{
    height: 70px;
  }

  /*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/*
Desktop Navigation 
*/
.navbar {
  padding: 0;
}

.navbar ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
}

.navbar li {
  position: relative;
}

.navbar a,
.navbar a:focus {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 10px 30px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #4f5a62;
  white-space: nowrap;
  transition: 0.3s;
}

.navbar a i,
.navbar a:focus i {
  font-size: 12px;
  line-height: 0;
  margin-left: 5px;
}

.navbar a:hover,
.navbar .active,
.navbar .active:focus,
.navbar li:hover>a {
  color: #3498db;
}
.navbar .router-link-exact-active {
  color: #3498db !important;
}

.navbar .dropdown ul {
  display: block;
  position: absolute;
  left: 14px;
  top: calc(100% + 30px);
  margin: 0;
  padding: 10px 0;
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
  transition: 0.3s;
}

.navbar .dropdown ul li {
  min-width: 200px;
}

.navbar .dropdown ul a {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 400;
  color: #21262a;
}

.navbar .dropdown ul a i {
  font-size: 12px;
}

.navbar .dropdown ul a:hover,
.navbar .dropdown ul .active:hover,
.navbar .dropdown ul li:hover>a {
  color: #3498db;
}

.navbar .dropdown:hover>ul {
  opacity: 1;
  top: 100%;
  visibility: visible;
}

.navbar .dropdown .dropdown ul {
  top: 0;
  left: calc(100% - 30px);
  visibility: hidden;
}

.navbar .dropdown .dropdown:hover>ul {
  opacity: 1;
  top: 0;
  left: 100%;
  visibility: visible;
}

@media (max-width: 1366px) {
  .navbar .dropdown .dropdown ul {
    left: -90%;
  }

  .navbar .dropdown .dropdown:hover>ul {
    left: -100%;
  }
}

/*
Mobile Navigation 
*/
.mobile-nav-toggle {
  color: #384046;
  font-size: 28px;
  cursor: pointer;
  display: none;
  line-height: 0;
  transition: 0.5s;
}

.mobile-nav-toggle.bi-x {
  color: #fff;
}

@media (max-width: 991px) {
  .mobile-nav-toggle {
    display: block;
  }

  .navbar ul {
    display: none;
  }
}

.navbar-mobile {
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(33, 38, 42, 0.9);
  transition: 0.3s;
  z-index: 999;
}

.navbar-mobile .mobile-nav-toggle {
  position: absolute;
  top: 15px;
  right: 15px;
}

.navbar-mobile ul {
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 55px;
  right: 15px;
  bottom: 15px;
  left: 15px;
  padding: 10px 0;
  background-color: #fff;
  align-content: center;
  transition: 0.3s;
}
.navbar-mobile li{
display:flex;
width:100%;
justify-content: center;
}
.navbar-mobile a,
.navbar-mobile a:focus {
  text-align:center;
  padding: 20px 20px;
  font-size: 2em;
  color: #384046;
}

.navbar-mobile a:hover,
.navbar-mobile .active,
.navbar-mobile li:hover>a {
  color: #3498db;
}

.navbar-mobile .dropdown ul {
  position: static;
  display: none;
  margin: 10px 20px;
  padding: 10px 0;
  z-index: 99;
  opacity: 1;
  visibility: visible;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
}

.navbar-mobile .dropdown ul li {
  min-width: 200px;
}

.navbar-mobile .dropdown ul a {
  padding: 10px 20px;
}

.navbar-mobile .dropdown ul a i {
  font-size: 12px;
}

.navbar-mobile .dropdown ul a:hover,
.navbar-mobile .dropdown ul .active:hover,
.navbar-mobile .dropdown ul li:hover>a {
  color: #3498db;
}

.navbar-mobile .dropdown>.dropdown-active {
  display: block;
}
</style>

<script>
  export default{
    name:'headertag',
    methods: {
      navbarToggle () {
      let navbar = document.getElementById("navbar")
      navbar.classList.toggle("navbar-mobile")
      let navbarToggle = document.getElementsByClassName("mobile-nav-toggle")[0]
      navbarToggle.classList.toggle("bi-list")
      navbarToggle.classList.toggle("bi-x")
      },
      mobileNavClick () {
      let navbar = document.getElementById("navbar")
      navbar.classList.remove("navbar-mobile")
      let navbarToggle = document.getElementsByClassName("mobile-nav-toggle")[0]
      navbarToggle.classList.toggle("bi-list")
      navbarToggle.classList.toggle("bi-x")
      }
    }
  }

</script>