<template>
  <h2 class="post-list">Post list</h2>
  <div v-for="post in posts" :key="post.id">
    <SinglePost :post="post" />
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "@vue/runtime-core";
import SinglePost from "./SinglePost.vue";
export default {
  components: { SinglePost },
  props: ["posts"],
  setup(props) {
    console.log(props);

    onMounted(() => console.log("Component mounted!"));
    onUnmounted(() => console.log("Component unmounted!"));
    onUpdated(() => console.log("Component updated!"));
  },
};
</script>

<style>
</style>