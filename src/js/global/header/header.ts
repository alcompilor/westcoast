import { pages } from "./pages.js";

const buildComponent = (): HTMLDivElement => {
    const headerContainer: HTMLDivElement = document.createElement("div");
    headerContainer.className = "header";

    const logo: HTMLImageElement = document.createElement("img");
    logo.src = "./assets/img/logo.svg";
    logo.alt = "WestCoast Logo Image";
    logo.className = "logo";
    [logo.width, logo.height] = [300, 80];
    
    const navbar: HTMLElement = document.createElement("nav");
    const ul: HTMLUListElement = document.createElement("ul");

    pages.forEach((navLink) => {
        const li: HTMLLIElement = document.createElement("li");
        const a: HTMLAnchorElement = document.createElement("a");
        a.href = navLink.url;
        a.textContent = navLink.name;

        li.appendChild(a);
        ul.appendChild(li);
    });
    
    navbar.append(ul);

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        const detailsEl: HTMLDetailsElement = document.createElement("details");
        const summaryEl: HTMLElement = document.createElement("summary");

        summaryEl.prepend(logo);
        detailsEl.append(summaryEl, navbar);

        headerContainer.append(detailsEl);
    } else {
        headerContainer.append(logo, navbar);
    }

    return headerContainer;
}

const render = (): void => {
    document.body.prepend(buildComponent());
}

render();