<template>
  <div class="post" v-if="post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
    <span v-for="tag in post.tags" :key="tag">#{{ tag }}</span>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "Details",
  props: ["id"],

  setup(props) {
    const post = ref(null);
    const error = ref(null);

    const load = async () => {
      try {
        const res = await fetch("http://localhost:3000/posts/" + props.id);
        if (!res.ok) {
          throw Error("Cannot get this post!");
        }
        post.value = await res.json();
      } catch (err) {
        error.value = err.message;
      }
    };

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