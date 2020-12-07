<template>
  <div class="w-full h-screen">
    <Header></Header>
    <div class="max-w-screen-xl mx-auto flex mb-10">
      <div class="w-8/12 relative">
        <div class="absolute center-size">
          <h1 class="font-bold font-serif text-9xl text-gray-200 opacity-25">
            circular
          </h1>
          <h2 class="font-bold font-serif text-6xl text-blue-900">
            Product´s Name
          </h2>
          <p class="mt-4 text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            reiciendis ea delectus enim culpa non sequi adipisci perferendis.
          </p>
          <div class="mt-10 flex">
            <button
              class="border border-gray-400 text-blue-900 font-bold px-4 py-2 mr-4 flex items-center"
            >
              <svg
                class="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Play Video
            </button>
            <button class="text-gray-50 font-bold px-8 py-2 bg-rose-400">
              Try Free
            </button>
          </div>
        </div>
      </div>
      <div
        class="w-4/12 bg-gradient-to-t from-rose-100 to-rose-400 h-screen relative flex"
      >
        <div class="absolute left-size">
          <img src="../static/flower.png" alt="icon" class="w-72" />
        </div>
      </div>
    </div>
    <div class="max-w-screen-xl mx-auto">
      <About />
    </div>
    <div class="max-w-screen-xl mx-auto">
      <ProductIndex
        background="bg-cyan-200"
        img="https://images.unsplash.com/photo-1459314079206-9970f36c7784?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />
      <ProductIndex side="right" background="bg-rose-400" />
    </div>
    <div class="max-w-screen-xl mx-auto py-10">
      <Gallery></Gallery>
    </div>
    <div class="max-w-screen-xl mx-auto py-10">
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import About from '../components/About'
import ProductIndex from '../components/ProductIndex'
import Gallery from '../components/Gallery'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'
export default {
  components: {
    Header,
    About,
    ProductIndex,
    Gallery,
    Subscribe,
    Footer,
  },
}
</script>

<style>
.left-size {
  top: 50%;
  left: 0%;
  transform: translateY(-50%);
}
.center-size {
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
}
</style>
