function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " w3-opacity-off";
}

var myVar;

function pageLoader() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

function addCart(){
  document.getElementById("add-tocart").style.color="var(--red)";
  document.getElementById("addto-cart").innerHTML=`Added`;
  document.getElementById("addto-cart").style.background="rgb(229 229 229)";
  document.getElementById("addto-cart").style.color="rgb(38 38 38 / 45%)";
  document.getElementById("addto-cart").style.pointerEvents= "none";
  document.getElementById("cart-nbr").style.display="block";

}

function darkMode() {
    document.documentElement.style.setProperty('--grey', '#121212');
    document.documentElement.style.setProperty('--white', '#2a2a2a');
    document.documentElement.style.setProperty('--black', '#ffffff');
    document.documentElement.style.setProperty('--overlay-w', '#00000052');
    document.documentElement.style.setProperty('--overlay-b', '#ffffff52');
    document.getElementById("dark").style.display="none";
    document.getElementById("light").style.display="block";
    document.getElementById("logo").src="img/logo-w.png";
    document.getElementById("b").src="img/logo-w.png";
}

function lightMode() {
    document.documentElement.style.setProperty('--grey', '#e5e5e5');
    document.documentElement.style.setProperty('--white', '#ffffff');
    document.documentElement.style.setProperty('--black', '#000000');
    document.documentElement.style.setProperty('--overlay-b', '#00000052');
    document.documentElement.style.setProperty('--overlay-w', '#ffffff52');
    document.getElementById("light").style.display="none";
    document.getElementById("dark").style.display="block";
    document.getElementById("logo").src="img/logo-b.png";
    document.getElementById("b").src="img/logo-b.png";
}

function showPin1(){
  var x = document.getElementById("1password");
    if (x.type === "password") {
    x.type = "text";
    }
    else {
    x.type = "password";
    }
  document.getElementById("show1").style.display="none";
  document.getElementById("hide1").style.display="block";
}
function hidePin1(){
  var x = document.getElementById("1password");
    if (x.type === "password") {
    x.type = "text";
    }
    else {
    x.type = "password";
    }
  document.getElementById("show1").style.display="block";
  document.getElementById("hide1").style.display="none";
}

function showPin2(){
  var x = document.getElementById("2password");
    if (x.type === "password") {
    x.type = "text";
    }
    else {
    x.type = "password";
    }
  document.getElementById("show2").style.display="none";
  document.getElementById("hide2").style.display="block";
}
function hidePin2(){
  var x = document.getElementById("2password");
    if (x.type === "password") {
    x.type = "text";
    }
    else {
    x.type = "password";
    }
  document.getElementById("show2").style.display="block";
  document.getElementById("hide2").style.display="none";
}

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
faq.addEventListener("click", () => {
faq.classList.toggle("active");
})
})

