<template>
  <div class="xpt-32 mx-auto text-center call-action-content">
   
    <div class="text-center">
      <form
        v-if="!form1_success"
        @submit.prevent="formSend"
        action="#"
        class="relative w-5/6 mx-auto чmd:w-2/3 call-newsletter"
      >
        <i
          class="absolute top-0 left-0 pt-3 pl-5 text-xl text-blue-600 lni-phone xlni-envelope"
        ></i>
        <input
          type="text"
          v-model="phone1"
          placeholder="8-999-888-77-66"
          class="w-full py-3 pl-12 pr-50 bg-white rounded-full focus:outline-none"
          required
        />
        <button
          type="submit"
          class="md:absolute md:top-0 md:right-0 px-6 py-2 mt-1 mr-2 font-bold text-white duration-300 
          md:bg-blue-600 rounded-full md:hover:bg-blue-500
          bg-blue-800 hover:bg-blue-900"
        >
          Хочу принять участие
        </button>
      </form>
    </div>
  </div>

  <div
    v-if="form1_warning"
    class="xpt-32 mx-auto text-center call-action-content bg-yellow-300 p-2 rounded-lg"
  >
    упс ... произошла ошибка, повторите пожалуйста и если не получается
    отправить заявку позвоните
    <a href="tel:+79781483337"><u>8-978-148-33-37</u></a>
  </div>

  <div
    v-if="form1_success"
    class="xpt-32 mx-auto text-center call-action-content bg-green-200 p-2 rounded-lg"
  >
    Заявка отправлена, в&nbsp;ближайшее время позвоним уточнить заявку
    и&nbsp;расскзать о мероприятии
  </div>

</template>

<script>
import {
  ref,
  // onMounted, watchEffect, onUpdated
} from 'vue'
// import axios from 'axios'

import sendTelegramm from '@/use/sendTelegramm.ts'

export default {
  // data() {
  //   return {
  //     name1 : '',
  //     phone1 : ''
  //   }
  // },
  props: {
    head: String,
  },
  // components: {},
  setup(props) {
    console.log('props', props.head)

    const showForm = ref(false)
    const name1 = ref('')
    const phone1 = ref('')

    const form1_success = ref(false)
    const form1_warning = ref(false)

    // const sendMsg = async (domain = '', text = '') => {
    //   axios
    //     .post('http://base15.php-cat.com/api/msg', {
    //       domain,
    //       text: text ?? '',
    //       // судя из примеров body это тело запроса (axios преобразует автоматом в json формат)
    //     })
    //     .then((response) => {
    //       // console.log(77799911)
    //       // console.log(response.data)
    //       // console.log(777999)
    //       // console.log(response.status)
    //       // console.log(777999222)
    //       // console.log(response.headers)
    //       // console.log(777999)
    //       if (response.status == 200) {
    //         form1_success.value = true
    //         form1_warning.value = false
    //         return response
    //       } else {
    //         form1_warning.value = true
    //       }
    //     })
    //     .catch((e) => {
    //       // this.errors.push(e)
    //       console.log('error', e)
    //       form1_warning.value = true
    //     })
    // }

    // // const sendMsgForm1 = 1;
    // const sendMsgForm1 = (text = '') => {
    //   return sendMsg(
    //     'gipnosouz',
    //     text +
    //       ' \n\r Как зовут: ' +
    //       (name1.value ?? '-') +
    //       ' \n\r Телефон : ' +
    //       (phone1.value ?? '-'),
    //   )
    // }

    const loading = ref(false)
    const titleFrom = ref('')
    // const formName = ref('')
    // const formPhone = ref('')
    const result = ref('')

    const { sended , sendTo } = sendTelegramm()
    sendTo.value.push('1000098412'); // gipno sergey
    // sendTo.value.push('1368605419'); // ya test

    const formSend = async () => {
      loading.value = true

      const { sendToTelegramm } = sendTelegramm()
      let ww = await sendToTelegramm(
        props.head +
          '<br>' +
          'Телефон: ' +
          phone1.value,
      )

      // alert(ww)
      console.log(ww)
      console.log('sended', sended)

      // if (response.status == 200) {
      if (sended.value === true) {
        form1_success.value = true
        form1_warning.value = false
        // return response
      } else {
        form1_warning.value = true
      }

      // console.log('ww',ww);
      // result.value = ww
    }

    return {
      // head,
      showForm,
      // sendMsg,
      // sendMsgForm1,
      name1,
      phone1,
      formSend,
      sended,
      form1_success,
      form1_warning,
    }
  },
}
</script>

<style scope></style>
