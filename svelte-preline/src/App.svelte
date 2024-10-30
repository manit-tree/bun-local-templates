<script>
    let count = $state(0);

    function increase() {
        count++;
    }
</script>

<main>
    <h1 class="text-3xl font-bold">Hello World! <span>{count}</span></h1>
    <button onclick={increase} type="button" class="inline-block py-3 px-4 items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Increase</button>
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
        flex-grow: 0;
    }
}
</style>