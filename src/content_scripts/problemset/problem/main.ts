if (document.readyState !== "loading") {
    void main();
} else {
    document.addEventListener("DOMContentLoaded", main);
}

async function main() {
    const diffTag: Element | null = document.querySelector("span.tag-box[title='Difficulty']");
    if (diffTag) {
        const diff: number = Number(diffTag.textContent!.trim().substring(1));
        const titleDiv: Element = document.querySelector("div.header > div.title")!;
        titleDiv.textContent! += ` (*${diff})`;
    }
}
