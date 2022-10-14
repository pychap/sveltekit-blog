/** @type {import('./$types').PageLoad} */
export function load(page) {
  const Post = await import(`../../posts/${page.params.slug}.md`);
  console.log('page js from slug')
  console.log(page.params.slug)
  return {
    props: { Post: Post.default, slug: page.params.slug }
  };
}

export let slug;
export let Post;
