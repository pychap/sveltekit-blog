<script>
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte'; 
</script>

<Header title="Pete's SvelteKit Blogs" />
<main>
  <slot />
</main>

<Footer />

<style lang="scss">
 :global {
  html {
    height: 100vh;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  body {
    height: 100vh;
    margin: 0;
    padding: 0;
    // background-color: gray;
    #svelte {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    a {
      text-decoration: none;
      transition: 0.2s;
      &:hover {
        opacity: .6;
      }
    }
  }
}

  main {
    flex: 1;
    overflow-y: auto;
    background-color: hsla(37, 100%, 90%, .5);
    padding: 15px;
  }
</style>