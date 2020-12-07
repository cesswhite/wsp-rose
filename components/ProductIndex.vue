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
        <h1 class="font-bold text-blue-900 font-serif text-2xl">
          Some title here
        </h1>
        <p class="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div>
          <button
            class="border border-gray-400 py-1 px-6 font-bold font-serif text-blue-900 mr-4 text-md"
          >
            Detail
          </button>
          <button class="py-1 px-6 font-bold font-serif text-blue-900 text-md">
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
      default: '#000',
    },
    side: {
      type: String,
      default: 'left',
    },
    img: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1551499779-ee50f1aa4d25?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
    },
    background: {
      type: String,
      default: 'bg-gray-100',
    },
  },
  data() {
    return {}
  },
  computed: {},
}
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
