import User from "../../../interfaces/user";

const buildComponent = (
    user: User,
    courses: Array<[string, string]>
): HTMLDetailsElement => {
    const detailsEl: HTMLDetailsElement = document.createElement("details");
    detailsEl.className = "student-card";
    detailsEl.dataset.id = String(user.id);

    const summaryEl: HTMLElement = document.createElement("summary");
    summaryEl.className = "student-card-title";
    summaryEl.textContent = user.fullName;

    const flexContainer: HTMLDivElement = document.createElement("div");

    const coursesContainer: HTMLDivElement = document.createElement("div");
    coursesContainer.className = "student-courses-container";

    const coursesTitle: HTMLHeadingElement = document.createElement("h2");
    coursesTitle.className = "student-courses-title";
    coursesTitle.textContent = "Enrolled In";

    const coursesUl: HTMLUListElement = document.createElement("ul");
    if (courses.length > 0) {
        courses.forEach((course) => {
            const li: HTMLLIElement = document.createElement("li");
            li.className = "student-card-course";

            li.textContent = `${course[0]} — (${course[1]})`;
            coursesUl.appendChild(li);
        });
    } else {
        const li: HTMLLIElement = document.createElement("li");
        li.className = "student-card-course";
        li.textContent = "Not enrolled in any course";
        coursesUl.appendChild(li);
    }

    const studentInfoContainer: HTMLDivElement = document.createElement("div");
    studentInfoContainer.className = "student-info-container";

    const studentInfoTitle: HTMLHeadingElement = document.createElement("h2");
    studentInfoTitle.className = "student-info-title";
    studentInfoTitle.textContent = "Student Details";

    const studentInfoName: HTMLParagraphElement = document.createElement("p");
    studentInfoName.className = "student-info-detail";
    studentInfoName.textContent = `Name: ${user.fullName}`;

    const studentInfoEmail: HTMLParagraphElement = document.createElement("p");
    studentInfoEmail.className = "student-info-detail";
    studentInfoEmail.textContent = `Email: ${user.email}`;

    const studentInfoAddress: HTMLParagraphElement =
        document.createElement("p");
    studentInfoAddress.className = "student-info-detail";
    studentInfoAddress.textContent = `Address: ${user.address}`;

    const studentInfoPhone: HTMLParagraphElement = document.createElement("p");
    studentInfoPhone.className = "student-info-detail";
    studentInfoPhone.textContent = `Phone: ${user.phone}`;

    coursesContainer.append(coursesTitle, coursesUl);
    studentInfoContainer.append(
        studentInfoTitle,
        studentInfoName,
        studentInfoEmail,
        studentInfoAddress,
        studentInfoPhone
    );
    flexContainer.append(coursesContainer, studentInfoContainer);

    detailsEl.append(summaryEl, flexContainer);
    return detailsEl;
};

export { buildComponent };
