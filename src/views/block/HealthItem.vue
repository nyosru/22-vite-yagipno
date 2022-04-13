<template>
  <div
    xclass="grid grid-cols-2 gap-4 place-content-stretch xh-48 mb-5"
    xxclass="w-full lg:w-3/6 h-40"
    class="py-10"
    x:class="{ 'bg-gray-100': odd(i) }"
    xx:class="{ 'mt-20': !odd(i) }"
  >
    <div class="items-center justify-center p-3">
      <div class="px-10 sm:px-5">
        <div class="visible sm:h-0 sm:invisible block w-full text-center">
          <img :src="datar.img" class="w-1/2 inline" />
        </div>
        <img
          :src="datar.img"
          class="invisible h-0 sm:h-auto sm:visible block w-1/2 sm:float-left sm:mr-5 sm:w-1/3"
        />
        <h2 class="w-full text-center sm:text-left text-2xl block-inline">
          {{ datar.name }}
        </h2>
        <p class="w-full block-inline">{{ datar.opis }}</p>
      </div>
    </div>

    <div class="flex items-center justify-center xpy-5 p-3">
      <button
        type="button"
        xclass="cursor-pointer mr-5 bg-blue-600 hover:bg-blue-700 px-4 py-2"
        class="cursor-pointer mr-5 font-mono text-md block-inline text-black hover:text-white px-4 py-2 bg-blue-300 rounded-md shadow-sm transition hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ease-in-out delay-150 duration-300"
        data-bs-toggle="modal"
        :data-bs-target="'#modalHealth' + i"
        @click="modalName = 'Записаться на приём'"
      >
        Записаться на&nbsp;приём
      </button>
      <br />
      <button
        type="button"
        xclass="cursor-pointer"
        class="cursor-pointer mr-5 font-mono block-inline px-4 py-2 text-md bg-blue-100 text-black hover:text-white rounded-md shadow-sm transition hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ease-in-out delay-150 duration-300"
        data-bs-toggle="modal"
        :data-bs-target="'#modalHealth' + i"
        @click="modalName = 'Записаться на бесплатную консультацию'"
      >
        Бесплатная консультация
      </button>
    </div>

    <button
      v-if="1 == 2"
      type="button"
      class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      data-bs-toggle="modal"
      data-bs-target="#modalHealth"
    >
      Vertically centered modal
    </button>

    <div
      class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
      :id="'modalHealth' + i"
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
          <div
            class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md"
          >
            <h5
              class="text-xl font-medium leading-normal text-gray-800"
              id="exampleModalScrollableLabel"
            >
              {{ datar.name }}
              <span class="text-blue-600">Вылечить!</span>
            </h5>
            <button
              type="button"
              class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div class="modal-body relative p-4">
            <div class="block text-center py-2 bg-green-100 mb-3">
              {{ modalName }}
            </div>


            <health-item-form :bolezn="datar.name" :tip="modalName" />

            <!-- <p class="text-gray-500" >
              Отправте свой контактный номер телефона и&nbsp;в&nbsp;ближайшее
              рабочее время (&nbsp;с&nbsp;10&nbsp;до&nbsp;16&nbsp;мск&nbsp;)
              позвоню
            </p> -->

          </div>
          <!-- <div
        class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
        <button type="button"
          class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
          data-bs-dismiss="modal">
          Close
        </button>
        <button type="button"
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
          Save changes
        </button>
      </div> -->
        </div>
      </div>
    </div>

    <!-- <div v-if="!odd(i)" class="xflex items-center justify-center p-3">
      <div>
        <h2 class="w-full text-2xl block-inline">{{ datar.name }}</h2>
        <p class="w-full block-inline">{{ datar.opis }}</p>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Numbers from '@/use/Numbers.ts'
const { odd } = Numbers()

import HealthItemForm from '@/views/block/HealthItemForm.vue'

const props = defineProps(['datar', 'i'])
const modalName = ref('')
</script>

<style></style>
