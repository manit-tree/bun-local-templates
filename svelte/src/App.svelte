<script>
    let count = 0;

    function increase() {
        count++;
    }
</script>
<main>
    <h1 onclick={increase}>Hello World! {count}</h1>
</main>