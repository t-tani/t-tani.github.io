<template>
    <div id="container">
        <a class="card-link" :href="post.path">
            <article class="blog-card">
                <div class="article-details">
                    <h4 class="post-category"> Category: {{post.frontmatter.category}} </h4>
                    <h3 class="post-title"> {{post.title}} </h3> 
                    <p class="post-description">{{ post.frontmatter.description }}</p>
                    Tags: 
                    <router-link
                        v-for="tag in post.frontmatter.tags"
                        :key="tag"
                        :to="{ path: `/posts/#${tag}`}"
                        class="tag"
                        >
                        {{tag}}
                    </router-link>
                </div>
            </article>
        </a>
    </div>
</template>

<script>
import TagLinks from "./TagLinks.vue"
export default {
    name: "BlogCard",
    props: ["post"],

}
</script>

<style scoped>

#container {
  height: 8rem;
}

.article-details {
  padding: 0.3rem;
}

.blog-card {
  display: flex;
  flex-direction: row;
  background: #fff;
  border-radius: 0.75rem;
  overflow: hidden;
}

.blog-card:hover{
    background: #FAFAFA;
}

.post-category {
  display: inline-block;
  font-size: 0.5rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.0625rem;
  margin: 0 0 0.3rem 0;
  padding: 0 0 0.25rem 0;
  border-bottom: 0.05rem solid;
  color:#AAA
}

.post-description {
  font-size: 0.5rem;
}

.post-title {
  font-size: 1.25rem;
  line-height: 1.4;
  color: #3D3D3D;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
}

.card-link {
  position: relative;
  display: block;
  color: inherit;
  text-decoration: none;
}
.card-link:hover{
  text-decoration: none;
}

.tag {
margin: 0 2px;
padding: 0.5% 1.5%;
color: #fff;
background: royalblue;
border-radius: 25px;
font-size: 40%;
font-style: bold;
text-transform: uppercase;
}

.theme-default-content:not(.custom) a:hover {
    text-decoration: None;
}

.tag:hover {
  background-color: gray;
  text-decoration: none;
}
.tag a:hover{
  text-decoration: none;
}

</style>