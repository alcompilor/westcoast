import * as Hero from "./Hero";
import * as Catalog from "../global/course/Catalog";
import * as API from "../api/courses";
import * as SearchEvents from "./events/search";
import * as CourseEnrollEvent from "../global/course/events/enroll";
import * as CourseDetailsEvent from "../global/course/events/showInfo";

const render = async (): Promise<void> => {
    const root = document.querySelector(".root");

    const heroSection = Hero.buildComponent();
    const catalogSection = Catalog.buildComponent(
        await API.reqCourses(),
        "Discover Courses"
    );
    root?.append(heroSection, catalogSection);
};

render().finally(() => {
    SearchEvents.mount();
    CourseEnrollEvent.mount();
    CourseDetailsEvent.mount();
});
