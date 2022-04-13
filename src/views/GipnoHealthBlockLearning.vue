<template>
  <section class="text-gray-600 body-font">
    <div
      class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
    >
      <div
        class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
      >
        <h1
          class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
        >
          Обучение гипнозу
          <!-- <br class="hidden lg:inline-block" /> -->
          <!-- readymade gluten -->
        </h1>
        <p class="mb-8 leading-relaxed">
          Большой практический курс для максимального погружения и быстрого
          старта!
        </p>
        <div class="flex xjustify-center">
          <!-- <button
            class="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg"
          >
            Бесплатная консультация
          </button> -->

          <!-- <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
  Забронировать встречу
  </button> -->

          <button
            class="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg"
          >
            Записаться на курс
          </button>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img
          class="object-cover object-center rounded"
          alt="hero"
          src="/photo/group.jpg"
          xsrc="https://dummyimage.com/720x600"
        />
      </div>
    </div>

    <div class="">
      <div class="">
        <!-- <div x-data="{ show: false }"> -->
        <div class="flex justify-center">
          <button
            @click="show1 = !show1"
            type="button"
            class="leading-tight bg-blue-600 text-gray-200 rounded px-6 py-3 text-sm focus:outline-none focus:border-white"
          >
            Show Modal
          </button>
        </div>

        <div
          v-if="show1"
          tabindex="0"
          class="z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed"
        >
          <div
            @click="show1 = !show1"
            class="z-50 relative p-3 mx-auto my-0 max-w-full"
            style="width: 600px;"
          >
            <div
              class="bg-white rounded shadow-lg border flex flex-col overflow-hidden"
            >
              <button
                @click="show1 = !show1"
                class="fill-current h-6 w-6 absolute right-0 top-0 m-6 font-3xl font-bold"
              >
                &times;
              </button>
              <div class="px-6 py-3 text-xl border-b font-bold">
                Title of the modal
              </div>
              <div class="p-6 flex-grow">
                <p>
                  You are watching this text in tailwind css model with alpine
                  JS.
                </p>
              </div>
              <div class="px-6 py-3 border-t">
                <div class="flex justify-end">
                  <button
                    @click="show1 = !show1"
                    type="button"
                    class="bg-gray-700 text-gray-100 rounded px-4 py-2 mr-1"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    class="bg-blue-600 text-gray-200 rounded px-4 py-2"
                  >
                    Saves Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-black opacity-50"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import { ref } from 'vue'

export default {
  components: {},
  setup() {
    const show1 = ref(true)

    return {
      show1,
    }
  },
}
</script>
