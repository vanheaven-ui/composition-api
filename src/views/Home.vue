<template>
  <h1>Home page</h1>
  <PostList :posts="posts" v-if="showPosts" />
  <button @click="showPosts = !showPosts">Toggle posts</button>
  <button @click="posts.pop()">Delete a post</button>
</template>

<script>
import { ref } from "@vue/reactivity";
import PostList from "../components/PostList.vue";
export default {
  components: { PostList },
  name: "Home",
  setup() {
    const showPosts = ref(true);
    const posts = ref([]);
    const error = ref(null);

    return {
      posts,
      showPosts,
    };
  },
};
</script>
