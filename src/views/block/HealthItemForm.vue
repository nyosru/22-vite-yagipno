<template>
  <div>
    <form v-if="!showSuccess" class="" @submit.prevent="sendMsg">
      <div class="flex justify-center">
        <div class="w-4/5">
          <div v-if="1 == 2" class="text-left">
            Как Вас зовут
            <br />
            <input v-model="fio" type="text" class="rounded-md" />
          </div>
          <div class="mt-3">
            Телефон
            <br />
            <input
              v-model="phone"
              type="text"
              class="rounded-md text-center"
              placeholder="8-999-888-77-66"
            />
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <button
          v-if="!formLoader"
          type="submit"
          class="mt-5 mb-10 px-5 py-2.5 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-md font-medium text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Отправить
        </button>
        <div v-else class="mt-5 mb-10 px-5 py-2.5 text-center">
          ... обрабатываю запрос ...
        </div>
      </div>
    </form>
    <div v-if="showSuccess" class="p-10 bg-green-400 text-center">
      <img src="/logo.svg" width="60" alt="" border="0" class="inline" />
      <p class="text-black">Заявка отправлена успешно!</p>
      <p class="text-black">
        Указан телефон:
        <u>{{ phone }}</u>
      </p>
      <p class="text-black">Скоро позвоню</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// // import Numbers from '@/use/Numbers.ts'
// // const { odd } = Numbers()

const props = defineProps({ bolezn: String, tip: String })

const fio = ref('')
const phone = ref('')
const showSuccess = ref(false)
const showWarning = ref(false)
const formLoader = ref(false)

// import axios from 'axios'
import sendTelegramm from '@/use/sendTelegramm.ts'

const sendMsg = async () => {
  // console.log(777, fio.value, phone.value, props.bolezn, props.tip)

  formLoader.value = true

  const { sended, sendTo } = sendTelegramm()
  sendTo.value.push('1000098412') // gipno sergey
  // sendTo.value.push('5152088168'); // ya test serhio

  const { sendToTelegramm } = sendTelegramm()
  let ww = await sendToTelegramm(
    'запись на лечение с сайта:<br/>' +
      'телефон: ' +
      phone.value +
      '<br/>' +
      'болезнь: ' +
      props.bolezn +
      '<br/>' +
      'тип запроса: ' +
      props.tip +
      '<br/>',
  )

  if (sended.value === true) {
    showSuccess.value = true
    formLoader.value = false
    // return response
  } else {
    showSuccess.value = false
    formLoader.value = false
    console.log('error', e)
  }
}
</script>

<style></style>
