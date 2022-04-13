<template>
  <div id="CardsTaro">
    <!--====== CALL TO ACTION PART START ======-->

    <section
      v-if="1 == 1"
      xxid="pricing"
      xid="testimonial"
      class="testimonial-area pt-120"
    >
      <div class="container">
        <!-- 555555 -->
        <div class="justify-center row">
          <div class="w-full mx-4 lg:w-1/2">
            <div class="pb-10 pt-40 text-center section-title">
              <h4 class="title">Карты ТАРО</h4>
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
              Таро это 78 дверей, через которые входит мудрость. Каждая карта
              имеет свой особый философский и эзотерический смысл. ТАРО
              рассказывает о Законах развития Вселенной. Эти же Законы действуют
              и в человеческом обществе и в судьбе человека. С помощью данного
              инструмента можно не только предсказывать будущее, получать ответы
              на интересующие вопросы, а так же вводить в состояние транса и
              оказывать терапию. Обучение гаданию на картах ТАРО авторской
              программе. Карты расскажут не то что хотите услышать, а то что
              происходит на самом деле. и далее кнопка стоимость услуги 25000р в
              мини группе 35000р индивидуально. Очно или онлайн. Выдаётся
              сертификат
            </p>
          </div>
          <div class="w-full md:w-1/2">
            <div class="w-full text-center">
              <img
                src="/img/taro1.jpg"
                class="inline pb-3 pr-3"
                style="max-height: 200px;"
              />

              <img
                src="/img/taro2.jpg"
                class="inline pb-3"
                style="max-height: 200px;"
              />
            </div>
          </div>
        </div>
        <div class="justify-center row pt-10">
          <div class="w-full text-center">
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
    const list = ref([
      // {
      //   name: 'Депрессия',
      //   opis:
      //     'психическое расстройство, основными признаками которого являются сниженное — угнетённое, подавленное, тоскливое, тревожное, боязливое или безразличное — настроение и снижение или утрата способности получать удовольствие (ангедония).',
      // },
      // {
      //   name: 'Аноргазмия',
      // },
    ])

    const { odd } = Numbers()

    return {
      list,
      odd,
    }
  },
}
</script>

<style></style>
