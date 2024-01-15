import * as UserAPI from "../../api/users";
import * as CourseAPI from "../../api/courses";
import Course from "../../interfaces/course";
import User from "../../interfaces/user";
import * as StudentList from "../../components/students/list/StudentList";
import * as AddCourseForm from "../../components/forms/addcourse/AddCourseForm";
import * as AddCourseEvent from "../../components/forms/addcourse/events";

const buildPage = async (): Promise<HTMLDivElement> => {
    const adminContainer: HTMLDivElement = document.createElement("div");
    adminContainer.className = "admin-container";

    const allCourses: Course[] = await CourseAPI.reqCourses();
    const allUsers: User[] = await UserAPI.reqUsers();

    const studentsList: HTMLDivElement = StudentList.buildComponent(
        allUsers,
        allCourses
    );

    const addCourseForm: HTMLDivElement = AddCourseForm.buildComponent();
    adminContainer.append(addCourseForm, studentsList);

    return adminContainer;
};

const render = async (): Promise<void> => {
    const userId: string | null = localStorage.getItem("wcUserId");

    if (!userId) {
        window.location.replace("/account.html");
    } else {
        const isAdmin: boolean = (await UserAPI.reqUser(parseInt(userId)))
            .isAdmin;
        if (isAdmin) {
            const root: HTMLDivElement = document.querySelector(".root")!;
            const adminPage: HTMLDivElement = await buildPage();

            root.appendChild(adminPage);
        } else {
            window.location.replace("/account.html");
        }
    }
};

render().finally(() => {
    const firstCard: HTMLDetailsElement = document.querySelector(
        ".student-card:first-child"
    )!;
    firstCard.open = true;

    AddCourseEvent.mount();
});
