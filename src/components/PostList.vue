<template>
  <h2 class="post-list">Post list</h2>
  <div v-for="post in posts" :key="post.id">
    <h3>{{ post.title }}</h3>
  </div>
</template>

<script>
export default {
  props: ["posts"],
  setup(props) {
    console.log(props);
  },
};
</script>

<style>
</style>