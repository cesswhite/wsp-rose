<template>
  <div class="w-full h-screen">
    <Header></Header>
    <div class="max-w-screen-xl mx-auto relative">
      <Welcome></Welcome>
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
      <!-- <Footer></Footer> -->
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import About from "../components/About";
import ProductIndex from "../components/ProductIndex";
import Gallery from "../components/Gallery";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
export default {
  components: {
    Header,
    Welcome,
    About,
    ProductIndex,
    Gallery,
    Subscribe,
    Footer,
  },
};
</script>

<style>
.left-size {
  top: 50%;
  left: -30%;
  transform: translateY(-50%);
}
@media screen and (max-width: 768px) {
  .left-size {
    left: -30%;
  }
}
.center-size {
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
}
</style>
