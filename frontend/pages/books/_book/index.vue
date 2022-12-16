<template>
    <div class="py-3 px-3">
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
            <b-col md="6">
                <b-card-img :src="book.cover" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
                <b-card-body :title="book.name">
                    <b-card-text>Author: {{book.author}}</b-card-text>
                    <b-card-text>Publication: {{book.publication}}</b-card-text>
                    <b-btn :to="'/books/' + book.ID + '/edit'">Edit</b-btn>
                    <b-btn @click="onDelete" variant="danger" class="ml-3">Delete</b-btn>
                </b-card-body>
            </b-col>
            </b-row>
        </b-card>
    </div>
</template>
<script>

import { mapGetters } from "vuex";
export default {
    layout: "main",
    async fetch({ store, params }) {
        await store.dispatch("find", params.book);
    },
    data() {
        return {
            loading: false
        }

    },
    computed: {
          ...mapGetters({
              book: "book"
          })
    },
    methods: {
       async onDelete() {
            this.loading = true
            try {
                await this.$store.dispatch("delete", this.book.ID);

                this.$bvToast.toast('Deleted successfully', {
                    title: "Book deleted successfully",
                    variant: "success",
                    solid: true,
                    autoHideDelay: 5000,
                    })
                
                setTimeout(() => {
                    this.$router.push({path: "/books/"});
                }, 2000); 
            }
            catch (e) {
                console.error(e)
                this.$bvToast.toast('Error deleting book', {
                    title: "Error",
                    variant: "danger",
                    solid: true,
                    autoHideDelay: 5000,
                    })
            }
        }
    }
  
    
}
</script>