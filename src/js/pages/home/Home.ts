import * as Hero from "../../components/hero/Hero";
import * as CourseCatalog from "../../components/course/catalog/CourseCatalog";
import * as CourseAPI from "../../api/courses";
import * as SearchEvents from "../../components/search/events";
import * as CourseEvents from "../../components/course/events";

const render = async (): Promise<void> => {
    const root = document.querySelector(".root");

    const heroSection = Hero.buildComponent();
    const catalogSection = CourseCatalog.buildComponent(
        await CourseAPI.reqCourses(),
        "Discover Courses"
    );
    root?.append(heroSection, catalogSection);
};

render().finally(() => {
    SearchEvents.mount();
    CourseEvents.mount();
});