function honda() {
  document.getElementById("feature-car").innerHTML=`<div class="feature-container">
  <img src="img/civic (4).jpg">
</div>
<div class="feature-detail">
  <div class="feature-name">
      <h1>Honda Civic</h1>
      <h4>PKR 7,549,000</h4>
  </div>
  <div class="feature-button">
      <button onclick="location.href='inventory/honda-civic.html'">View more</button>
  </div>
</div>`
}
function toyota() {
  document.getElementById("feature-car").innerHTML=`<div class="feature-container">
  <img src="img/fortuner (1).jpg">
</div>
<div class="feature-detail">
  <div class="feature-name">
      <h1>Toyota Fortuner</h1>
      <h4>PKR 14,699,000</h4>
  </div>
  <div class="feature-button">
      <button onclick="location.href='inventory/toyota-fortuner.html'">View more</button>
  </div>
</div>`
}
function suzuki() {
  document.getElementById("feature-car").innerHTML=`<div class="feature-container">
  <img src="img/jimny2.jpg">
</div>
<div class="feature-detail">
  <div class="feature-name">
      <h1>Suzuki Jimny</h1>
      <h4>PKR 3,700,000</h4>
  </div>
  <div class="feature-button">
      <button onclick="location.href='inventory/suzuki-jimny.html'">View more</button>
  </div>
</div>`
}
function bmw() {
  document.getElementById("feature-car").innerHTML=`<div class="feature-container">
  <img src="img/BMW (1).jpg">
</div>
<div class="feature-detail">
  <div class="feature-name">
      <h1>BMW 3 Series 316i</h1>
      <h4>PKR 1,250,000</h4>
  </div>
  <div class="feature-button">
      <button onclick="location.href='inventory/bmw-316i.html'">View more</button>
  </div>
</div>`
}
function kia() {
  document.getElementById("feature-car").innerHTML=`<div class="feature-container">
  <img src="img/sportage (1).jpg">
</div>
<div class="feature-detail">
  <div class="feature-name">
      <h1>Kia Sportage</h1>
      <h4>PKR 6,800,000</h4>
  </div>
  <div class="feature-button">
      <button onclick="location.href='inventory/kia-sportage.html'">View more</button>
  </div>
</div>`
}
function bugatti() {
  document.getElementById("feature-car").innerHTML=`<div class="feature-container">
  <img src="img/divo (4).jpg">
</div>
<div class="feature-detail">
  <div class="feature-name">
      <h1>Bugatti Divo</h1>
      <h4>PKR 1,282,500,000</h4>
  </div>
  <div class="feature-button">
      <button onclick="location.href='inventory/bugatti-divo.html'">View more</button>
  </div>
</div>`
}
function audi() {
  document.getElementById("feature-car").innerHTML=`<div class="feature-container">
  <img src="img/A3 (1).jpg">
</div>
<div class="feature-detail">
  <div class="feature-name">
      <h1>Audi A3</h1>
      <h4>PKR 8,300,000</h4>
  </div>
  <div class="feature-button">
      <button onclick="location.href='inventory/audi-a3.html'">View more</button>
  </div>
</div>`
}
function merdsedes() {
  document.getElementById("feature-car").innerHTML=`<div class="feature-container">
  <img src="img/S4005.jpg">
</div>
<div class="feature-detail">
  <div class="feature-name">
      <h1>Mercedes Benz</h1>
      <h4>PKR 24,000,000</h4>
  </div>
  <div class="feature-button">
      <button onclick="location.href='inventory/mercedes-benz-s400.html'">View more</button>
  </div>
</div>`
}
function ferrari() {
  document.getElementById("feature-car").innerHTML=`<div class="feature-container">
  <img src="img/sf90 (3).jpg">
</div>
<div class="feature-detail">
  <div class="feature-name">
      <h1>Ferrari SF90 Spider</h1>
      <h4>PKR 110,484,000</h4>
  </div>
  <div class="feature-button">
      <button onclick="location.href='inventory/ferrari-sf90-spider.html'">View more</button>
  </div>
</div>`
}
function lamborghini() {
  document.getElementById("feature-car").innerHTML=`<div class="feature-container">
  <img src="img/svj2.jpg">
</div>
<div class="feature-detail">
  <div class="feature-name">
      <h1>Lamborghini Aventador</h1>
      <h4>PKR 267,440,000</h4>
  </div>
  <div class="feature-button">
      <button onclick="location.href='inventory/lamborghini-aventador-svj.html'">View more</button>
  </div>
</div>`
}
function royce() {
  document.getElementById("feature-car").innerHTML=`<div class="feature-container">
  <img src="img/Dawn-convertible1.jpg">
</div>
<div class="feature-detail">
  <div class="feature-name">
      <h1>Roll Royce Dawn</h1>
      <h4>PKR 83,762,378</h4>
  </div>
  <div class="feature-button">
      <button onclick="location.href='inventory/rolls-royce-dawn.html'">View more</button>
  </div>
</div>`
}
function tesla() {
  document.getElementById("feature-car").innerHTML=`<div class="feature-container">
  <img src="img/model-s3.jpg" style="width: 100%;">
</div>
<div class="feature-detail">
  <div class="feature-name">
      <h1>Tesla Model S</h1>
      <h4>PKR 24,095,872</h4>
  </div>
  <div class="feature-button">
      <button onclick="location.href='inventory/tesla-model-s.html'">View more</button>
  </div>
</div>`
}
function bentley() {
  document.getElementById("feature-car").innerHTML=`<div class="feature-container">
  <img src="img/continental-convertible4.jpg">
</div>
<div class="feature-detail">
  <div class="feature-name">
      <h1>Bentley Continental</h1>
      <h4>PKR 54,329,933</h4>
  </div>
  <div class="feature-button">
      <button onclick="location.href='inventory/bentley-continental-convertible.html'">View more</button>
  </div>
</div>`
}
function rover() {
  document.getElementById("feature-car").innerHTML=`<div class="feature-container">
  <img src="img/discovery 2.jpg">
</div>
<div class="feature-detail">
  <div class="feature-name">
      <h1>Range Rover D350</h1>
      <h4>PKR 38,310,694</h4>
  </div>
  <div class="feature-button">
      <button onclick="location.href='inventory/land-rover-d350.html'">View more</button>
  </div>
</div>`
}
function porsche() {
  document.getElementById("feature-car").innerHTML=`<div class="feature-container">
  <img src="img/panamera5.jpg">
</div>
<div class="feature-detail">
  <div class="feature-name">
      <h1>Porsche Panamera</h1>
      <h4>PKR 21,245,870</h4>
  </div>
  <div class="feature-button">
      <button onclick="location.href='inventory/porsche-panamera.html'">View more</button>
  </div>
</div>`
document.querySelectorAll("feature-brand").style.background='red'
}
