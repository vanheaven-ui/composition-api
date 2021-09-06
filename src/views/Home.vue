<template>
  <h1>Home page</h1>
  <PostList :posts="posts" />
</template>

<script>
import { ref } from "@vue/reactivity";
import PostList from "../components/PostList.vue";
export default {
  components: { PostList },
  name: "Home",
  setup() {
    const posts = ref([
      {
        id: 1,
        title: "Welcome to the new blog",
        body: "Lorem ipsum",
        tags: ["webdev", "coding", "news"],
      },
      {
        id: 2,
        title: "top 5 CSS tips",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores at numquam ratione veniam. Optio ab blanditiis pariatur veniam, deserunt odit sapiente quaerat aliquam vel porro voluptate voluptates, officiis quia beatae, dolores at ipsam? Minus id perspiciatis at itaque asperiores deleniti! Quas nam architecto maiores corporis mollitia! Ipsa voluptatum voluptas dignissimos fuga, veritatis atque rerum eligendi quidem accusantium amet quas delectus suscipit itaque quae similique voluptates. Voluptatibus illum, ea vel quaerat quae quos distinctio ducimus quasi reprehenderit quas perspiciatis officiis animi. Cum unde non facere deserunt maiores aspernatur nam illo, error pariatur porro asperiores quae, iusto distinctio rerum, eveniet reiciendis alias.",
        tags: ["CSS", "coding", "webdev"],
      },
    ]);

    return {
      posts,
    };
  },
};
</script>
