<template>
  <div>
    <div v-for="n in 30" :key="n">
      <div class="bg-slate-400">
        <h1>e{{ n }}</h1>
        <h1>e{{ n }}</h1>
        <h1>e{{ n }}</h1>
      </div>
      <component :is="'e' + n" />
    </div>
  </div>
</template>

<script>
// import ButtonRepo from './../ButtonRepo.vue'

import e1 from './../example/e1.vue'
import e2 from './../example/e2.vue'
import e3 from './../example/e3.vue'
import e4 from './../example/e4.vue'
import e5 from './../example/e5.vue'
import e6 from './../example/e6.vue'
import e7 from './../example/e7.vue'
import e8 from './../example/e8.vue'
import e9 from './../example/e9.vue'
import e10 from './../example/e10.vue'
import e11 from './../example/e11.vue'
import e12 from './../example/e12.vue'
import e13 from './../example/e13.vue'
import e14 from './../example/e14.vue'
import e15 from './../example/e15.vue'
import e16 from './../example/e16.vue'
import e17 from './../example/e17.vue'
import e18 from './../example/e18.vue'
import e19 from './../example/e19.vue'
import e20 from './../example/e20.vue'
import e21 from './../example/e21.vue'
import e22 from './../example/e22.vue'
import e23 from './../example/e23.vue'
import e24 from './../example/e24.vue'
import e25 from './../example/e25.vue'
import e26 from './../example/e26.vue'
import e27 from './../example/e27.vue'
import e28 from './../example/e28.vue'
import e29 from './../example/e29.vue'
// import e2 from './../example/e2.vue'

import { ref } from 'vue'

export default {
  setup(props) {},

  components: {
    e1,
    e2,
    e3,
    e4,
    e5,
    e6,
    e7,
    e8,
    e9,
    e10,
    e11,
    e12,
    e13,
    e14,
    e15,
    e16,
    e17,
    e18,
    e19,
    e20,
    e21,
    e22,
    e23,
    e24,
    e25,
    e26,
    e27,
    e28,
    e29,
  },
}
</script>
