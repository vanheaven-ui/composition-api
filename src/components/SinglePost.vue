<template>
  <div>
    <router-link :to="{ name: 'Details', params: { id: post.id } }">
      <h3 class="post">{{ post.title }}</h3>
    </router-link>
    <p>{{ post.body.length >= 80 ? snippet : post.body }}</p>
    <span v-for="tag in post.tags" :key="tag">#{{ tag }}</span>
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