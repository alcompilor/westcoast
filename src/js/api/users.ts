import User from "../interfaces/user";
import Course from "../interfaces/course";

const reqUser = async (id: number): Promise<User> => {
    const res = await fetch(`http://localhost:3000/users/${id}`);
    if (!res.ok) {
        console.error("Catalog failed to fetch courses!", 400);
    }
    const data: User = await res.json();
    return data;
};

const patchCourseUser = async (user: User, course: Course): Promise<void> => {
    const updatedCourses: Number[] = user.courses.includes(Number(course.id))
        ? user.courses
        : [...user.courses, Number(course.id)];

    const res = await fetch(`http://localhost:3000/users/${user.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ courses: updatedCourses }),
    });

    if (!res.ok) {
        console.error("Enrolling user failed", 400);
    }
};

export { reqUser, patchCourseUser };
