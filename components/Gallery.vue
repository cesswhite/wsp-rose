<template>
  <div class="h-96 flex relative">
    <div class="w-1/4">
      <div
        class="slide-img-six w-full h-1/2 bg-cover bg-no-repeat bg-center"
      ></div>
      <div
        class="slide-img-two w-full h-1/2 bg-cover bg-no-repeat bg-center"
      ></div>
    </div>
    <div class="w-2/4">
      <div
        class="slide-img-three w-full h-full bg-cover bg-no-repeat bg-center"
      ></div>
    </div>
    <div class="w-1/6">
      <div
        class="slide-img-four w-full h-1/2 bg-cover bg-no-repeat bg-center"
      ></div>
      <div
        class="slide-img-five w-full h-1/2 bg-cover bg-no-repeat bg-center"
      ></div>
    </div>
    <div class="w-1/4">
      <div
        class="slide-img-three w-full h-1/2 bg-cover bg-no-repeat bg-center"
      ></div>
      <div
        class="slide-img-one w-full h-1/2 bg-cover bg-no-repeat bg-center"
      ></div>
    </div>
    <button
      class="absolute w-12 h-12 left-4 inset-y-1/2 bg-gray-800 opacity-80"
    >
      <svg
        class="text-gray-50 text-center"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
    <button
      class="absolute w-12 h-12 right-4 inset-y-1/2 bg-gray-800 opacity-80"
    >
      <svg
        class="text-gray-50 text-center"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script>
/**
 *
 * Gallery Component
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

<style lang="css">
.slide-img-one {
  background-image: url('https://images.unsplash.com/photo-1568752172055-6961c4146efd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80');
}
.slide-img-two {
  background-image: url('https://images.unsplash.com/photo-1526857240824-92be52581d9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
}
.slide-img-three {
  background-image: url('https://images.unsplash.com/photo-1556217256-f4e659e15103?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=701&q=80');
}
.slide-img-four {
  background-image: url('https://images.unsplash.com/photo-1587281576752-c8ebe347df3a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1389&q=80');
}
.slide-img-five {
  background-image: url('https://images.unsplash.com/photo-1557123348-d00d35d978bf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1333&q=80');
}
.slide-img-six {
  background-image: url('https://images.unsplash.com/photo-1565098772267-60af42b81ef2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1384&q=80');
}
</style>
