import Course from "../interfaces/course";
import * as Catalog from "../global/course/Catalog";
import * as API from "../api/courses";
import * as CourseEnrollEvent from "../global/course/events/enroll";
import * as CourseDetailsEvent from "../global/course/events/showInfo";

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
    CourseEnrollEvent.mount();
    CourseDetailsEvent.mount();
});
