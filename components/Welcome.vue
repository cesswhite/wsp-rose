<template>
  <div class="w-full h-screen flex">
    <div class="w-1/2 relative md:w-3/4"></div>
    <div class="absolute px-4 container-index z-10">
      <h1 class="font-medium text-6xl text-gray-200 opacity-25">circular</h1>
      <h2 class="text-6xl text-blue-900 font-black">Product´s Name</h2>
      <p class="mt-4 mb-4 text-gray-200 font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        reiciendis ea delectus enim culpa non sequi adipisci perferendis.
      </p>
      <div class="w-full md:flex">
        <button
          class="rounded-md bg-gray-50 text-blue-900 font-bold flex justify-center w-full p-2 mb-4 shadow-md md:w-1/2 md:m-0 md:py-3 md:mr-4"
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
        <button
          class="rounded-md text-gray-50 font-bold bg-rose-400 w-full p-2 shadow-md md:w-1/2 md:py-3"
        >
          Try Free
        </button>
      </div>
    </div>
    <div
      class="w-1/2 bg-gradient-to-t from-rose-300 via-rose-400 to-rose-400 md:w-1/2 relative"
    ></div>

    <div class="absolute image-container hidden md:block">
      <img src="../static/rose.png" alt="icon" class="w-40 md:w-96 lg:w-80" />
    </div>
  </div>
</template>

<style>
.container-index {
  width: 100%;
  transition: all 0.3s ease-in-out;
  top: 30%;
}
.image-container {
  top: 10%;
  right: 23%;
  transition: all 0.3s ease-in-out;
}

@media screen and (min-width: 630px) {
  .container-index {
    width: 70%;
  }
}
@media screen and (min-width: 768px) {
  .container-index {
    width: 45%;
  }
}

@media screen and (min-width: 1024px) {
  .container-index {
    top: 30%;
  }
}

@media screen and (min-width: 768px) {
  .image-container {
    right: 0;
  }
}

@media screen and (min-width: 1024px) {
  .image-container {
    right: 15%;
  }
}

@media screen and (min-width: 1024px) {
  .image-container {
    top: 10%;
    right: 10%;
  }
  .image-container img {
    width: 28rem;
  }
}
@media screen and (min-width: 1280px) {
  .image-container {
    right: 20%;
  }

  .image-container img {
    width: 25rem;
  }
}
</style>
