import Course from "./course";

interface User {
    id: string;
    fullName: string;
    email: string;
    password: string;
    address: string;
    phone: string;
    isAdmin: boolean;
    courses: Number[];
}

export default User;
