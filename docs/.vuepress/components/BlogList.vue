<template>
    <div>
        <p v-for="post in posts">
            <BlogCard v-bind:post="post"/>
            
        </p>
    </div>
</template>

<script>
    import BlogCard from "./BlogCard.vue"

    export default {
        computed: {
            posts() {
                return this.$site.pages
                    .filter(page => page.path.substr(1,6) === '_posts');
            }
        }
    }
</script>