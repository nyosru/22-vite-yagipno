<template>
  <!--====== CALL TO ACTION PART START ======-->

  <section
    id="call-to-action"
    class="relative overflow-hidden bg-blue-600 call-to-action"
  >
    <div class="container-fluid">
      <div class="justify-end row">
        <!--   -->
        <div
          class="invisible md:visible w-full md:w-1/2 xabsolute xtop-0 xleft-0 xw-1/2 xh-full xcall-action-image xbg-call1"
        >
          <div
            class="xabsolute xtop-0 xleft-0 w-full h-full call-action-image bg-call1"
          >
            <!-- <img src="assets/images/call-to-action.png" alt="call-to-action" /> -->
          </div>
        </div>

        <div class="w-full md:w-1/2">
          <div class="py-32 mx-auto text-center call-action-content">
            <h2 class="mb-5 text-3xl sm:text-5xl  font-semibold leading-tight text-white">
              Вступить в&nbsp;союз специалистов!
            </h2>
            <p class="mb-6 px-3 md:px-0 text-white">
              <!-- Оказываете услуги нашего профиля? Вступайте в наш союз!  -->
              Обучение, поддержка, обмен опытом. Плановые встречи повышения
              квалификации. Отправьте свой телефон и&nbsp;мы&nbsp;перезвоним
              и&nbsp;ответим на&nbsp;все&nbsp;вопросы!
            </p>

            <one-form :head="'Форма вступить в союз'" />
            
          </div>
          <!-- slider-content -->
        </div>
      </div>
      <!-- row -->
    </div>
    <!-- container -->
  </section>

  <!--====== CALL TO ACTION PART ENDS ======-->
</template>

<script>
// import { ref } from 'vue'

import oneForm from './BlockMeroprOneFormClear.vue'

export default {
  components: {
    oneForm,
  },
  setup() {
    return {}
  },
}
</script>

<style>
.bg-call1 {
  background-image: url('/cvetu.webp');
  background-position: center center;
  background-size: cover;
}
</style>
