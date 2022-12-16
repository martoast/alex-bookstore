<template>
    <div>
      <b-container class="py-3">
        <h3 class="py-3" style="
          font-family: 'WordOfGod';
          font-size: 32px;">
          All Books
        </h3>
        <b-row align-h="center" align-v="center">
        <b-col v-for="book in items" :key="book.ID" cols="12" md="4" class="pb-5">
          <book-card :book="book"></book-card>
        </b-col>
      </b-row>
      </b-container>
    </div>
  </template>
  
  <script>
  import { mapGetters } from "vuex";
  import BookCard from "~/components/book/Card.vue"
  export default {
    name: 'IndexPage',
    layout: "main",

    async fetch({ store }) {
        await store.dispatch("get");
    },
    components: {
      BookCard
    },
    computed: {
          ...mapGetters({
              items: "items"
          })
      },
  
  }
  </script>
  <style>
  @font-face {
    font-family: "WordOfGod";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("~assets/fonts/WordOfGod.ttf") format("truetype");
  }

  </style>
  
  