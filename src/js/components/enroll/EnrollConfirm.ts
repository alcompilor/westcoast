import Course from "../../interfaces/course";
import User from "../../interfaces/user";

const buildComponent = (course: Course, user: User): HTMLDivElement => {
    const confirmContainer: HTMLDivElement = document.createElement("div");
    confirmContainer.className = "econfirm-container";

    const confirmWrapper: HTMLDivElement = document.createElement("div");
    confirmWrapper.className = "econfirm-wrapper";

    const confirmationImg: HTMLImageElement = document.createElement("img");
    confirmationImg.className = "econfirm-img";
    confirmationImg.src = "/assets/img/econfirm.svg";
    [confirmationImg.width, confirmationImg.height] = [600, 600];
    confirmationImg.alt = "Animated SVG image showing a launching rocket";

    const confirmationTitle: HTMLHeadingElement = document.createElement("h1");
    confirmationTitle.className = "econfirm-title";
    confirmationTitle.textContent = `Enrolled, ${
        user.fullName.split(" ")[0]
    }! Ready for brilliance?`;

    const confirmationSubtitle: HTMLHeadingElement =
        document.createElement("h2");
    confirmationSubtitle.className = "econfirm-subtitle";
    confirmationSubtitle.textContent = `Your Course: ${course.courseTitle}`;

    confirmWrapper.append(confirmationTitle, confirmationSubtitle);
    confirmContainer.append(confirmationImg, confirmWrapper);

    return confirmContainer;
};

export { buildComponent };
