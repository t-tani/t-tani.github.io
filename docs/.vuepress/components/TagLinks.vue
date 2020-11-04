<template lang="html">
  <div>
    Tags:
    <router-link
      v-for="tag in tags"
      :key="tag"
      :to="{ path: `/tags.html#${tag}`}"
      class="tag"
      >
      {{tag}}
    </router-link>
  </div>
</template>

<script>
    export default {
        computed: {
            tags() {
                return this.$page.frontmatter.tags
            }
        }
    }
</script>

<style scoped>
.tag {
margin: 0 5px;
padding: 0.5% 1.5%;
color: #fff;
background: royalblue;
border-radius: 25px;
font-size: 75%;
font-style: bold;
text-transform: uppercase;
text-decoration: none;
}

.tag:hover {
  background-color: gray;
}

.theme-default-content:not(.custom) a:hover {
    text-decoration: none;
}

.tag a:hover{
  text-decoration: none;
}
</style>
