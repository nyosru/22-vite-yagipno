<template>
  <div id="about">
    <section class="testimonial-area pt-120">
      <div class="container">
        <div class="justify-center row">
          <div class="w-full mx-4 lg:w-1/2">
            <div class="pb-10 pt-40 text-center section-title">
              <h4 class="title">Обо мне</h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative overflow-hidden xbg-blue-600 call-to-action">
      <!-- list {{ list }} -->

      <!-- <template > -->
      <!-- <br/>
        <br/>
        {{ i }}
        <br/>
        {{ v }} -->
      <div class="container">
        <!-- 555555 -->
        <div class="justify-center row">
          <div class="w-full md:w-1/2">
            <p>
              На&nbsp;данный момент являюсь мастером директивного гипноза.
              <br />
              <br />
              Автор двух книг по&nbsp;практическому гипнозу. Супервизор.
              <br />
              <br />
              Президент "Союза специалистов без&nbsp;медикаментозного лечения"
              <a
                href="https://гипносоюз.рф/"
                target="_blank"
                class="text-blue-600 underline"
              >
                гипносоюз.рф
              </a>
              <br />
              <br />
              Отработал боле 10&nbsp;000 часов практики гипноза.
              <br />
              <br />
              У меня отличная семья: жена и&nbsp;двое детей.

              <br />
              <br />
              <b>
                Первый раз загипнотизировал человека,
                когда&nbsp;мне&nbsp;было&nbsp;13&nbsp;лет.
              </b>
              Сколько себя помню всегда увлекался гипнозом. Всегда что то искал,
              читал, пробывал. Еще с начальной школы, мне было любопытно
              подмечать, отличия между характерами человека его поведением.
              <br />
              <br />
              <b>
                В 2004 году закончил Национальный Университет внутренних дел
              </b>
              по специальности юрист правовед и получил офицерское звание
              лейтенант милиции, позже был назначен оперуполномоченным
              уголовного розыска по линии "особо тяжкие". В процессе работы имел
              возможность быть лично знаком с авторитетами преступного мира,
              специализирующими криминальным гипнозом.
              <br />
              <br />
              Позже закончил Крымский федеральный университет имени В.И.
              Вернадского и получил квалификацию магистр, специальность
              психолог.
            </p>
          </div>
          <div class="text-center w-full md:w-1/2">
            <img src="/img/ya1.jpg" class="inline mt-5 sm:m-3 w-4/5 sm:w-full" />
          </div>
        </div>
        <div class="justify-center row pt-10">
          <img src="/img/sert1.jpg" class="inline mr-3 mb-3 w-4/5 sm:w-2/5" />
          <img src="/img/sert2.jpg" class="inline  mr-3 mb-3 w-4/5 sm:w-2/5" />
          <img src="/img/sert3.jpg" class="inline  mr-3 mb-3 w-4/5 sm:w-2/5" />
          <img src="/img/sert4.jpg" class="inline  mr-3 mb-3 w-4/5 sm:w-2/5" />
        </div>


        <div class="justify-center row pt-10 hidden sm:visible">
          <img src="/img/ya2.jpg" class="inline xm-3 w-2/6 mr-2" />
          <!-- <img src="/img/ya3.jpg" class="inline xm-3 w-2/6" /> -->
          <img src="/img/ya4.jpg" class="inline xm-3 w-2/6" />
        </div>

        <div v-if="1==2" class="justify-center row pt-10">
          <img src="/img/ya2.jpg" class="inline xm-3 w-2/6 mr-2" />
          <!-- <img src="/img/ya3.jpg" class="inline xm-3 w-2/6" /> -->
          <img src="/img/ya4.jpg" class="inline xm-3 w-2/6" />

          <div v-if="1 == 2" class="w-full text-center">
            <iframe
              class="inline w-full md:w-2/5 mr-5"
              xwidth="560"
              height="315"
              src="https://www.youtube.com/embed/OuA0inK8ZPI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>

            <iframe
              class="inline w-full md:w-2/5"
              src="https://vk.com/video_ext.php?oid=80271537&id=456239504&hash=727643235d184630&hd=2"
              xwidth="853"
              height="315"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <section
      v-if="1 == 2"
      class="relative overflow-hidden xbg-blue-600 call-to-action"
    >
      <div class="xflex items-center justify-center p-3">
        <div>
          <!-- <h2 class="w-full text-2xl block-inline">{{ v.name }}</h2> -->
          <!-- <p class="w-full block-inline">{{ v.opis }}</p> -->
        </div>
      </div>

      <div class="flex items-center justify-center xpy-5 p-3">
        <!-- Записаться на приём
          <br />
          Бесплатная консультация -->
        <img src="/img/sert1.jpg" class="block-inline m-3 w-2/5" />
        <img src="/img/sert2.jpg" class="block-inline m-3 w-2/5" />
        <img src="/img/sert3.jpg" class="block-inline m-3 w-2/5" />
        <img src="/img/sert4.jpg" class="block-inline m-3 w-2/5" />
        <img src="/img/ya2.jpg" class="block-inline m-3 w-2/5" />
        <img src="/img/ya3.jpg" class="block-inline m-3 w-2/5" />
        <img src="/img/ya4.jpg" class="block-inline m-3 w-2/5" />
      </div>
    </section>
  </div>
</template>

<script>
// import { onMounted } from '@vue/runtime-core'
import { ref, onMounted } from 'vue'

import Numbers from '@/use/Numbers.ts'
// import oneForm from '@/views/block0/BlockMeroprOneForm.vue'
import axios from 'axios'

export default {
  // components: {
  //   oneForm,
  // },
  setup(props) {
    const list2 = ref([
      // {
      //   name: 'Депрессия',
      //   opis:
      //     'психическое расстройство, основными признаками которого являются сниженное — угнетённое, подавленное, тоскливое, тревожное, боязливое или безразличное — настроение и снижение или утрата способности получать удовольствие (ангедония).',
      // },
    ])

    const { odd } = Numbers()

    return {
      list2,
      odd,
    }
  },
}
</script>

<style></style>
