<template>
  <div
    class="navigation"
    :class="{
      'bg-white': scrollNow > 50,
      'drop-shadow-lg': scrollNow > 50,
    }"
    style="position: fixed; top: 0;"
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
                <!-- <li class="nav-item active"> -->
                <!-- <a class="page-scroll" href="#home">СОЮЗ</a> -->
                <!-- <a class="page-scroll" href="#top">СОЮЗ</a> -->
                <!-- </li> -->
                <!-- <li class="nav-item">
                      <a class="page-scroll" href="#service">УСЛУГИ</a>
                    </li> -->
                <li class="nav-item" :class="{ 'active' : activePrice }" >
                  <a class="page-scroll" href="/#pricing">Мероприятия</a>
                </li>
                <li class="nav-item" :class="{ 'active' : activeUser }" >
                  <a class="page-scroll" href="/#testimonial">Участники</a>
                </li>
                <li class="nav-item" :class="{ 'active' : activeContact }" >
                  <a class="page-scroll" href="/#contact">Контакты</a>
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
        :class="{ active: n == 1 }"
        :aria-current="n == 1 ? 'true' : 'false'"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        :data-bs-slide-to="n - 1"
        aria-label="Slide "
      ></button>
    </div>

    <div
      class="carousel-inner relative w-full overflow-hidden bg-fixed"
      style="
        height: 80vh;
        min-height: 490px;
        background-image: url('/add/bg1.webp');
        background-size: cover;
      "
    >
      <div
        v-for="n in 5"
        :key="n"
        :class="{ active: n == 1 }"
        class="carousel-item float-left w-full h-full"
      >
        <div
          class="grid place-content-center text-center h-full xbg-orange-200 ee"
        >
          <a href="#testimonial">
            <img
              :src="'/add/bb1.png'"
              class="hover:drop-shadow-2xl rounded-xl"
              alt="s"
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

  <!-- <div class="ft"> -->
    <!-- scrollPosition {{ scrollPosition ?? 'x' }}  -->
    <!-- scrollNow {{ scrollNow ?? 'x' }} -->
  <!-- </div> -->
</template>

<script>
import { ref, watchEffect, onMounted } from 'vue'

export default {
  components: {},
  setup() {
    const scrollNow = ref(0)
    // const scrollPosition = ref(0)
    // let scrollNow = ref(window.scrollY);

    const activePrice = ref(0)
    const nowPrice = ref(0)
    const activeUser = ref(0)
    const nowUser = ref(0)
    const activeContact = ref(0)
    const nowContact = ref(0)

    onMounted(() => {

      var msg = document.getElementById('pricing')
      var rect = msg.getBoundingClientRect()
      // console.log('r1', rect.top, rect)
      // nowPrice.value = rect.top.fixed()
      nowPrice.value = rect.top.toFixed()

      var msg = document.getElementById('testimonial')
      var rect = msg.getBoundingClientRect()
      // console.log('r2', rect.top, rect)
      nowUser.value = rect.top.toFixed()

      var msg = document.getElementById('contact')
      var rect = msg.getBoundingClientRect()
      // console.log('r3', rect.top, rect)
      nowContact.value = rect.top.toFixed()

    })

    // watchEffect(() => {

    //   // if (this.scrollNow > 50) {
    //   //   console.log( 1177, this.scrollNow )
    //   // }

    //   // if (scrollNow > 50) {
    //   //   console.log(77);
    //   // // if (scrollNow.value > 50) {
    //   // //   console.log( 11, this.scrollNow , scrollNow.value , this.activePrice, this.activeUser, this.activeContact)
    //   // //   console.log( 22, nowPrice.value, nowUser.value, nowContact.value)
    //   // }

    // })

    watchEffect(() => {
      //   // // //   // console.log(count.value)
      //   // // //   console.log(window.scrollY)
      //   // // scrollNow.value = window.scrollY;
      //   //  var conta = event.target;
      // scrollNow.value = conta.scrollY;
      // scrollNow.value = window.pageYOffset;

      // console.log('scrollNow', scrollNow.value , nowPrice.value , 'activePrice' , activePrice.value )

      if( scrollNow.value > nowContact.value - 50 ){ 
        activeContact.value = true 
        activeUser.value = false 
        activePrice.value = false 
        }
      else if( scrollNow.value > nowUser.value - 50 ){ 
        activeContact.value = false 
        activeUser.value = true 
        activePrice.value = false 
        }
      else if( scrollNow.value > nowPrice.value - 50 ){ 
        activeContact.value = false 
        activeUser.value = false 
        activePrice.value = true 
        }
      else{
        activeContact.value = false 
        activeUser.value = false 
        activePrice.value = false 
      }


    })

    const scrollToTo = (event) => {
      //   var container = event.target
      // this.scrollPosition = window.pageYOffset
      scrollNow.value = window.pageYOffset
    }

    // const menuHidden = ref(true)
    return {
      // menuHidden,
      scrollNow,
      // scrollPosition,
      scrollToTo,

      activePrice,
      nowPrice,
      activeUser,
      nowUser,
      activeContact,
      nowContact,
    }
  },
  //  data: {
  // //     scrollPosition: 0
  // scrollNow: 0
  //  },
  //  methods: {
  //      mounted() {
  //           window.addEventListener ('scroll', this.scrollHandle); // привязываем событие прокрутки страницы
  //         },
  //         scrollHandle: function(e) {
  //                        var top = e.srcElement.scrollingElement.scrollTop; // Получить высоту прокрутки страницы
  //           if (top < 2000) {
  //                            console.log ('Это первый экран');
  //           } else if (top >= 2000 && top < 4000) {
  //                            console.log ('Это второй экра');
  //           } else if (top >= 4000 && top < 6000) {
  //                            console.log ('Это третий экран');
  //           } else if (top >= 6000 && top < 8000) {
  //                            console.log ('Это четвертый экран');
  //           } else if (top >= 8000) {
  //                            console.log ('Это пятый экран');
  //           }
  //         }
  // //     onScroll(event) {
  // //       //  var container = event.target;
  // //       //  this.scrollPosition = container.scrollTop;
  // //     }
  //  }
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(event) {
      // Any code to be executed when the window is scrolled
      // console.log(event);
      // console.log(event.srcElement.scrollingElement.scrollTop);
      this.scrollNow = event.srcElement.scrollingElement.scrollTop

      // console.log(333, 777)
      // console.log(333, this.activePrice, this.activeUser, this.activeContact)
      // console.log(333555, this.nowPrice, this.nowUser, this.nowContact)
    },
  },
}
</script>

<style lang="css">
.ee div {
  border: 1px dotted red;
  height: 220px;
  width: 400px;
  margin: auto;
  position: relative;
  text-align: center;
  font-size: 3em;
}
.ee video {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: -1;
}

/* .ft {
  position: fixed;
  top: 10px;
  left: 10px;
} */
</style>
