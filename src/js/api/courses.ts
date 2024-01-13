import Course from "../interfaces/course";

const reqCourses = async (): Promise<Course[]> => {
    const res = await fetch("http://localhost:3000/courses");
    if (!res.ok) {
        console.error("Catalog failed to fetch courses!");
    }
    const data: Course[] = await res.json();
    return data;
};

const reqCourse = async (id: number): Promise<Course> => {
    const res = await fetch(`http://localhost:3000/courses/${id}`);
    if (!res.ok) {
        console.error("Catalog failed to fetch courses!");
    }
    const data: Course = await res.json();
    return data;
};

export { reqCourses, reqCourse };
