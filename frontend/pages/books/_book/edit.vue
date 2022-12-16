<template>
    <b-container class="py-5">
        <h3 class="p-3">Edit book</h3>
        <book-form :model="book"></book-form>
    </b-container>
</template>
<script>
import BookForm from "~/components/book/Form.vue"
import { mapGetters } from "vuex";
export default {
    layout: "main",
    async fetch({ store, params }) {
        await store.dispatch("find", params.book);
    },
    components: {
        BookForm
    },
    computed: {
          ...mapGetters({
              book: "book"
          })
    },
  
    
}
</script>