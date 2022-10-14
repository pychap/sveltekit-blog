<script>
	export let title = "Pete's";
</script>

<header>
	<h1><a href="/" data-sveltekit-prefetch>{title}</a></h1>
	<nav>
		<ul>
			<li><a href="/about" data-sveltekit-prefetch>About</a></li>
			<li><a href="/login" data-sveltekit-prefetch>Login</a></li>
			<li><a href="/posts" data-sveltekit-prefetch>Posts</a></li>
			<!-- <li><a href="/blog/posts/" data-sveltekit-prefetch>Blog posts</a></li> -->
		</ul>
	</nav>
</header>

<style lang="scss">
	header {
    align-items: center;
    display: flex;
    justify-content: space-between;
		background-color: hsla(274, 99%, 26%, 0.35);
		padding: 15px;
	}
	nav {
		ul {
			display: flex;
			width: max-content;
			// background-color: tomato;
			justify-content: space-between;

      li {
        list-style: none;
        border-right: 3px solid gray;

        &:last-of-type {
          border-right: none;
        }

        a {
          text-decoration: none;
          padding: 0 1rem;
        }
      }
		}
	}

	header {
		h1 {
			margin: 0;
		}
	}
	/* your styles go here */
</style>
