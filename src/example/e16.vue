<template>
  <div>
    <hr>
    <footer class="py-8 text-center md:text-left">
      <div class="container mx-auto">
        <div class=" flex flex-col lg:flex-row content-center items-center justify-between">
          <div class="flex items-center flex-col lg:flex-row mx-auto">
            <img xdata-src="img/logo.png" class="w-32 lazy loaded" alt="Logo" data-ll-status="loaded" xsrc="img/logo.png">
            <span class="ml-0 md:ml-4 text-sm text-gray-600 py-4 lg:py-0">A Landingfolio Template, Copyright © 2020</span>
          </div>
            <!-- Start Main Nav Bar -->
          <div class="navbar mx-auto">
            <ul class="navbar-nav flex flex-">
              <li class=" active px-md-3 px-2">
                <a class=" text-gray-700 text-sm hover:text-gray-900 transition duration-500 ease-in-out" href="#">Home</a>
              </li>
              <li class=" px-md-3 px-2">
                <a class=" text-gray-700 text-sm hover:text-gray-900 transition duration-500 ease-in-out" href="#">Features</a>
              </li>
              <li class=" px-md-3 px-2">
                <a class=" text-gray-700 text-sm hover:text-gray-900 transition duration-500 ease-in-out" href="#">Pricing</a>
              </li>
              <li class=" px-md-3 px-2">
                <a class=" text-gray-700 text-sm hover:text-gray-900 transition duration-500 ease-in-out" href="#">Contact</a>
              </li>
              <li class=" px-md-2 px-2 hidden lg:block">
                <a class=" text-gray-700 text-sm hover:text-gray-900 transition duration-500 ease-in-out" href="#">Login</a>
              </li>
              <li class=" px-md-2 px-2 signup hidden lg:block">
                <a class=" text-md text-gray-900 px-3 py-2 bg-yellow-500 hover:bg-yellow-600 rounded border border-yellow-600 shadow font-semibold cursor-pointer transition duration-500 ease-in-out" href="#">Signup for free</a>
              </li>
            </ul>
          </div>
          <!-- End Main Navbar -->
          </div>
        </div>
      
    </footer>
  </div>
</template>

<script setup>
// import { ref } from 'vue'
// const aa = ref(11);
// let counter = ref(0)
// setInterval(() => {
//   counter.value++
// }, 1000)
</script>
