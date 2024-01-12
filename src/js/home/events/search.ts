import Course from "../../interfaces/course";
import * as API from "../../api/courses";
import * as Catalog from "../../global/course/Catalog";

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

    const performSearch = (data: Course[]): Set<Course> => {
        const query: string = searchInput?.value.trim().toLowerCase();
        const results: Set<Course> = new Set();

        data.forEach((course) => {
            for (const key in course) {
                if (
                    typeof course[key] === "string" ||
                    typeof course[key] === "number"
                ) {
                    const val: string = String(
                        course[key] as string
                    ).toLowerCase();
                    val.includes(query) && results.add(course);
                }
            }
        });

        return results;
    };

    const searchHandler = async (): Promise<void> => {
        const data = await API.reqCourses();
        const listOfCourses = [...performSearch(data)];

        let title: string;
        if (listOfCourses.length > 0) {
            title = "Search Results:";
        } else {
            title = "No Results Found :(";
        }
        const catalogSection: HTMLDivElement = Catalog.buildComponent(
            listOfCourses,
            title
        );

        root.appendChild(catalogSection);
    };

    searchInput?.addEventListener("change", async (e) => {
        e.preventDefault();
        clearResults();
        await searchHandler();
        scrollEffect();
    });
};

export { mount };
