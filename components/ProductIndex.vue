<template>
  <div
    class="py-10 flex flex"
    :class="{ 'flex-row-reverse': side === 'right' }"
  >
    <div class="w-1/2 relative h-96" :class="background">
      <div
        class="absolute shadow-xl"
        :class="side === 'right' ? 'photo-right' : 'photo-left'"
      >
        <img class="border-8 border-gray-50 w-96" :src="img" alt="" />
      </div>
    </div>
    <div class="w-1/2 relative">
      <div class="absolute centerv">
        <h1 class="font-bold text-blue-900 text-2xl">Some title here</h1>
        <p class="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div>
          <button
            class="flex justify-center items-center rounded-md shadow-md bg-gray-50 text-blue-900 font-bold py-2 px-6 text-md mb-2 md:w-full md:m-0 md:mb-2"
          >
            Detail
            <svg
              class="w-4 h-4 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
              <path
                fill-rule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <button
            class="py-2 rounded-sm px-6 font-bold text-blue-900 text-md md:w-full hover:ring-2 hover:ring-blue-800"
          >
            Website
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 *
 * ProductIndex Component
 *
 * @author cessarm_
 * @copyright 2020, Eco Dev Studios
 */
export default {
  props: {
    color: {
      type: String,
      default: "#000",
    },
    side: {
      type: String,
      default: "left",
    },
    img: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1551499779-ee50f1aa4d25?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
    },
    background: {
      type: String,
      default: "bg-gray-100",
    },
  },
  data() {
    return {};
  },
  computed: {},
};
</script>

<style>
.photo-right {
  left: -10%;
  top: 50%;
  transform: translateY(-50%);
}
.photo-left {
  right: -10%;
  top: 50%;
  transform: translateY(-50%);
}
</style>
