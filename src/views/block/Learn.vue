<template>
  <div id="learn">
    <section class="testimonial-area pt-120">
      <div class="container">
        <div class="justify-center row">
          <div class="w-full mx-4 lg:w-1/2">
            <div class="pb-10 pt-40 text-center section-title">
              <h4 class="title">Обучение</h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative overflow-hidden xbg-blue-600 call-to-action">
      <!-- <section class="testimonial-area pt-120"> -->
      <div class="container">
        <div class="justify-center row">
          <div class="w-full xmx-4 md:w-1/2">
            <div class="pr-10">
              <!-- <div class="sticky top-20"> -->
              <p>
                Семинар проходит по алгоритму программ применяемых при
                подготовки агентов спец.служб. Обучение под гипнозом. В нашем
                случае обучение гипнозу под гипнозом. И если в ходе обучения вам
                покажется что вы что то не запомнили, то вам это покажется, вся
                информация запомниться разумом и телом и позже как будто
                распакуется и все пробелы будут заполнены.
              </p>
              <br />
              <p>
                Даты и место проведения обучения смотри в разделе Мероприятия на
                сайте
                <a
                  href="https://гипносоюз.рф/"
                  target="_blank"
                  class="text-blue-800 no-underline hover:underline"
                >
                  ГипноСоюз.рф
                </a>
              </p>
              <!-- </div> -->
            </div>
          </div>
          <div class="w-full mt-5 md:mt-0 xmx-4 md:w-1/2">
          <img src="/img/learning1.jpg" class="w-full mx-5">
          </div>
          <div class="w-full mt-5 text-center">
            <iframe
              class="inline mx-5 mb-5"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/r1nWGHZsD3I"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <iframe
            class="inline"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/PcS2t1uOEYw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
      <!-- list {{ list }} -->

      <div
        v-for="(v, i) in list2"
        :key="v.name"
        class="grid grid-cols-2 gap-4 place-content-stretch xh-48 mb-5"
        :class="{ 'bg-gray-300': odd(i) }"
      >
        <div v-if="odd(i)" class="xflex items-center justify-center p-3">
          <div>
            <h2 class="w-full text-2xl block-inline">{{ v.name }}</h2>
            <p class="w-full block-inline">{{ v.opis }}</p>
          </div>
        </div>

        <div class="flex items-center justify-center xpy-5 p-3">
          Записаться на приём
          <br />
          Бесплатная консультация
        </div>

        <div v-if="!odd(i)" class="xflex items-center justify-center p-3">
          <div>
            <h2 class="w-full text-2xl block-inline">{{ v.name }}</h2>
            <p class="w-full block-inline">{{ v.opis }}</p>
          </div>
        </div>
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
