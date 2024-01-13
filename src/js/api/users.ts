import User from "../interfaces/user";

const reqUser = async (id: number): Promise<User> => {
    const res = await fetch(`http://localhost:3000/users/${id}`);
    if (!res.ok) {
        console.error("Catalog failed to fetch courses!");
    }
    const data: User = await res.json();
    return data;
};

export { reqUser };
