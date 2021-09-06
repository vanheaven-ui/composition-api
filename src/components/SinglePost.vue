<template>
  <div>
    <h3 class="post">{{ post.title }}</h3>
    <p>{{ post.body.length >= 80 ? snippet : post.body }}</p>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
export default {
  props: ["post"],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 80) + "...";
    });

    return {
      snippet,
    };
  },
};
</script>

<style>
</style>