const buildAvailability = (): HTMLDivElement => {
    const container = document.createElement("div");
    container.className = "course-availability";

    const label = document.createElement("label");
    label.textContent = "Availability";

    const checkbox1 = document.createElement("input");
    checkbox1.type = "checkbox";
    checkbox1.className = "online-checkbox";
    checkbox1.id = "online-checkbox";
    const label1 = document.createElement("label");
    label1.htmlFor = "online-checkbox";
    label1.textContent = "Online";

    const checkbox2 = document.createElement("input");
    checkbox2.type = "checkbox";
    checkbox2.className = "onsite-checkbox";
    checkbox2.id = "onsite-checkbox";
    const label2 = document.createElement("label");
    label2.htmlFor = "onsite-checkbox";
    label2.textContent = "Classroom";

    container.appendChild(label);
    container.appendChild(checkbox1);
    container.appendChild(label1);
    container.appendChild(checkbox2);
    container.appendChild(label2);

    return container;
};

const buildFeatured = (): HTMLDivElement => {
    const container = document.createElement("div");
    container.className = "course-feat";

    const checkbox1 = document.createElement("input");
    checkbox1.type = "checkbox";
    checkbox1.className = "feat-checkbox";
    checkbox1.id = "feat-checkbox";

    const label = document.createElement("label");
    label.textContent = "Featured?";
    label.htmlFor = "feat-checkbox";

    container.appendChild(checkbox1);
    container.appendChild(label);

    return container;
};

const buildDate = (): HTMLDivElement => {
    const container: HTMLDivElement = document.createElement("div");
    container.className = "course-date";

    const label = document.createElement("label");
    label.htmlFor = "date";
    label.textContent = "Course Start Date";

    const dateField: HTMLInputElement = document.createElement("input");
    dateField.type = "date";
    dateField.className = "course-date-picker";
    dateField.value = new Date().toISOString().split("T")[0];
    dateField.required = true;

    container.append(label, dateField);
    return container;
};

const buildComponent = (): HTMLDivElement => {
    const formContainer: HTMLDivElement = document.createElement("div");
    formContainer.className = "add-course-container";

    const aCourseTitle: HTMLHeadingElement = document.createElement("h2");
    aCourseTitle.className = "add-course-title";
    aCourseTitle.textContent = "Add new course";

    const aCourseForm: HTMLFormElement = document.createElement("form");
    aCourseForm.className = "add-course-form";

    const cTitleField: HTMLInputElement = document.createElement("input");
    cTitleField.type = "text";
    cTitleField.placeholder = "Course Title";
    cTitleField.className = "course-title";
    cTitleField.required = true;

    const cCodeField: HTMLInputElement = document.createElement("input");
    cCodeField.type = "text";
    cCodeField.placeholder = "Course Code";
    cCodeField.className = "course-code";
    cCodeField.required = true;

    const cDescField: HTMLInputElement = document.createElement("input");
    cDescField.type = "text";
    cDescField.placeholder = "Course Short Description";
    cDescField.className = "course-desc";
    cDescField.required = true;

    const cDurationField: HTMLInputElement = document.createElement("input");
    cDurationField.type = "number";
    cDurationField.placeholder = "Course Duration (Days)";
    cDurationField.className = "course-duration";
    cDurationField.required = true;

    const cPriceField: HTMLInputElement = document.createElement("input");
    cPriceField.type = "number";
    cPriceField.placeholder = "Course Price";
    cPriceField.className = "course-price";
    cPriceField.required = true;

    const cAvailability: HTMLDivElement = buildAvailability();

    const cImageField: HTMLInputElement = document.createElement("input");
    cImageField.type = "url";
    cImageField.placeholder = "Course Image (URL)";
    cImageField.className = "course-img";
    cImageField.required = true;

    const cDateField: HTMLDivElement = buildDate();

    const cFeat: HTMLDivElement = buildFeatured();

    const cDetailsField: HTMLTextAreaElement =
        document.createElement("textarea");
    cDetailsField.placeholder = "Course Details";
    cDetailsField.className = "course-details";
    cDetailsField.required = true;

    const aCourseBtn: HTMLButtonElement = document.createElement("button");
    aCourseBtn.className = "add-course-btn";
    aCourseBtn.textContent = "Add course";

    aCourseForm.append(
        cTitleField,
        cCodeField,
        cDescField,
        cPriceField,
        cDurationField,
        cAvailability,
        cImageField,
        cDateField,
        cFeat,
        cDetailsField
    );
    formContainer.append(aCourseTitle, aCourseForm, aCourseBtn);

    return formContainer;
};

export { buildComponent };
