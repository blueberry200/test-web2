<template>
<footer id="footer">

    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-sm-6 footer-contact">
            <h3>藍莓實驗室</h3>
            <p>
              台北市XX區<br>
              YY路123號4樓
              <br><br>
              <strong>電話：</strong><br>(02)2234 5678<br>(02)2298 7654<br>
              <strong>Email:</strong><br>info@example.com<br>contact@example.com
            </p>
          </div>

          <div class="col-lg-2 col-sm-6 footer-links">
            <h4>建議頁面</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i><router-link to="/" class="nav-link scrollto" href="#hero">首頁</router-link></li>
              <li><i class="bx bx-chevron-right"></i><router-link to="/about" class="nav-link scrollto" href="#about">關於我們</router-link></li>
              <li><i class="bx bx-chevron-right"></i><router-link to="/Information" class="nav-link scrollto" href="#Information">作品展示</router-link></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">服務政策</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">隱私權政策</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-sm-6 footer-links">
            <h4>服務項目</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">版面設計</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">系統開發</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">雲端資源採購</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">商務分析</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">維運服務</a></li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>訂閱電子報</h4>
            <p>歡迎訂閱我們的電子報以獲得最新資訊！</p>
            <form action="" method="post">
              <input type="email" name="email"><input type="submit" value="Subscribe">
            </form>
          </div>

        </div>
      </div>
    </div>

    <div class="container d-md-flex py-4">

      <div class="me-md-auto text-center text-md-start">
        <div class="copyright">
          &copy; Copyright <strong><span>Blueberry team</span></strong>. All Rights Reserved
        </div>
        <div class="credits">
          Designed by <a href="#">Vue + Bootstrap</a>
        </div>
      </div>
      <div class="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
        <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
        <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
#footer {
  color: #444444;
  font-size: 14px;
  background: #f7fbfe;
}

#footer .footer-top {
  padding: 60px 0 30px 0;
  background: #fff;
}

#footer .footer-top .footer-contact {
  margin-bottom: 30px;
}

#footer .footer-top .footer-contact h4 {
  font-size: 22px;
  margin: 0 0 30px 0;
  padding: 2px 0 2px 0;
  line-height: 1;
  font-weight: 700;
}

#footer .footer-top .footer-contact p {
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 0;
  font-family: "Raleway", sans-serif;
  color: #777777;
}

#footer .footer-top h4 {
  font-size: 16px;
  font-weight: bold;
  color: #444444;
  position: relative;
  padding-bottom: 12px;
}

#footer .footer-top .footer-links {
  margin-bottom: 30px;
}

#footer .footer-top .footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

#footer .footer-top .footer-links ul i {
  padding-right: 2px;
  color: #3498db;
  font-size: 18px;
  line-height: 1;
}

#footer .footer-top .footer-links ul li {
  padding: 10px 0;
  display: flex;
  align-items: center;
}

#footer .footer-top .footer-links ul li:first-child {
  padding-top: 0;
}

#footer .footer-top .footer-links ul a {
  color: #777777;
  transition: 0.3s;
  display: inline-block;
  line-height: 1;
}

#footer .footer-top .footer-links ul a:hover {
  text-decoration: none;
  color: #3498db;
}

#footer .footer-newsletter {
  font-size: 15px;
}

#footer .footer-newsletter h4 {
  font-size: 16px;
  font-weight: bold;
  color: #444444;
  position: relative;
  padding-bottom: 12px;
}

#footer .footer-newsletter form {
  margin-top: 30px;
  background: #fff;
  padding: 6px 10px;
  position: relative;
  border-radius: 4px;
  text-align: left;
  border: 1px solid #b6daf2;
}

#footer .footer-newsletter form input[type=email] {
  border: 0;
  padding: 4px 8px;
  width: calc(100% - 100px);
}

#footer .footer-newsletter form input[type=submit] {
  position: absolute;
  top: 0;
  right: -2px;
  bottom: 0;
  border: 0;
  background: none;
  font-size: 16px;
  padding: 0 20px 2px 20px;
  background: #3498db;
  color: #fff;
  transition: 0.3s;
  border-radius: 0 4px 4px 0;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
}

#footer .footer-newsletter form input[type=submit]:hover {
  background: #57aae1;
}

#footer .credits {
  padding-top: 5px;
  font-size: 13px;
  color: #444444;
}

#footer .social-links a {
  font-size: 18px;
  display: inline-block;
  background: #3498db;
  color: #fff;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
}

#footer .social-links a:hover {
  background: #5faee3;
  color: #fff;
  text-decoration: none;
  z-index: 3 !important;
}
@media screen and (max-width:575px) {
  .footer-links, .footer-contact, .footer-newsletter{
    text-align: center;
  }
  .footer-links ul li{
    justify-content:center;
  }
}
</style>

<script>
  export default{
    name:'footertag'
  }

</script>