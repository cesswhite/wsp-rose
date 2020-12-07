<template>
  <div class="w-full t-4 fixed z-10">
    <div class="max-w-screen-xl mx-auto h-14 flex items-center xl:w-full">
      <div class="flex items-center mr-2 w-2/12 lg:pl-4">
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
      <div class="w-10/12">
        <nav class="flex">
          <nuxt-link
            class="font-semibold font-serif text-md text-gray-600 text-opacity-25 hover:text-blue-900 px-4 py-2 mr-6"
            to=""
            >Home</nuxt-link
          >
          <nuxt-link
            class="font-semibold font-serif text-md text-gray-600 text-opacity-25 hover:text-blue-900 px-4 py-2 mr-6"
            to=""
            >About</nuxt-link
          >
          <nuxt-link
            class="font-semibold font-serif text-md text-gray-600 text-opacity-25 hover:text-blue-900 px-4 py-2 mr-6"
            to=""
            >Gallery</nuxt-link
          >
          <nuxt-link
            class="font-semibold font-serif text-md text-gray-600 text-opacity-25 hover:text-blue-900 px-4 py-2"
            to=""
            >Contact</nuxt-link
          >
        </nav>
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
    return {}
  },
}
</script>
