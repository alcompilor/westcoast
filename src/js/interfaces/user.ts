interface User {
    id?: number;
    fullName: string;
    email: string;
    password: string;
    address: string;
    phone: string;
    isAdmin: boolean;
    courses: number[];
}

export default User;
