<script>
    let count = $state(0);

    function increase() {
        count++;
    }
</script>

<main>
    <h1>Hello World! <span>{count}</span></h1>
    <button onclick={increase}>CLICK ME!</button>
</main>

<style>
main {
    display: flex;
    flex-direction: column;
    gap: 1em;

    h1 {
        span {
            color: var(--primary);
        }
    }

    button {
        padding: 0.5em 0.75em;
        width: 100px;
        align-self: center;
    }
}
</style>