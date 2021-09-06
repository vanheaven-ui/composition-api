import { ref } from 'vue'

const getPost = (id) => {
  const post = ref(null)
  const error = ref(null)

  const load = async() => {
    try {
      let res = await fetch('http://localhost:3000/posts/' + id)
      if (!res.ok) {
        throw Error('Cannot get this post, try again')
      }
      post.value = await res.json()
    }
    catch(err) {
      error.value = err.message
    }
  }
  return {
    post, error, load
  }
}

export default getPost;