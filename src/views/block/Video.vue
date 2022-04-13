<template>
  <div id="video">
    <!--====== CALL TO ACTION PART START ======-->

    <section
      v-if="1 == 1"
      id="pricing"
      xid="testimonial"
      class="testimonial-area xpt-120"
    >
      <div class="container">
        <!-- 555555 -->
        <div class="justify-center row">
          <div class="w-full mx-4 lg:w-1/2">
            <div class="pb-10 pt-5 sm:pt-40 text-center section-title">
              <h4 class="title">Видео</h4>
              <!-- <p class="text">
              Смотрим тут специалистов от которых даже воздух вокруг управляется
              лучше
            </p> -->
            </div>
            <!-- section title -->
          </div>
        </div>
      </div>
      <!-- row -->
    </section>

    <section class="relative overflow-hidden xbg-blue-600 call-to-action">
      <!-- 11 - {{ odd(1) }}
    <br />
    22 - {{ odd(2) }}
    <br />
    13 - {{ odd(3) }}
    <br /> -->
      <!-- mero {{ mero }} -->

      <!-- <button
      type="button"
      class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      data-bs-toggle="modal"
      data-bs-target="#exampleModalCenter"
    >
      Vertically centered modal
    </button> -->
      <div v-if="1 == 2">
        <img
          src="https://i.ytimg.com/vi/OuA0inK8ZPI/hq720.jpg"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalCenter"
          class="cursor-pointer"
        />
        <div
          class="modal fade fixed top-0 left-0 bg-opacity-70 bg-gray-200 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="exampleModalCenter"
          tabindex="-1"
          aria-labelledby="exampleModalCenterTitle"
          aria-modal="true"
          role="dialog"
        >
          <div
            class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none"
          >
            <div
              class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
            >
              <!-- <div
            class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md"
          > -->
              <!-- <h5
              class="text-xl font-medium leading-normal text-gray-800"
              id="exampleModalScrollableLabel"
            >
              Modal title
            </h5> -->
              <!-- <button
              type="button"
              class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button> -->
              <!-- </div> -->
              <!-- <div class="modal-body relative p-4"> -->
              <!-- <p>This is a vertically centered modal.</p> -->
              <iframe
                xclass="w-full"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/OuA0inK8ZPI"
                title="video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <!-- </div> -->
              <!-- <div
            class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md"
          >
            <button
              type="button"
              class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
            >
              Save changes
            </button>
          </div> -->
            </div>
          </div>
        </div>
      </div>

      <!-- videoList {{ videoList }} -->
      <div class="text-center">
        <!-- <div class="columns-2 ..."> -->
        <!-- <img v-for="v in videoList" :key="v.uri" class="w-full aspect-video ..." :src="'https://i.ytimg.com/vi/'+v.uri" /> -->
        <span
          v-for="(v, vi) in videoList"
          :key="v.uri"
          class="mb-1 mr-2 block-inline"
        >
          <!-- <img class="w-full aspect-video ..." :src="'https://i.ytimg.com/vi/'+v.uri+'/hq720.jpg'" /> -->

          <span
            data-bs-toggle="modal"
            :data-bs-target="'#exampleModalCenter' + vi"
            class="cursor-pointer text-center"
          >
            <iframe
              class="xw-full xaspect-video xw-full xh-300 xw-500 py-3 pb-3 float-left"
              width="560"
              height="315"
              :src="'https://www.youtube.com/embed/' + v.uri"
              title="video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </span>

          <div
            class="modal fade fixed top-0 left-0 bg-opacity-70 bg-gray-200 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
            xid="exampleModalCenter"
            :id="'#exampleModalCenter' + vi"
            tabindex="-1"
            aria-labelledby="Title"
            aria-modal="true"
            role="dialog"
          >
            <div
              class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none"
            >
              <div
                class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
              >
                <!-- <div
            class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md"
          > -->
                <!-- <h5
              class="text-xl font-medium leading-normal text-gray-800"
              id="exampleModalScrollableLabel"
            >
              Modal title
            </h5> -->
                <!-- <button
              type="button"
              class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button> -->
                <!-- </div> -->
                <!-- <div class="modal-body relative p-4"> -->
                <!-- <p>This is a vertically centered modal.</p> -->
                <iframe
                  xclass="w-full"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/OuA0inK8ZPI"
                  title="video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <!-- </div> -->
                <!-- <div
            class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md"
          >
            <button
              type="button"
              class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
            >
              Save changes
            </button>
          </div> -->
              </div>
            </div>
          </div>
          <!-- </div> -->
          <!-- <img class="w-full aspect-square ..." src="..." /> -->
          <!-- ... -->
        </span>
      </div>

      <div v-if="1 == 2">
        <div class="container-fluid">
          <div v-for="(v, k) in mero" :key="k.name" class="justify-end row">
            <div
              v-if="odd(k)"
              class="md:block hidden xabsolute xtop-0 xleft-0 w-full md:w-1/2 h-0 md:h-full call-action-image"
            >
              <img
                :src="'/merop/' + v.img"
                xsrc="assets/images/call-to-action.png"
                alt=""
                :class="'rotate' + RandomInt(1, 4)"
                class="shadow-xl rounded merop-call"
              />
            </div>

            <div
              class="block md:hidden xabsolute xtop-0 xleft-0 w-full md:w-1/2 h-full call-action-image"
            >
              <img
                :src="'/merop/' + v.img"
                xsrc="assets/images/call-to-action.png"
                alt=""
                :class="'rotate' + RandomInt(1, 4)"
                class="shadow-xl rounded merop-call"
              />
            </div>

            videoList {{ videoList }}

            <img
              src="https://i.ytimg.com/vi/OuA0inK8ZPI/hq720.jpg"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalCenter"
              class="cursor-pointer"
            />

            <div
              class="modal fade fixed top-0 left-0 bg-opacity-70 bg-gray-200 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
              id="exampleModalCenter"
              tabindex="-1"
              aria-labelledby="exampleModalCenterTitle"
              aria-modal="true"
              role="dialog"
            >
              <div
                class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none"
              >
                <div
                  class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
                >
                  <!-- <div
            class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md"
          > -->
                  <!-- <h5
              class="text-xl font-medium leading-normal text-gray-800"
              id="exampleModalScrollableLabel"
            >
              Modal title
            </h5> -->
                  <!-- <button
              type="button"
              class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button> -->
                  <!-- </div> -->
                  <!-- <div class="modal-body relative p-4"> -->
                  <!-- <p>This is a vertically centered modal.</p> -->
                  <iframe
                    xclass="w-full"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/OuA0inK8ZPI"
                    title="video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <!-- </div> -->
                  <!-- <div
            class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md"
          >
            <button
              type="button"
              class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
            >
              Save changes
            </button>
          </div> -->
                </div>
              </div>
            </div>

            <div class="w-full md:w-1/2">
              <div
                class="pt-4 sm:pt-32 mx-auto text-center call-action-content"
              >
                <h2
                  class="mb-0 pt-0 text-3xl md:text-5xl font-semibold leading-tight xtext-white"
                >
                  {{ v.name ?? v.where }}
                </h2>

                <div
                  v-if="v.status && v.status == 'running'"
                  class="text-center p-5 block rounded-sm bg-gradient-to-tr from-blue-200 to-cyan-500 my-2"
                >
                  Идёт в данный момент!
                </div>

                <p
                  class="pt-0 mt-3 mb-6 sm:mt-2 sm:mb-6 rounded-sm xtext-white bg-green-400"
                >
                  {{ v.where }} / {{ v.date }}
                </p>

                <p class="px-3 sm:px-0 xmb-6 xtext-white text-left">
                  <!-- {{ v.opis }} -->
                  <span v-html="v.opis_small"></span>
                </p>

                <div class="text-center pt-5 xpb-5">
                  <!-- <router-link :to="{path:'/details/12345'}">click me</router-link> -->

                  <router-link
                    :to="{ path: '/m/' + v.id }"
                    class="xinline-block font-mono xbg-gradient-to-r xfrom-cyan-500 xto-blue-500 xbg-blue-500 xtext-white text-blue-500 xpy-1 xpx-2 mr-4 xring-2 xrounded-sm hover:underline"
                  >
                    Полное описание
                  </router-link>

                  <!-- <a :href="'/m/'+v.id" class="inline-block font-mono 
              xbg-gradient-to-r xfrom-cyan-500 xto-blue-500 
              bg-blue-500 text-white
              py-1 px-2 mr-4
              ring-2 rounded-sm" >Полное описание</a> -->
                  <!-- <a
              :href="'/m/' + v.id"
              class="inline-block font-mono xbg-gradient-to-r xfrom-cyan-500 xto-blue-500 bg-blue-500 text-white py-1 px-2 ring-2 rounded-sm"
            > -->

                  <router-link
                    :to="{ path: '/m/' + v.id }"
                    xclass="inline-block font-mono xbg-gradient-to-r xfrom-cyan-500 xto-blue-500 bg-blue-500 text-white py-1 px-2 ring-2 rounded-sm"
                    class="xinline-block font-mono xbg-gradient-to-r xfrom-cyan-500 xto-blue-500 xbg-blue-500 xtext-white text-blue-500 xpy-1 xpx-2 mr-4 xring-2 xrounded-sm hover:underline"
                  >
                    Выбрать тариф
                    <!-- </a> -->
                  </router-link>
                </div>

                <br />
                <br />

                <one-form
                  :head="
                    'Мероприятие: ' +
                    v.name +
                    '(' +
                    v.date +
                    ')' +
                    '\n\r' +
                    'Форма в списке мероприятий ( без выбора тарифа )'
                  "
                />
              </div>
              <!-- slider-content -->
            </div>

            <div
              v-if="!odd(k)"
              class="md:block hidden xabsolute xtop-0 xleft-0 w-full md:w-1/2 h-full call-action-image"
            >
              <img
                :src="'/merop/' + v.img"
                alt="call-to-action"
                :class="'rotate' + RandomInt(1, 4)"
                class="shadow-xl rounded merop-call"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- row -->
      <!-- container -->
    </section>

    <!--====== CALL TO ACTION PART ENDS ======-->
  </div>
