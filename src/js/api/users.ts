import User from "../interfaces/user";
import Course from "../interfaces/course";

const reqUser = async (id: number): Promise<User> => {
    const res = await fetch(`http://localhost:3000/users/${id}`);
    if (!res.ok) {
        console.error("Catalog failed to fetch user!", 400);
    }
    const data: User = await res.json();
    return data;
};

const reqUserByEmail = async (email: string): Promise<User> => {
    const res = await fetch(`http://localhost:3000/users?email=${email}`);
    if (!res.ok) {
        console.error("Catalog failed to fetch user!", 400);
    }
    const data: User[] = await res.json();
    return data[0];
};

const reqUsers = async (): Promise<User[]> => {
    const res = await fetch(`http://localhost:3000/users`);
    if (!res.ok) {
        console.error("Catalog failed to fetch user!", 400);
    }
    const data: User[] = await res.json();
    return data;
};

const patchCourseUser = async (user: User, course: Course): Promise<void> => {
    const updatedCourses: number[] = user.courses.includes(
        parseInt(course.id as string)
    )
        ? user.courses
        : [...user.courses, parseInt(course.id as string)];

    const res = await fetch(`http://localhost:3000/users/${user.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ courses: updatedCourses }),
    });

    if (!res.ok) {
        console.error("Enrolling user to course failed", 400);
    }
};

const postUser = async (user: User): Promise<void> => {
    const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
};

export { reqUser, reqUserByEmail, reqUsers, patchCourseUser, postUser };
