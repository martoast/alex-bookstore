<template>
    <form
       id="event-type-form"
       autocomplete="off"
       @submit.prevent="onSubmit"
       >
          <b-card>
             <b-form-group
                label="Title"
                label-for="name"
                label-class="font-size-14"
                >
                <b-form-input
                   id="name"
                   name="name"
                   v-model="form.name"
                   type="text"
                   placeholder="Title"
                   >
                </b-form-input>
             </b-form-group>
             <b-form-group
                label="Author"
                label-for="author"
                label-class="font-size-14"
                >
                <b-form-input
                   id="author"
                   name="author"
                   v-model="form.author"
                   type="text"
                   placeholder="Author"
                   >
                </b-form-input>
             </b-form-group>
             <b-form-group
                label="Publication"
                label-for="publication"
                label-class="font-size-14"
                >
                <b-form-input
                   id="publication"
                   name="publication"
                   v-model="form.publication"
                   type="text"
                   placeholder="Publication"
                   >
                </b-form-input>
             </b-form-group>
             <b-form-group
                label="Cover"
                label-for="cover"
                label-class="font-size-14"
                >
                <b-form-input
                   id="publication"
                   name="publication"
                   v-model="form.cover"
                   type="text"
                   placeholder="https://example-image-url.jpg"
                   >
                </b-form-input>
             </b-form-group>
             <b-btn type="submit" class="mt-4 mb-2" variant="primary" block>Submit</b-btn>
          </b-card>
    </form>
 </template>
<script>
export default {
    props: {
        model: {
            type: Object,
            default: () => {
                return {};
            }
        }
    },
    created() {
        this.onReset()

    },
    data() {
        return {
            form: {},
            loading: false
        }
    },
    methods: {
        async onSubmit() {
            this.loading = true
            try {
                let res = await this.$store.dispatch("store", {
                    form: this.form,
                    book: this.model
                });

                this.$bvToast.toast('Book was saved successfully', {
                    title: "Book saved successfully",
                    variant: "success",
                    solid: true,
                    autoHideDelay: 1700,
                    })

                setTimeout(() => {
                    this.$router.push({path: "/books/" + res.data.ID});
                }, 2000);                 
               
            }
            catch (e) {
                console.error(e)
                this.$bvToast.toast('Error creating book', {
                    title: "Error",
                    variant: "danger",
                    solid: true,
                    autoHideDelay: 5000,
                    })
            }
        },
        onReset() {
            this.form = {
                name: this.model.name ?? null,
                author: this.model.author?? null,
                publication: this.model.publication?? null,
                cover: this.model.cover?? null
            }
        }
    }
}
</script>