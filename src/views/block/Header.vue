<template>
  <div
    class="bg-gradient-to-tr from-orange-200 to-yellow-400 pt-20 xbg-gray-300"
  >
    <div
      id="top"
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

              <span
                class="mr-4 font-bold text-gray-900 uppercase block md:hidden"
              >
                <a href="tel:+79781483337">+7-978-148-33-37</a>
              </span>

              <button
                class="navbar-toggler focus:outline-none xblock xmd:hidden hidden"
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

                  <!-- <li class="nav-item" :class="{ active: activePrice }">
                    <a class="page-scroll" href="/#pricing">Мероприятия</a>
                  </li> -->

                  <!-- <li class="nav-item" :class="{ active: activeUser }">
                    <a class="page-scroll" href="/#testimonial">Участники</a>
                  </li> -->

                  <!-- <li
                    v-for="i in menuAll"
                    :key="i.head"
                    class="nav-item"
                    :class="{ active: 'active' + i.head }"
                  >
                    <a class="page-scroll" :href="'/#' + i.head">
                      {{ i.name }}
                    </a> -->
                  <!-- item {{ item }} -->
                  <!-- </li> -->
                  <!-- </template> -->

                  <!-- <li class="nav-item" :class="{ active: activeLearn }">
                    <a class="page-scroll" href="/#learn">Обучение гипнозу</a>
                  </li> -->

                  <!-- <li class="nav-item" :class="{ active: activeLearn }">
                    <a class="page-scroll" href="/#learn">Обучение гипнозу</a>
                  </li> -->

                  <li class="nav-item" :class="{ active: activehealth }">
                    <a class="page-scroll" href="/#health">Лечение гипнозом</a>
                  </li>

                  <li class="nav-item" :class="{ active: activelearn }">
                    <a class="page-scroll" href="/#learn">Обучение гипнозу</a>
                  </li>

                  <li class="nav-item" :class="{ active: activeCardsTaro }">
                    <a class="page-scroll" href="/#CardsTaro">Карты Таро</a>
                  </li>

                  <li class="nav-item" :class="{ active: activeabout }">
                    <a class="page-scroll" href="/#about">Обо мне</a>
                  </li>

                  <li class="nav-item" :class="{ active: activevideo }">
                    <a class="page-scroll" href="/#video">Видео</a>
                  </li>

                  <!-- <li class="nav-item" :class="{ active: activeContact }">
                    <a class="page-scroll" href="/#contact">Контакты</a>
                  </li> -->
                </ul>
              </div>

              <div
                class="items-center justify-end hidden navbar-social lg:flex"
              >
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
          </div>
        </div>
      </div>
    </div>

    <!-- menuAll {{ menuAll }} -->

    <div class="w-full h-full pb-10 pt-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 place-content-stretch xh-48">
        <div class="flex items-center justify-center">
          <div class="xflex xpb-3 columns-1">
            <div class="text-center w-full border-1 mb-3">
              <h2 class="text-2xl">Сергей Пыжив</h2>
              практикующий мастер директивного гипноза, предлагаю
              воспользоваться професиональными услугами:
              <br />
              <br />
            </div>
            <div class="text-center w-full border-1 mb-3">
              <a href="#health">
                <button
                  class="font-mono block-inline px-4 py-2 text-xl bg-blue-500 text-white rounded-md shadow-sm transition hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ease-in-out delay-150 duration-300"
                >
                  Лечение болезней
                </button>
              </a>
            </div>
            <div class="text-center w-full border-1 mb-3">
              <a href="#learn">
                <button
                  class="font-mono px-4 py-2 text-xl bg-blue-500 text-white rounded-md shadow-sm hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ease-in-out delay-150 duration-300"
                >
                  Обучение гипнозу
                </button>
              </a>
            </div>
            <div class="text-center w-full border-1 mb-3">
              <a href="#CardsTaro">
                <button
                  class="font-mono px-4 py-2 text-xl bg-blue-500 text-white rounded-md shadow-sm hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ease-in-out delay-150 duration-300"
                >
                  Карты ТАРО
                </button>
              </a>
            </div>

            <div v-if="1 == 2">
              <div class="text-center w-full border-1">
                <button
                  class="px-4 py-2 font-semibold text-sm bg-blue-500 text-white rounded-md shadow-sm hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ease-in-out delay-150 duration-300"
                >
                  Сохранить изменения
                </button>
              </div>
              <div class="w-full border-1">
                <a href="#">
                  Лечение болезней!
                </a>
              </div>
              <div class="w-full">
                <br />
                <a href="#">
                  Обучение гипнозу
                </a>
              </div>
              <div class="w-full">
                <br />
                <a href="#">
                  Карты ТАРО
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center xpy-5">
          <img
            :src="//'/ad/baner1.jpg'
            // '/ad/baner0.png'
            '/img/phot1.jpg'"
            class="clear-none hover:drop-shadow-2xl rounded-xl w-4/5"
            alt="s"
          />
        </div>
      </div>

      <div
        v-if="1 == 2"
        class="grid place-content-center text-center h-full xbg-orange-200 ee mt-20"
      >
        <a href="#pricing">
          <img
            :src="//'/ad/baner1.jpg'
            // '/ad/baner0.png'
            '/img/phot1.jpg'"
            class="hover:drop-shadow-2xl rounded-xl"
            alt="s"
          />
        </a>
      </div>

      <br clear="all" />
    </div>
  </div>
