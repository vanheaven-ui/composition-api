<template>
  <div class="post" v-if="post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
    <span v-for="tag in post.tags" :key="tag">#{{ tag }}</span>
  </div>
</template>

<script>
import getPost from "../composables/getPost";
export default {
  name: "Details",
  props: ["id"],

  setup(props) {
    const { post, error, load } = getPost(props.id);

    load();

    return {
      post,
      error,
    };
  },
};
</script>

<style>
</style>