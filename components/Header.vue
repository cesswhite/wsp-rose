<template>
  <div class="w-screen t-4 fixed z-20">
    <div class="w-full h-14 flex items-center mx-auto md:max-w-screen-xl">
      <div class="flex items-center w-1/2 md:w-3/4">
        <svg
          class="w-8 h-8 mr-1 text-rose-600"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <!-- //<img src="../static/icon.png" alt="" class="w-8 h-8 mr-1" /> -->
        <h1 class="font-serif font-bold text-blue-900 text-lg">circular</h1>
      </div>
      <div class="w-1/2 hidden md:block">
        <nav class="flex justify-between px-2">
          <nuxt-link
            class="w-1/5 font-semibold text-gray-50 text-center py-1 rounded-md hover:text-rose-400 hover:bg-gray-50"
            to=""
            >Home</nuxt-link
          >
          <nuxt-link
            class="w-1/5 font-semibold text-gray-50 text-center py-1 rounded-md hover:text-rose-400 hover:bg-gray-50"
            to=""
            >About</nuxt-link
          >
          <nuxt-link
            class="w-1/5 font-semibold text-gray-50 text-center py-1 rounded-md hover:text-rose-400 hover:bg-gray-50"
            to=""
            >Gallery</nuxt-link
          >
          <nuxt-link
            class="w-1/5 font-semibold text-gray-50 text-center py-1 rounded-md hover:text-rose-400 hover:bg-gray-50"
            to=""
            >Contact</nuxt-link
          >
        </nav>
      </div>
      <div class="w-1/2 flex justify-end items-center md:hidden">
        <button class="p-2">
          <svg
            class="w-8 h-8 text-gray-50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
/**
 *
 * Header Component
 *
 * @author cessarm_
 * @copyright 2020, Eco Dev Studios
 */
export default {
  data() {
    return {};
  },
};
</script>
