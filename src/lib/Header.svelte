<script>
	export let title = "Pete's";
</script>

<header>
	<h1><a href="/" sveltekit:prefetch>{title}</a></h1>
	<nav>
		<ul>
			<li><a href="/about" sveltekit:prefetch>About</a></li>
			<li><a href="/blog" sveltekit:prefetch>Blog</a></li>
			<li><a href="/blog/posts/" sveltekit:prefetch>Blog posts</a></li>
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
          padding-right: 1rem;
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
