document.addEventListener('DOMContentLoaded', evt => {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("./sw.js");
    }
})
