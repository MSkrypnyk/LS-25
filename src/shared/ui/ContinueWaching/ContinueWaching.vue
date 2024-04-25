<template>
    <div class="continue-watching-item">
      <img class="continue-watching-img" :src="film.image" :alt="film.title" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      film: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  