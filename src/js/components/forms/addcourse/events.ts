import * as CourseAPI from "../../../api/courses";
import Course from "../../../interfaces/course";

const mount = (): void => {
    const addCourseEvent = ((): void => {
        const addCBtn: HTMLButtonElement =
            document.querySelector(".add-course-btn")!;

        addCBtn.addEventListener("click", async () => {
            const addCForm: HTMLFormElement =
                document.querySelector(".add-course-form")!;

            const cTitleValue: string = (
                document.querySelector(".course-title") as HTMLInputElement
            ).value.trim();
            const cCodeValue: string = (
                document.querySelector(".course-code") as HTMLInputElement
            ).value.trim();
            const cDescValue: string = (
                document.querySelector(".course-desc") as HTMLInputElement
            ).value.trim();
            const cPriceValue: string = (
                document.querySelector(".course-price") as HTMLInputElement
            ).value.trim();
            const cDurationValue: string = (
                document.querySelector(".course-duration") as HTMLInputElement
            ).value.trim();
            const cOnlineValue: boolean = (
                document.querySelector(".online-checkbox") as HTMLInputElement
            ).checked;
            const cOnSiteValue: boolean = (
                document.querySelector(".onsite-checkbox") as HTMLInputElement
            ).checked;
            const cImageValue: string = (
                document.querySelector(".course-img") as HTMLInputElement
            ).value.trim();
            const cDateValue: string = (
                document.querySelector(
                    ".course-date-picker"
                ) as HTMLInputElement
            ).value.trim();
            const cFeatValue: boolean = (
                document.querySelector(".feat-checkbox") as HTMLInputElement
            ).checked;
            const cDetailsValue: string = (
                document.querySelector(".course-details") as HTMLTextAreaElement
            ).value!.trim();

            if (addCForm.checkValidity()) {
                const newCourse: Course = {
                    courseTitle: cTitleValue,
                    courseCode: cCodeValue,
                    desc: cDescValue,
                    durationInDays: parseInt(cDurationValue),
                    availability: {
                        online: cOnlineValue,
                        classroom: cOnSiteValue,
                    },
                    image: {
                        url: cImageValue,
                        desc: `Illustration of the course ${cTitleValue}`,
                    },
                    scheduledDate: cDateValue,
                    bookingOptions: {
                        online: cOnlineValue,
                        classroom: cOnSiteValue,
                    },
                    featured: cFeatValue,
                    details: cDetailsValue,
                    price: parseInt(cPriceValue),
                };

                await CourseAPI.postCourse(newCourse);
                alert("Course Added!");
            } else {
                alert("Please fill the form correctly.");
            }
        });
    })();
};

export { mount };