</template>

<script>
// import { onMounted } from '@vue/runtime-core'
import { ref, onMounted } from 'vue'

// import oneForm from '@/views/block0/BlockMeroprOneForm.vue'
import axios from 'axios'

export default {
  // components: {
  //   oneForm,
  // },
  setup(props) {
    const mero = ref([])

    const mero0 = [
      {
        id: 1,
        name: 'Гипноз Высшая школа',
        where: 'Санкт-Петербург',
        date: '25-28 марта',
        opis:
          'Обучение гипнозу: Классика гипноза. Эриксоновский гипноз. Директивный гипноз. Индукция Элмана. Техники НЛП.' +
          'Неформальный и невербальный гипноз. Ментальная манипуляция. Гипноз через состояние. Экстрасенсорика. Коллективный разум.' +
          'Терапия в гипнозе. Гипноз с детьми. Терапия при энурезе, заикании, умственной отсталости. Работа с энергополем родителя.',

        img: 'piter.jpg',
        // status: 'running',
        status: 'finish',
      },
      {
        id: 2,
        name: 'Гипноз Московская сессия',
        where: 'Москва',
        date: '21-24 апреля',
        opis:
          'Обучение гипнозу: Классика гипноза. Эриксоновский гипноз. Директивный гипноз. Индукция Элмана. Техники НЛП.' +
          'Неформальный и невербальный гипноз. Ментальная манипуляция. Гипноз через состояние. Экстрасенсорика. Коллективный разум.' +
          'Терапия в гипнозе. Гипноз с детьми. Терапия при энурезе, заикании, умственной отсталости. Работа с энергополем родителя.',

        img: 'msk.jpg',
      },
      {
        id: 3,
        name: 'Летний фестиваль целителей',
        where: 'Крым Лисья Бухта',
        date: '8 июня',
        opis:
          'Конкурс для людей обладающих целительскими, экстрасенсорными и иными навыками и умениями. Каждому подавшему заявление на участие предоставляется время на свой мастер класс или презентацию. Время регламентировано. Призы лучшим! Уважение каждому!',
        // img: 'buhta.webp',
        img: 'zmei.jpg',
      },
      {
        id: 7,
        name: 'Марафон жизни',
        where: 'Крым, Лисья Бухта',
        date: '10-17 июня',
        opis:
          'Обучение гипнозу на берегу Чёрного Моря. Гипноз, медитация,  обряды, сокральные знания, рыбалка, экскурсии, ловля крабов, оздоровления, развлечения. <br/><br/> Хорошо обучается тот, кто хорошо отдыхает.  Засыпать и просыпается под шум моря. <br/> <br/> Стать единым с природой. <br/> <br/> Лисья Бухта - это магическое место и лучший отдых.',
        img: 'buhta.webp',
      },
    ]

    // onMounted(() => {
    //   axios
    //     .get('http://base15.php-cat.com/api/gipnos/meropriyatiya')
    //     .then((response) => {
    //       console.log('response.data', response.data)
    //       // this.info = response.data.bpi;
    //       mero.value = response.data.merop
    //     })
    //     .catch((error) => {
    //       console.log( 'error', error)
    //     //   this.errored = true
    //     })
    //     // .finally(() => (this.loading = false))
    // })

    function RandomInt(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
    }

    function odd(number) {
      return number % 2 === 0 ? true : false
    }

    const videoList = [
      { uri: 'bSuJdZFrPrA' },
      { uri: 'fdxOCkfF0L0' },
      { uri: 'ionHoDPCLJQ' },
      { uri: 'WOHqMj2OaNA' },
      { uri: 'ostSKn1DC9I' },
      { uri: 'bsUFR9AL__s' },
      { uri: 'bqt3RDfAY-A' },
    ]

    return {
      videoList,
      // mero,
      RandomInt,
      odd,
    }
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
  },
}
</script>

<style>
img.merop-call {
  width: 60%;
  height: 60%;
  margin: 15%;
}

.rotate1 {
  transform: rotate(4deg);
}
.rotate3 {
  transform: rotate(2deg);
}
.rotate3 {
  transform: rotate(3deg);
}
.rotate2 {
  transform: rotate(-4deg);
}
.rotate4 {
  transform: rotate(-2deg);
}

/* .bg-call1{
  background-image: url('/cvetu.jpg');
  background-position: center center;
  background-size: cover;
} */
</style>
