<template>
  <div class="navigation"
  
  >
    <div class="container">
      <div class="row">
        <div class="w-full">
          <nav
            class="flex items-center justify-between navbar navbar-expand-md"
          >
            <a class="mr-4 navbar-brand" href="/">
              <!-- <img src="assets/images/logo.svg" alt="Logo" /> -->
              <!-- <img src="/logo1.png" alt="Logo" style="max-height: 50px;" /> -->
              <img src="/logo.svg" alt="Logo" style="max-height: 50px;" />
            </a>

            <button
              class="block navbar-toggler focus:outline-none md:hidden"
              type="button"
              data-toggle="collapse"
              data-target="#navbarOne"
              aria-controls="navbarOne"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="toggler-icon"></span>
              <span class="toggler-icon"></span>
              <span class="toggler-icon"></span>
            </button>

            <!-- justify-center hidden md:flex collapse navbar-collapse sub-menu-bar -->
            <div
              class="absolute left-0 z-30 hidden w-full px-5 py-3 duration-300 bg-white shadow md:opacity-100 md:w-auto collapse navbar-collapse md:block top-100 mt-full md:static md:bg-transparent md:shadow-none"
              id="navbarOne"
            >
              <ul
                class="items-center content-start mr-auto lg:justify-center md:justify-end navbar-nav md:flex"
              >
                <!-- flex flex-row mx-auto my-0 navbar-nav -->
                <li class="nav-item active">
                  <!-- <a class="page-scroll" href="#home">СОЮЗ</a> -->
                  <a class="page-scroll" href="#top">СОЮЗ</a>
                </li>
                <!-- <li class="nav-item">
                      <a class="page-scroll" href="#service">УСЛУГИ</a>
                    </li> -->
                <li class="nav-item">
                  <a 
                  class="page-scroll" 
                  href="#pricing"
                  >Мероприятия</a>
                </li>
                <li class="nav-item">
                  <a class="page-scroll" href="#testimonial">Участники</a>
                </li>
                <li class="nav-item">
                  <a class="page-scroll" href="#contact">Контакты</a>
                </li>
              </ul>
            </div>

            <div class="items-center justify-end hidden navbar-social lg:flex">
              <span class="mr-4 font-bold text-gray-900 uppercase">
                <a href="tel:+79781483337">+7-978-148-33-37</a>
              </span>
              <ul class="flex footer-social">
                <!-- <li>
                      <a href="#"><i class="lni-facebook-filled"></i></a>
                    </li> -->
                <!-- <li>
                      <a href="https://vk.com/harmony_mind_soul_body"><i class="lni-vk-original"></i></a>
                    </li> -->
                <!-- <li>
                      <a href="#"><i class="lni-twitter-original"></i></a>
                    </li> -->
                <li>
                  <a
                    href="https://www.instagram.com/gipnozlive/"
                    target="_blank"
                    title="Instagramm"
                  >
                    <i class="lni-instagram-original"></i>
                  </a>
                </li>
                <!-- <li>
                      <a href="#"><i class="lni-linkedin-original"></i></a>
                    </li> -->
              </ul>
            </div>
          </nav>
          <!-- navbar -->
        </div>
      </div>
      <!-- row -->
    </div>
    <!-- container -->
  </div>

  <header v-if="1 == 2" class="header-area">
    <!-- navgition -->

    <div
      id="home0"
      class="relative z-10 header-hero"
      style="background-image: url(assets/images/header-bg.jpg);"
    >
      <div class="container">
        <div class="justify-center row">
          <div class="w-full lg:w-5/6 xl:w-2/3">
            <div class="pt-48 pb-64 text-center header-content">
              <h3
                class="mb-5 text-3xl font-semibold leading-tight text-gray-900 md:text-5xl"
              >
                Союз специалистов безмедикаментозного лечения
              </h3>
              <p class="px-5 mb-10 text-xl text-gray-700">
                Группировка специалистов магических наук
              </p>

              <!-- <ul class="flex flex-wrap justify-center">
                  <li>
                    <a
                      class="mx-3 main-btn gradient-btn"
                      href="javascript:void(0)"
                    >
                      GET IN TOUCH
                    </a>
                  </li>
                  <li>
                    <a
                      class="mx-3 main-btn video-popup"
                      href="https://www.youtube.com/watch?v=r44RKWyfcFw"
                    >
                      WATCH THE VIDEO
                      <i class="ml-2 lni-play"></i>
                    </a>
                  </li>
                </ul> -->
            </div>
            <!-- header content -->
          </div>
        </div>
        <!-- row -->
      </div>
      <!-- container -->
      <div class="absolute bottom-0 z-20 w-full h-auto -mb-1 header-shape">
        <img src="/assets/images/header-shape.svg" alt="shape" />
      </div>
    </div>
    <!-- header content -->
  </header>

  <div
    id="carouselExampleIndicators"
    class="carousel slide relative"
    data-bs-ride="carousel"
  >
    <div
      class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4"
    >
      <!-- <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button> -->
      
      <button

        v-for="n in 5"
        :key="n"

        :class="{ 'active' : n == 1 }"
        :aria-current="n == 1 ? 'true' : 'false'"

        type="button"
        data-bs-target="#carouselExampleIndicators"
        :data-bs-slide-to="n-1"
        aria-label="Slide "
      ></button> 

    </div>

    <div class="carousel-inner relative w-full overflow-hidden bg-fixed"
      style="height: 80vh; min-height: 490px;
      background-image: url('/add/bg1.webp'); background-size: cover;"
      >
      <div
        v-for="n in 5"
        :key="n"

        :class="{ 'active': n == 1 }"
        class="carousel-item float-left w-full h-full"

      >
        <div class="grid place-content-center text-center h-full xbg-orange-200 ee "
        
        >


      <div v-if="1==2">  
        <video width="100%" autoplay muted playsinline>    
        <!-- <source src="/add/vi1.mp4" type="video/mp4"> -->
        <source src="http://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">    
        <!-- <source src="http://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg">   -->
        </video>  
        А тут какой-то текст поверх видео.  
        <br> 
        <a href=http://www.w3schools.com/html/html5_video.asp>И даже ссылка</a>
        </div>

            
            <!-- <img src="/add/i1.svg" style="width:150px;" /> -->
         <!-- {{ n }} -->

              <a href="#testimonial">
                <img
                  xsrc="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                  xxsrc="/add/b1.webp"
                  xxxsrc="'/add/b' + n + '.webp'"
                  :src="'/add/bb1.png'"
                  class="xxblock xw-full 
                  xhover:opacity-90 
                  xborder-sky-300 
                  xhover:border-2 
                  xhover:xborder-sky-400 
                  hover:drop-shadow-2xl
                  rounded-xl"
                  style="xwidth: 450px;"
                  alt="Wild Landscape"
                />
              </a>
        </div>
      </div>

      <!-- <div class="carousel-item float-left w-full">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
          class="block w-full"
          alt="Camera"
        />
      </div>
      <div class="carousel-item float-left w-full">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
          class="block w-full"
          alt="Exotic Fruits"
        />
      </div> -->
    </div>
    <button
      class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span
        class="carousel-control-prev-icon inline-block bg-no-repeat"
        aria-hidden="true"
      ></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span
        class="carousel-control-next-icon inline-block bg-no-repeat"
        aria-hidden="true"
      ></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

