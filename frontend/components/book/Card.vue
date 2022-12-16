<template>
    <div>
        <b-card :img-src="book.cover" img-alt="Image" img-top>
            <b-card-title class="text-truncate">{{book.name}}</b-card-title>
            <b-card-text>
            By: {{book.author}}
            </b-card-text>
            <b-button variant="primary" :to="'/books/' + book.ID">View</b-button>
            <template #footer>
            <small class="text-muted">Updated: {{book.UpdatedAt | ago}}</small>
            </template>
      </b-card>
    </div>
</template>
<script>
export default {
    props:['book']
}
</script>