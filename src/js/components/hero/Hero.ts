import * as Search from "../search/Search";

const buildComponent = () => {
    const heroContainer: HTMLDivElement = document.createElement("div");
    heroContainer.className = "hero-container";

    const heroLeftSection: HTMLDivElement = document.createElement("div");
    heroLeftSection.className = "hero-left";

    const heroTitle: HTMLHeadElement = document.createElement("h1");
    heroTitle.className = "hero-title";
    heroTitle.textContent = "Awaken Insight: Spark Minds, Mold Futures.";

    const heroSearch: HTMLDivElement = Search.buildComponent();

    const heroImg: HTMLImageElement = document.createElement("img");
    heroImg.className = "hero-img";
    [heroImg.src, heroImg.alt] = [
        "/assets/img/hero.svg",
        "Illustration of a student engaged in learning, representing empowerment on our platform.",
    ];
    [heroImg.width, heroImg.height] = [450, 300];

    heroLeftSection.append(heroTitle, heroSearch);
    heroContainer.append(heroLeftSection, heroImg);

    return heroContainer;
};

export { buildComponent };