<!-- <div class="ft" >scrollPosition {{ scrollPosition }} scrollNow {{ scrollNow }}</div> -->

</template>

<script>

import { ref, watchEffect } from 'vue'

export default {
  components: {},
  setup() {

    const scrollNow = ref(0)
    // let scrollNow = ref(window.scrollY);

    // watchEffect(() => {
    // // //   // console.log(count.value)
    // // //   console.log(window.scrollY)
    // // scrollNow.value = window.scrollY;
    // scrollNow.value = document.scrollY;
    // })

    // const scrollToTo = (event) => {   

    //     var container = event.target
    //      this.scrollPosition = container.scrollTop

    //   }

    // const menuHidden = ref(true)
    return {
      // menuHidden,
      scrollNow,
      // scrollToTo
    }
  },
   data: {
      // scrollPosition: 0
   },
   methods: {
      onScroll(event) {
        //  var container = event.target;
        //  this.scrollPosition = container.scrollTop;
      }
   }
}
</script>

<style lang="css" >

.ee div {  border: 1px dotted red;  height: 220px;  width: 400px;  margin: auto;  position: relative;  text-align: center;  font-size: 3em;}
.ee video {  position: absolute;  left: 0;  top: 0;  right: 0;  bottom: 0;  margin: auto;  z-index: -1;}

.ft{ position: fixed; top: 10px; left: 10px; }

</style>
