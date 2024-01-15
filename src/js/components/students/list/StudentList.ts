import Course from "../../../interfaces/course";
import User from "../../../interfaces/user";
import * as StudentCard from "../card/StudentCard";

const buildComponent = (users: User[], courses: Course[]): HTMLDivElement => {
    const studentListContainer: HTMLDivElement = document.createElement("div");
    studentListContainer.className = "student-list-container";

    const studentListTitle: HTMLHeadingElement = document.createElement("h1");
    studentListTitle.className = "student-list-title";
    studentListTitle.textContent = "Students List";

    const ul: HTMLUListElement = document.createElement("ul");
    ul.className = "student-list";

    users.forEach((user) => {
        const li: HTMLLIElement = document.createElement("li");

        const filteredCourses: Course[] = courses.filter((course) =>
            user.courses.includes(parseInt(course.id as string))
        );

        const parsedCourses: Array<[string, string]> = filteredCourses.flatMap(
            (course) => {
                return [[course.courseTitle, course.courseCode]];
            }
        );

        const studentCard: HTMLDetailsElement = StudentCard.buildComponent(
            user,
            parsedCourses
        );
        li.appendChild(studentCard);
        ul.appendChild(li);
    });

    studentListContainer.append(studentListTitle, ul);
    return studentListContainer;
};

export { buildComponent };
