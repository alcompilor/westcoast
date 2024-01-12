import Course from "../../interfaces/course";
import * as CourseCatalog from "../../components/course/catalog/CourseCatalog";
import * as CourseAPI from "../../api/courses";
import * as CourseEvents from "../../components/course/events";

const filterPopular = (data: Course[]): Course[] => {
    const filtered: Course[] = data.filter((course) => course.featured);
    return filtered;
};

const render = async (): Promise<void> => {
    const root: HTMLDivElement = document.querySelector(".root")!;

    const allCourses: Course[] = await CourseAPI.reqCourses();
    const filteredCourses: Course[] = filterPopular(allCourses);

    const catalogSection: HTMLDivElement = CourseCatalog.buildComponent(
        filteredCourses,
        "Popular Courses"
    );
    root?.append(catalogSection);
};

render().finally(() => {
    CourseEvents.mount();
});
