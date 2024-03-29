import Course from "../../interfaces/course";
import * as CourseAPI from "../../api/courses";
import * as CourseCatalog from "../course/catalog/CourseCatalog";
import * as CourseEvents from "../course/events";

const mount = (): void => {
    const root: HTMLDivElement = document.querySelector(".root")!;
    const searchInput: HTMLInputElement =
        document.querySelector(".search-input")!;

    const clearResults = (): void => {
        const cardsContainer: HTMLDivElement =
            document.querySelector(".cards-container")!;
        cardsContainer?.remove();
    };

    const scrollEffect = (): void => {
        const cardsContainer: HTMLDivElement =
            document.querySelector(".cards-container")!;
        cardsContainer.scrollIntoView({ behavior: "smooth" });
    };

    const performSearch = (data: Course[]): Course[] => {
        const query: string = searchInput?.value.trim().toLowerCase();

        const results: Course[] = data.filter((course) => {
            for (const key in course) {
                const value = course[key];
                if (
                    typeof value === "string" &&
                    value.toLowerCase().includes(query)
                ) {
                    return true;
                }
            }
            return false;
        });

        return results;
    };

    const searchHandler = async (): Promise<void> => {
        const data = await CourseAPI.reqCourses();
        const listOfCourses = [...performSearch(data)];

        let title: string;
        if (listOfCourses.length > 0) {
            title = "Search Results:";
        } else {
            title = "No courses found 👀";
        }
        const catalogSection: HTMLDivElement = CourseCatalog.buildComponent(
            listOfCourses,
            title
        );

        root.appendChild(catalogSection);
    };

    searchInput?.addEventListener("change", async (e) => {
        e.preventDefault();
        clearResults();
        await searchHandler();
        CourseEvents.mount();
        scrollEffect();
    });
};

export { mount };
