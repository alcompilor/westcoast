import * as Hero from "../../components/hero/Hero";
import * as Catalog from "../../components/course/catalog/CourseCatalog";
import * as API from "../../api/courses";
import * as SearchEvents from "../../components/search/events";
import * as CourseEvents from "../../components/course/events";

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
    CourseEvents.mount();
});
