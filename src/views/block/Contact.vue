<template>
  <section id="contact" class="contact-area py-120">
    <div class="container">
      <div class="justify-center row">
        <div class="w-full mx-4 lg:w-1/2">
          <div class="pb-10 text-center section-title">
            <h4 class="title">Отправьте сообщение</h4>
          </div>
        </div>
      </div>

      <div class="justify-center row">
        <div class="w-full lg:w-2/3">
          <div class="contact-form">
            <Transition>
              <form
                v-if="!showSuccess"
                xid="contact-form"
                xaction="assets/contact.php"
                xmethod="post"
                xdata-toggle="validator"
                @submit.prevent="sendMsg"
              >
                <div class="row">
                  <div class="w-full md:w-1/2">
                    <div class="mx-4 mb-6 single-form form-group">
                      <input
                        v-model="fio"
                        type="text"
                        xname="name"
                        placeholder="Как Вас зовут"
                        xdata-error="Укажите как Вас зовут"
                        xrequired="required"
                      />
                      <div class="help-block with-errors"></div>
                    </div>
                    <!-- single form -->
                  </div>
                  <div v-if="1 == 2" class="w-full md:w-1/2">
                    <div class="mx-4 mb-6 single-form form-group">
                      <input
                        type="email"
                        xname="email"
                        placeholder="Your Email"
                        xdata-error="Valid email is required."
                        required="required"
                      />
                      <div class="help-block with-errors"></div>
                    </div>
                    <!-- single form -->
                  </div>
                  <div v-if="1 == 2" class="w-full md:w-1/2">
                    <div class="mx-4 mb-6 single-form form-group">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        data-error="Subject is required."
                        xrequired="required"
                      />
                      <div class="help-block with-errors"></div>
                    </div>
                    <!-- single form -->
                  </div>
                  <div class="w-full md:w-1/2">
                    <div class="mx-4 mb-6 single-form form-group">
                      <input
                        v-model="phone"
                        type="text"
                        xname="phone"
                        placeholder="Телефон"
                        xdata-error="Телефон обязателен."
                        required="required"
                      />
                      <div class="help-block with-errors"></div>
                    </div>
                    <!-- single form -->
                  </div>
                  <div class="w-full">
                    <div class="mx-4 mb-6 single-form form-group">
                      <textarea
                        v-model="textt"
                        rows="5"
                        placeholder="Ваше сообщение"
                        xname="message"
                        xdata-error="Пожалуйста, напишите своё сообщение."
                        required="required"
                      ></textarea>
                      <div class="help-block with-errors"></div>
                    </div>
                    <!-- single form -->
                  </div>
                  <p class="mx-4 form-message"></p>
                  <div class="w-full">
                    <div class="mx-4 mt-2 text-center single-form form-group">
                      <button
                        v-if="!formLoader"
                        type="submit"
                        class="main-btn bg-blue-400 gradient-btn focus:outline-none"
                      >
                        Отправить сообщение
                      </button>
                    </div>
                    <!-- single form -->
                  </div>
                </div>
                <!-- row -->
              </form>
              <div v-else>
                <h2 class="block bg-green-300 py-5 px-10 text-center">
                  Сообщение отправлено, спасибо!
                </h2>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
    <!-- container -->
  </section>
</template>

<script setup>
import { ref } from 'vue'

const fio = ref('')
const phone = ref('')
const textt = ref('')
const showSuccess = ref(false)
// const showSuccess = ref(true)
const showWarning = ref(false)
const formLoader = ref(false)

// import axios from 'axios'

import sendTelegramm from '@/use/sendTelegramm.ts'

const sendMsg = async () => {
  // console.log(777, fio.value, phone.value, props.bolezn, props.tip)

    const { sended , sendTo } = sendTelegramm()
   sendTo.value.push('1000098412'); // gipno sergey
    // sendTo.value.push('5152088168'); // ya test serhio

  formLoader.value = true

  const { sendToTelegramm } = sendTelegramm()
  let ww = await sendToTelegramm(
    'форма внизу сайта (контакты):<br/>' +
      'телефон: ' +
      phone.value +
      '<br/>' +
      'как зовут: ' +
      fio.value +
      '<br/>' +
      'текст: ' +
      textt.value +
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

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 1.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
