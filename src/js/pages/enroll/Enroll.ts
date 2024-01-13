import User from "../../interfaces/user";
import Course from "../../interfaces/course";
import * as CourseAPI from "../../api/courses";
import * as UserAPI from "../../api/users";
import * as EnrollConfirm from "../../components/enroll/EnrollConfirm";

const render = async (): Promise<void> => {
    const root: HTMLDivElement = document.querySelector(".root")!;

    const userId: number = Number(localStorage.getItem("wcUserId"));

    if (!userId) {
        window.location.replace("/account.html");
    }

    const params = new URLSearchParams(window.location.search);
    const courseID: number = Number(params.get("id"));

    const courseObj: Course = await CourseAPI.reqCourse(courseID);
    const userObj: User = await UserAPI.reqUser(userId);

    UserAPI.patchCourseUser(userObj, courseObj);

    const eConfirm: HTMLDivElement = EnrollConfirm.buildComponent(
        courseObj,
        userObj
    );

    root?.appendChild(eConfirm);
};

render();
