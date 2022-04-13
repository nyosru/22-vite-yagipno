<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <nav
    class="flex items-center justify-between flex-wrap bg-blue-400 xbg-gray-800 p-6 xfixed w-full z-10 top-0"
  >
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <a
        class="text-white no-underline hover:text-white hover:no-underline"
        href="/"
      >
        <span class="text-2xl pl-2">
          <i class="em em-grinning"></i>
          Сергей Пыжив
        </span>
      </a>
    </div>

    <div class="block lg:hidden">
      <button
        id="nav-toggle"
        class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
        @click="menuHidden = !menuHidden"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>

    <div
      class="w-full flex-grow lg:flex-1 lg:items-center xlg:w-auto xhidden lg:block pt-6 lg:pt-0"
      id="nav-content"
      :class="{ 'hidden': menuHidden }"
    >
      <ul class="list-reset lg:flex justify-end flex-1 items-center">
        <li class="mr-3">
          <a class="inline-block py-2 px-4 text-white no-underline" href="#">
            Active
          </a>
        </li>

        <li class="mr-3">
          <a
            class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
            href="#"
          >
            link
          </a>
        </li>
        <li class="mr-3">
          <a
            class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
            href="#"
          >
            link
          </a>
        </li>
        <li class="mr-3">
          <a
            class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
            href="#"
          >
            link
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>

import { ref } from 'vue'

export default {
  components: {},
  setup() {
    const menuHidden = ref(true)

    return {
      menuHidden,
    }
  },
}
</script>

<style>
.growing-underline {
  display: block;
  position: relative;
  padding: 0.2em 0;
  overflow: hidden;
}

.growing-underline::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.1em;
  background-color: black;
  transition: opacity 300ms, transform 300ms;
  opacity: 1;
  transform: translate3d(-100%, 0, 0);
}

.growing-underline:hover::after,
.growing-underline:focus::after {
  transform: translate3d(0, 0, 0);
}
</style>
