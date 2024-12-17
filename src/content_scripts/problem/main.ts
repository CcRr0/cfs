const id = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);

if (document.readyState !== "loading") {
    void main();
} else {
    document.addEventListener("DOMContentLoaded", main);
}

async function main() {
    const a: HTMLAnchorElement = document.querySelector("ul.second-level-menu-list > li:nth-child(2) > a")!;
    a.href += `?id=${id}`;
}
