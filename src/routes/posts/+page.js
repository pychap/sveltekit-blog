/** @type {import('./$types').PageLoad} */
export function load(obj) {
  console.log('from posts root')
  console.log(obj.params)
  return {
    some: 'data'
  };
}