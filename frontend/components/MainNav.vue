<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="primary">
            <b-navbar-brand href="/books/">Bookstore</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            
            <b-navbar-nav>
                <nuxt-link class="text-white pl-3" to="/books/">Home</nuxt-link>
                <nuxt-link class="text-white pl-3" to="/books/create">Create</nuxt-link>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>