import Course from "../../../interfaces/course";
import * as CourseCard from "../card/CourseCard";

const buildComponent = (
    data: Course[],
    title: string,
    showEnrollBtns: boolean = true
): HTMLDivElement => {
    const catalogContainer: HTMLDivElement = document.createElement("div");
    catalogContainer.className = "cards-container";

    const catalogEl: HTMLDivElement = document.createElement("div");
    catalogEl.className = "cards";

    const catalogTitle: HTMLHeadElement = document.createElement("h2");
    catalogTitle.className = "cards-container-title";
    catalogTitle.textContent = title;

    const nodesList: Node[] = [];
    data.forEach((course) => {
        const courseCard: HTMLDivElement = CourseCard.buildComponent(
            course,
            showEnrollBtns
        );
        nodesList.push(courseCard);
    });

    catalogEl.append(...nodesList);
    catalogContainer.append(catalogTitle, catalogEl);
    return catalogContainer;
};

export { buildComponent };
