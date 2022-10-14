<!-- slot brings in +page.svelte -->
<div>
	<content>
		<slot />
	</content>
	<article>
		<h3>Archives</h3>
		<ul>
			<li><a href="/posts/post1">Post 1</a></li>
			<li><a href="/posts/post2">Post 2</a></li>
			<li><a href="/posts/post3">Post 3</a></li>
			<li><a href="/posts/post4">Post 4</a></li>
			<li><a href="/posts/post5">Post 5</a></li>
		</ul>
	</article>
</div>

<style lang="scss">
	/* your styles go here */
	div {
		display: flex;

		content {
			flex: 1;
		}

		article {
			background-color: lightgray;
			padding: 15px;
			width: 150px;

			h3 {
				margin: 0 0 10px 0;
			}

			ul {
				padding-left: 0;
				list-style: none;

				li {
					margin: 10px 0;
					a {
						color: purple;
						font-weight: bold;
					}
				}
			}
		}
	}
</style>
