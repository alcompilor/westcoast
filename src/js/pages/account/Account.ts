import * as LoginForm from "../../components/login/Login";
import * as LoginEvents from "../../components/login/events";
import * as RegForm from "../../components/register/Register";
import * as RegEvents from "../../components/register/events";
import * as CourseCatalog from "../../components/course/catalog/CourseCatalog";
import * as UserAPI from "../../api/users";
import * as CourseAPI from "../../api/courses";
import Course from "../../interfaces/course";

const filterUserCourses = async (id: number): Promise<Course[]> => {
    const enrolledIDs: number[] = (await UserAPI.reqUser(id)).courses;
    const allCourses: Course[] = await CourseAPI.reqCourses();

    const enrolledCourses = allCourses.filter((course) =>
        enrolledIDs.includes(parseInt(course.id as string))
    );

    return enrolledCourses;
};

const compileFormsSection = (): [HTMLSpanElement, HTMLDivElement] => {
    const notice: HTMLSpanElement = document.createElement("span");
    notice.className = "account-status";

    const formsContainer: HTMLDivElement = document.createElement("div");
    formsContainer.className = "forms-container";

    const loginForm: HTMLDivElement = LoginForm.buildComponent();
    const regForm: HTMLDivElement = RegForm.buildComponent();

    formsContainer.append(loginForm, regForm);
    return [notice, formsContainer];
};

const compileEmptySection = (): HTMLDivElement => {
    const emptyContainer: HTMLDivElement = document.createElement("div");
    emptyContainer.className = "account-empty-container";

    const emptyNote: HTMLHeadingElement = document.createElement("h1");
    emptyNote.className = "account-empty-title";
    emptyNote.textContent =
        "No courses yet? Time to dive in and pick a few to enroll in! 😇";

    const emptyImg: HTMLImageElement = document.createElement("img");
    emptyImg.className = "accunt-empty-title";
    emptyImg.src = "/assets/img/empty.svg";
    [emptyImg.height, emptyImg.width] = [600, 600];
    emptyImg.alt = "Illustration that highlights an empty place";

    emptyContainer.append(emptyImg, emptyNote);
    return emptyContainer;
};

const buildPage = async (): Promise<HTMLDivElement> => {
    const userId: number = parseInt(localStorage.getItem("wcUserId") as string);
    const isUserAdmin: boolean = userId
        ? (await UserAPI.reqUser(userId)).isAdmin
        : false;

    const accountContainer: HTMLDivElement = document.createElement("div");
    accountContainer.className = "account-container";

    if (!userId) {
        const [notice, formsContainer]: [HTMLSpanElement, HTMLDivElement] =
            compileFormsSection();
        accountContainer.append(notice, formsContainer);
    } else if (userId && isUserAdmin) {
        window.location.replace("/admin.html");
    } else {
        const userCourses: Course[] = await filterUserCourses(userId);

        if (userCourses.length > 0) {
            const userCatalog: HTMLDivElement = CourseCatalog.buildComponent(
                userCourses,
                "Enrolled Courses",
                false
            );
            accountContainer.appendChild(userCatalog);
        } else {
            const emptyContainer: HTMLDivElement = compileEmptySection();
            accountContainer.appendChild(emptyContainer);
        }
    }

    return accountContainer;
};

const render = async (): Promise<void> => {
    const root: HTMLDivElement = document.querySelector(".root")!;
    const page: HTMLDivElement = await buildPage();

    root.append(page);
};

render().finally(() => {
    LoginEvents.mount();
    RegEvents.mount();
});
