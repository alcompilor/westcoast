import { pages } from "./pages";
import * as HeaderEvents from "./events";
import * as UserAPI from "../../api/users";

const buildComponent = async (): Promise<HTMLDivElement> => {
    const userId: number = parseInt(localStorage.getItem("wcUserId") as string);
    const isAdmin: boolean = userId
        ? (await UserAPI.reqUser(userId)).isAdmin
        : false;

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

    if (userId && isAdmin) {
        const li: HTMLLIElement = document.createElement("li");
        const a: HTMLAnchorElement = document.createElement("a");

        a.href = "/admin.html";
        a.textContent = "Admin Panel";

        li.appendChild(a);
        ul.appendChild(li);
    }

    if (userId) {
        const li: HTMLLIElement = document.createElement("li");
        const a: HTMLAnchorElement = document.createElement("a");

        a.href = ".";
        a.textContent = "Logout";
        a.className = "logout-link";

        li.appendChild(a);
        ul.appendChild(li);
    }

    navbar.append(ul);

    if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        )
    ) {
        const detailsEl: HTMLDetailsElement = document.createElement("details");
        const summaryEl: HTMLElement = document.createElement("summary");

        summaryEl.prepend(logo);
        detailsEl.append(summaryEl, navbar);

        headerContainer.append(detailsEl);
    } else {
        headerContainer.append(logo, navbar);
    }

    return headerContainer;
};

const render = async (): Promise<void> => {
    document.body.prepend(await buildComponent());
};

render().finally(() => {
    HeaderEvents.mount();
});
