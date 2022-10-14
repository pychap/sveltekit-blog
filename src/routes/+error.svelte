<script context="module">
  export async function load({ error, status }) {
    return { props: {
      error,
      status
    }}
  }
</script>

<script>
  export let error;
  export let status;

  console.log({ error, status })
</script>

<h1>Error happened!</h1>
<h3>{status}</h3>
<!-- <h3>{error.message}</h3> -->