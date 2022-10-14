<script>
// import { slug } from './+page.js';
import { slug, Post } from './+page';
console.log("from +page: " + slug)
</script>
<slot />
<!-- <script context="module">
  export async function load(obj) {
    console.log({ obj })
    console.log("From the slug page")
    return {}
  }
</script> -->
<h1>Page inside slug folder {slug}</h1>
<Post />


<!-- <slug /> -->
