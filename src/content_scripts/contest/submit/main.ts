const id: string | null = (new URLSearchParams(location.search)).get("id");

if (id) {
    if (document.readyState !== "loading") {
        void main();
    } else {
        document.addEventListener("DOMContentLoaded", main);
    }
}

async function main() {
    const select: HTMLSelectElement = document.querySelector("select[name='submittedProblemIndex']")!;
    select.value = id!;
}
