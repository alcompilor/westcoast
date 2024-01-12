import Course from "../../interfaces/course";

const buildComponent = (data: Course): HTMLDivElement => {
    const cardContainer: HTMLDivElement = document.createElement("div");
    cardContainer.className = "card";
    cardContainer.dataset.id = data.id.toString();

    const cardBefore: HTMLDivElement = document.createElement("div");
    cardBefore.className = "card-before";

    const cardExtra: HTMLDivElement = document.createElement("div");
    cardExtra.classList.add("card-extra", "hidden");
    const cardExtraParagraph: HTMLParagraphElement =
        document.createElement("p");
    cardExtraParagraph.textContent = data.details;

    const cardImg: HTMLImageElement = document.createElement("img");
    [cardImg.src, cardImg.alt] = [data.image.url, data.image.desc];
    cardImg.className = "card-img";
    [cardImg.width, cardImg.height] = [300, 150];

    const cardDetails: HTMLDivElement = document.createElement("div");
    cardDetails.className = "card-details";

    const cardTags: HTMLDivElement = document.createElement("div");
    cardTags.className = "card-tags";

    const cardCode: HTMLSpanElement = document.createElement("span");
    cardCode.className = "card-ccode";
    cardCode.textContent = data.courseCode;

    const cardTitle: HTMLHeadElement = document.createElement("h2");
    cardTitle.className = "card-title";
    cardTitle.textContent = data.courseTitle;

    const cardDesc: HTMLParagraphElement = document.createElement("p");
    cardDesc.className = "card-desc";
    cardDesc.textContent = data.desc;

    const cardTime: HTMLSpanElement = document.createElement("span");
    cardTime.className = "card-time";
    cardTime.textContent = `Starts: ${data.scheduledDate} | Duration: ${data.durationInDays} days`;

    const cardPlace: HTMLSpanElement = document.createElement("span");
    cardPlace.className = "card-place";
    cardPlace.textContent = "Availability: ";
    for (const key in data.availability) {
        if (data.availability[key]) {
            cardPlace.textContent += `${
                key.charAt(0).toUpperCase() + key.slice(1)
            } | `;
        }
    }
    cardPlace.textContent = cardPlace.textContent.slice(0, -3);

    const cardBtnContainer: HTMLDivElement = document.createElement("div");
    cardBtnContainer.className = "card-btn-container";

    const cardOnlineBtn: HTMLButtonElement = document.createElement("button");
    cardOnlineBtn.className = "card-btn-online";
    cardOnlineBtn.textContent = "Enroll Online";

    const cardOnSiteBtn: HTMLButtonElement = document.createElement("button");
    cardOnSiteBtn.className = "card-btn-onsite";
    cardOnSiteBtn.textContent = "Enroll On-Site";

    if (data.featured) {
        const cardFeat: HTMLSpanElement = document.createElement("span");
        cardFeat.className = "card-feat";
        cardFeat.textContent = "Popular";

        cardTags.append(cardCode, cardFeat);
    } else {
        cardTags.appendChild(cardCode);
    }

    if (data.availability.classroom && data.availability.online) {
        cardBtnContainer.append(cardOnlineBtn, cardOnSiteBtn);
    } else if (data.availability.online) {
        cardBtnContainer.append(cardOnlineBtn);
    } else {
        cardBtnContainer.append(cardOnSiteBtn);
    }

    cardExtra.appendChild(cardExtraParagraph);

    cardDetails.append(
        cardImg,
        cardTags,
        cardTitle,
        cardDesc,
        cardTime,
        cardPlace,
        cardBtnContainer
    );
    cardContainer.append(cardBefore, cardExtra, cardImg, cardDetails);

    return cardContainer;
};

export { buildComponent };
