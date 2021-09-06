<template>
  <h2 class="post-list">Post list</h2>
  <div v-for="post in posts" :key="post.id">
    <SinglePost :post="post" />
  </div>
</template>

<script>
import SinglePost from "./SinglePost.vue";
export default {
  components: { SinglePost },
  props: ["posts"],
  setup(props) {
    console.log(props);
  },
};
</script>

<style>
</style>