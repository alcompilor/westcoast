import Course from "../../interfaces/course";
import * as Catalog from "../../components/course/catalog/CourseCatalog";
import * as API from "../../api/courses";
import * as CourseEvents from "../../components/course/events";

const filterPopular = (data: Course[]): Course[] => {
    const filtered: Course[] = data.filter((course) => course.featured);
    return filtered;
};

const render = async (): Promise<void> => {
    const root: HTMLDivElement = document.querySelector(".root")!;

    const allCourses: Course[] = await API.reqCourses();
    const filteredCourses: Course[] = filterPopular(allCourses);

    const catalogSection: HTMLDivElement = Catalog.buildComponent(
        filteredCourses,
        "Popular Courses"
    );
    root?.append(catalogSection);
};

render().finally(() => {
    CourseEvents.mount();
});
