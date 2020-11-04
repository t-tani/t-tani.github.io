<template>
    <div>
        <ul v-for="category in categories">{{ category.name }} {{ category.posts.length }} </ul>
    </div>
</template>

<script>
export default {
  computed: {
    categories() {
      return this.$categories.list.sort(
        (x, y) => y.posts.length - x.posts.length
      );
    }
  }
};
</script>