</template>

<script>
import { ref, watchEffect, onMounted } from 'vue'

import MenuTs from '@/use/Menu.ts'

export default {
  components: {},
  setup() {
    const { menuAll } = MenuTs()

    const scrollNow = ref(0)
    // const scrollPosition = ref(0)
    // let scrollNow = ref(window.scrollY);

    // const activePrice = ref(0)
    // const nowPrice = ref(0)
    // const activeUser = ref(0)
    // const nowUser = ref(0)
    // const activeContact = ref(0)
    // const nowContact = ref(0)

    const activehealth = ref(0)
    const nowhealth = ref(0)
    const activelearn = ref(0)
    const nowlearn = ref(0)
    const activeCardsTaro = ref(0)
    const nowCardsTaro = ref(0)
    const activeabout = ref(0)
    const nowabout = ref(0)
    const activevideo = ref(0)
    const nowvideo = ref(0)

    onMounted(() => {
      // var msg = document.getElementById('pricing')
      // var rect = msg.getBoundingClientRect()
      // // console.log('r1', rect.top, rect)
      // // nowPrice.value = rect.top.fixed()
      // nowPrice.value = rect.top.toFixed()

      try {
        var msg = document.getElementById('health')
        var rect = msg.getBoundingClientRect()
        nowhealth.value = rect.top.toFixed()
      } catch (error) {}
      try {
        var msg = document.getElementById('learn')
        var rect = msg.getBoundingClientRect()
        nowlearn.value = rect.top.toFixed()
      } catch (error) {}
      try {
        var msg = document.getElementById('CardsTaro')
        var rect = msg.getBoundingClientRect()
        nowCardsTaro.value = rect.top.toFixed()
      } catch (error) {}
      try {
        var msg = document.getElementById('about')
        var rect = msg.getBoundingClientRect()
        nowabout.value = rect.top.toFixed()
      } catch (error) {}
      try {
        var msg = document.getElementById('video')
        var rect = msg.getBoundingClientRect()
        nowvideo.value = rect.top.toFixed()
      } catch (error) {}

      // var msg = document.getElementById('testimonial')
      // var rect = msg.getBoundingClientRect()
      // // console.log('r2', rect.top, rect)
      // nowUser.value = rect.top.toFixed()

      // var msg = document.getElementById('contact')
      // var rect = msg.getBoundingClientRect()
      // // console.log('r3', rect.top, rect)
      // nowContact.value = rect.top.toFixed()

      // arr.forEach(function (it, i, menuAll) {
      //   // alert( i + ": " + item + " (массив:" + arr + ")" );

      //   var msg = document.getElementById(it.head)
      //   var rect = msg.getBoundingClientRect()
      //   // console.log('r2', rect.top, rect)
      //   nowUser.value = rect.top.toFixed()

      // })
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
      if (scrollNow.value > nowvideo.value - 50) {
        activehealth.value = false
        activelearn.value = false
        activeCardsTaro.value = false
        activeabout.value = false
        activevideo.value = true
      } else if (scrollNow.value > nowabout.value - 50) {
        activehealth.value = false
        activelearn.value = false
        activeCardsTaro.value = false
        activeabout.value = true
        activevideo.value = false
      } else if (scrollNow.value > nowCardsTaro.value - 50) {
        activehealth.value = false
        activelearn.value = false
        activeCardsTaro.value = true
        activeabout.value = false
        activevideo.value = false
      } else if (scrollNow.value > nowlearn.value - 50) {
        activehealth.value = false
        activelearn.value = true
        activeCardsTaro.value = false
        activeabout.value = false
        activevideo.value = false
      } else if (scrollNow.value > nowhealth.value - 50) {
        activehealth.value = true
        activelearn.value = false
        activeCardsTaro.value = false
        activeabout.value = false
        activevideo.value = false

        // activeContact.value = false
        // activeUser.value = true
        // activePrice.value = false
      } else {
        // activeContact.value = false
        // activeUser.value = true
        // activePrice.value = false
        activehealth.value = false
        activelearn.value = false
        activeCardsTaro.value = false
        activeabout.value = false
        activevideo.value = false
      }
    })

    const scrollToTo = (event) => {
      //   var container = event.target
      // this.scrollPosition = window.pageYOffset
      scrollNow.value = window.pageYOffset
    }

    // const banners = ref([
    //   { image: 'banner0.png' },
    //   { image: 'banner1.jpg' },
    //   { image: 'banner2.jpg' },
    // ])

    // const menuHidden = ref(true)
    return {
      menuAll,

      activehealth,
      nowhealth,
      activelearn,
      nowlearn,
      activeCardsTaro,
      nowCardsTaro,
      activeabout,
      nowabout,
      activevideo,
      nowvideo,

      // menuHidden,
      scrollNow,
      // scrollPosition,
      scrollToTo,

      // activePrice,
      // nowPrice,
      // activeUser,
      // nowUser,
      // activeContact,
      // nowContact,
      // banners,
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

  // beforeRouteEnter (to, from, next) {
  //   // getData((data) => {
  //     next(vm => {
  //       // vm.setData(data);
  //       vm.$nextTick(() => document.location.hash = '#top');
  //     });
  //   // });
  // },
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
