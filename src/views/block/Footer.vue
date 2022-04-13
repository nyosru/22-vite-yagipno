<template>
  <footer id="footer" class="bg-gray-300 footer-area">
    <!-- <div class="mb-16 footer-widget"> -->
    <div class="footer-widget">
      <div class="container">
        <div class="row pt-10 pb-20 sm:pb-10 ">
          <div class="w-full sm:w-1/2 xmd:w-1/4 xlg:w-1/2 text-center">
                <p>Все права зищищены © 2003-2022</p>
          </div>
          <div class="w-full sm:w-1/2 xmd:w-1/4 xlg:w-1/2 text-center">
                <p><a href="https://php-cat.com" target="_blank" >Создание сайта: php-cat.com</a></p>
          </div>
        </div>
        <!-- row -->
        <div v-if="1==2" class="row">
          <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/6">
            <div v-if="1 == 2" class="mb-8 footer-link">
              <h6 class="footer-title">Company</h6>
              <ul>
                <li><a href="javascript:void(0)">About</a></li>
                <li><a href="javascript:void(0)">Contact</a></li>
                <li><a href="javascript:void(0)">Career</a></li>
              </ul>
            </div>
            <!-- footer link -->
          </div>
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div v-if="1 == 2" class="mb-8 footer-link">
              <h6 class="footer-title">Product & Services</h6>
              <ul>
                <li><a href="javascript:void(0)">Products</a></li>
                <li><a href="javascript:void(0)">Business</a></li>
                <li><a href="javascript:void(0)">Developer</a></li>
              </ul>
            </div>
            <!-- footer link -->
          </div>
          <div class="w-full sm:w-5/12 md:w-1/3 lg:w-1/4">
            <div v-if="1 == 2" class="mb-8 footer-link">
              <h6 class="footer-title">Help & Suuport</h6>
              <ul>
                <li><a href="javascript:void(0)">Support Center</a></li>
                <li><a href="javascript:void(0)">FAQ</a></li>
                <li><a href="javascript:void(0)">Terms & Conditions</a></li>
              </ul>
            </div>
            <!-- footer link -->
          </div>
          <div class="w-full sm:w-7/12 md:w-1/2 lg:w-1/3">
            <div v-if="1 == 2" class="mb-8 footer-newsletter">
              <h6 class="footer-title">Subscribe Newsletter</h6>
              <div class="newsletter">
                <form action="#" class="relative mb-4">
                  <input
                    type="text"
                    placeholder="Your Email"
                    class="w-full py-3 pl-6 pr-12 duration-300 bg-gray-200 border border-gray-200 rounded-full focus:border-blue-600 focus:outline-none"
                  />
                  <button
                    type="submit"
                    class="absolute top-0 right-0 mt-3 mr-6 text-xl text-blue-600"
                  >
                    <i class="lni-angle-double-right"></i>
                  </button>
                </form>
              </div>
              <p class="font-medium text-gray-900">
                Subscribe weekly newsletter to stay upto date. We don’t send
                spam.
              </p>
            </div>
            <!-- footer newsletter -->
          </div>
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </div>
    <!-- footer widget -->

    <div v-if="1 == 2" class="bg-blue-900 footer-copyright">
      <div class="container">
        <div class="row">
          <div class="w-full">
            <div class="py-6 text-center">
              <p class="text-white">
                Template Crafted by
                <a
                  class="text-blue-500 duration-300 hover:text-blue-700"
                  rel="nofollow"
                  href="https://tailwindtemplates.co"
                >
                  TailwindTemplates
                </a>
              </p>
            </div>
          </div>
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </div>
    <!-- footer copyright -->
  </footer>
</template>

<script>
// import { ref, watchEffect } from 'vue'

export default {
  components: {},
  setup() {
    // watchEffect(() => {
    //   // console.log(count.value)
    //   console.log(window.scrollY)
    // })

    // const menuHidden = ref(true)
    return {
      // menuHidden,
    }
  },
}
</script>

<style></style>
