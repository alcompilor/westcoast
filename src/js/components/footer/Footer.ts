const buildComponent = (): HTMLDivElement => {
    const footerContainer: HTMLDivElement = document.createElement("div");
    footerContainer.className = "footer";

    const topContainer: HTMLDivElement = document.createElement("div");
    topContainer.className = "top-footer-container";

    const logo: HTMLImageElement = document.createElement("img");
    logo.className = "logo-footer";
    logo.src = "/assets/img/logo.svg";
    [logo.width, logo.height] = [300, 80];
    logo.alt = "WestCoast Footer Logo Image";

    const socialContainer: HTMLDivElement = document.createElement("div");
    socialContainer.className = "social-footer-container";

    const socialIconsArray: string[] = [
        "/assets/icons/fb.svg",
        "/assets/icons/ig.svg",
        "/assets/icons/x.svg",
        "/assets/icons/lin.svg",
        "/assets/icons/tiktok.svg",
        "/assets/icons/discord.svg"
    ];

    socialIconsArray.forEach((src) => {
        const a: HTMLAnchorElement = document.createElement("a");
        a.href = "#";

        const socialIcon: HTMLImageElement = document.createElement("img");
        socialIcon.alt = "Social Media Platform Icon";
        socialIcon.src = src;
        [socialIcon.width, socialIcon.height] = [50, 50];

        a.appendChild(socialIcon);
        socialContainer.appendChild(a);
    });

    const contactContainer: HTMLDivElement = document.createElement("div");
    contactContainer.className = "contact-footer-container";

    const phone: HTMLSpanElement = document.createElement("span");
    phone.textContent = "Call Us: +1 555-555-5555";
    const email: HTMLSpanElement = document.createElement("span");
    email.textContent = "Support Desk: Support@westcoast.edu";

    contactContainer.append(phone, email);

    const bottomContainer: HTMLDivElement = document.createElement("div");
    bottomContainer.className = "bottom-footer-container";

    const copyright: HTMLSpanElement = document.createElement("span");
    const currentYear: string = new Date().getFullYear().toString();
    copyright.textContent = `Copyright WestCoast Education © ${currentYear} — Dev by `;

    const credit: HTMLAnchorElement = document.createElement("a");
    credit.textContent = "@alcompilor";
    credit.href = "https://github.com/alcompilor";
    credit.target = "_blank";

    const address: HTMLSpanElement = document.createElement("span");
    address.textContent = "WestCoast Education Inc, 456 Oak Street, Suite 789, Metropolis, CA 90210, US";

    copyright.appendChild(credit);
    bottomContainer.append(copyright, address);

    topContainer.append(logo, socialContainer, contactContainer);
    footerContainer.append(topContainer, bottomContainer);
    
    return footerContainer;
};

const render = (): void => {
    document.addEventListener("DOMContentLoaded", () => {
        document.body.appendChild(buildComponent());
    })
    //const root: HTMLDivElement = document.querySelector(".root")!;
    //root.after(buildComponent());
};

render();