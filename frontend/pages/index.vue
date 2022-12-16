<template>
  <div style="background-color: rgba(165, 97, 124, 0.7); padding: 2rem; height: 100vh;">
    <div class="text-center">
      <b-img src="/images/main.jpg" fluid alt="Responsive image" style="height: 300px;"></b-img>
      <h1 class="py-3">Alex's bookstore</h1>
      <b-btn to="/books/" pill style="width: 250px;">Enter</b-btn>
    </div>

  </div>
</template>
<style>
  .hero-image {
  background-image: url("/images/main.jpg"); /* The image used */
  background-color: #cccccc; /* Used if the image is unavailable */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}
.square {
  background-color: rgba(165, 97, 124, 0.7);
    height: 100%;
    border-radius: 20px;
    padding: 2rem;
    z-index: 10;
}
</style>