<template>
  <h1>Home page</h1>
  <div v-if="error">{{ error }}</div>
  <div v-if="posts.length">
    <PostList :posts="posts" v-if="showPosts" />
  </div>
  <div v-else>Loading...</div>
  <button @click="showPosts = !showPosts">Toggle posts</button>
  <button @click="posts.pop()">Delete a post</button>
</template>

<script>
import { ref } from "@vue/reactivity";
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts";

export default {
  components: { PostList },
  name: "Home",
  setup() {
    const showPosts = ref(true);
    const { posts, error, load } = getPosts();

    load();

    return {
      posts,
      showPosts,
      error,
    };
  },
};
</script>
