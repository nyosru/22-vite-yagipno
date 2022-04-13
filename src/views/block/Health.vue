<template>
  <div id="health">

    <section id="pricing" class="testimonial-area pt-120">
      <div class="container">
        <div class="justify-center row">
          <div class="w-full mx-4 lg:w-1/2">
            <div class="pb-10 pt-40 text-center section-title">
              <h4 class="title">Лечение</h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative overflow-hidden xbg-blue-600 call-to-action">
      <div class="grid gap-4 grid-cols-1 lg:grid-cols-2">
        <health-item
          v-for="(v, i) in list"
          :key="v.name"
          :datar="v"
          :i="i"
        ></health-item>
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

import HealthItem from '@/views/block/HealthItem.vue'

export default {
  components: {
    HealthItem,
    //   oneForm,
  },
  setup(props) {
    const list = ref([
      {
        name: 'Депрессия',
        img: '/img/depressiya.jpg',
        opis:
          'психическое расстройство, основными признаками которого являются сниженное — угнетённое, подавленное, тоскливое, тревожное, боязливое или безразличное — настроение и снижение или утрата способности получать удовольствие (ангедония).',
      },
      {
        name: 'Фобии',
        img: '/img/fobii.jpg',
        opis:
          'тревожное расстройство психики, при котором человека преследует постоянное чувство беспричинного страха, вызываемое определенного рода объектами, действиями или обстоятельствами. Это абсолютно иррациональное чувство, для которого нет оснований.',
      },
      {
        name: 'Панические атаки',
        img: '/img/panik-attak.jpg',
        opis:
          'необъяснимый, мучительный для больного приступ тяжёлой тревоги, сопровождаемый беспричинным страхом, в сочетании с различными вегетативными (соматическими) симптомами.',
      },
      {
        name: 'Низкая самооценка',
        img: '/img/nizs.jpg',
        opis:
          'принижение человеком своих достоинств, качеств и возможностей. В первую очередь, это то, как и что думает о себе человек, во вторую – то, как он себя ведет, что делает, на что решается, как взаимодействует с миром и окружающими людьми.',
      },
      {
        name: 'Автофобия',
        img: '/img/autofobiya.jpg',
      },
      {
        name: 'Страх вождения авто',
        img: '/img/strahvogd.jpg',
      },
      {
        name: 'Ожирение',
        img: '/img/ogir.jpg',
      },
      {
        name: 'Булимия',
        img: '/img/bolim.jpg',
      },
      {
        name: 'Анорексия',
        img: '/img/anore.jpg',
      },
      {
        name: 'Энурез, Заикание',
        img: '/img/anoreks.jpg',
      },
      {
        name: 'Аллергия-приобретеннная',
        img: '/img/alerg.jpg',
      },
      {
        name: 'Алкоголизм',
        img: '/img/alko.jpg',
      },
      {
        name: 'Табакокурение',
        img: '/img/tabak.jpg',
      },
      {
        name: 'Игромания',
        img: '/img/igra.jpg',
      },
      {
        name: 'Импотенция',
        img: '/img/impo.jpg',
      },
      {
        name: 'Аноргазмия',
        img: '/img/igra.jpg',
      },
    ])

    const { odd } = Numbers()

    return {
      list,
      odd,
    }
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
