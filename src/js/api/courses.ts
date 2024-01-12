import Course from "../interfaces/course";

const reqCourses = async (): Promise<Course[]> => {
    const res = await fetch("http://localhost:3000/courses");
    if (!res.ok) {
        console.error("Catalog failed to fetch courses!");
    }
    const data = await res.json();
    return data;
};

export { reqCourses };
