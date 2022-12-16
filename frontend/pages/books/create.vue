<template>
    <b-container class="py-5">
        <h3 class="p-3">Create book</h3>
        <book-form></book-form>
    </b-container>
</template>
<script>
import BookForm from "~/components/book/Form.vue"
export default {
    layout: "main",
    components: {
        BookForm
    }
}
</script>