import * as UserAPI from "../../src/js/api/users";

test("Test to fetch one user by its ID", async () => {
    expect(await UserAPI.reqUser(1)).toEqual({
        id: 1,
        fullName: "Jane Doe",
        email: "jane@gmail.com",
        password: "assumeHashed",
        address: "Example Street Address",
        phone: "0720000000",
        isAdmin: false,
        courses: [6, 10],
    });
});

test("Test to fetch one user by its email", async () => {
    expect(await UserAPI.reqUserByEmail("john@gmail.com")).toEqual({
        id: 2,
        fullName: "John Doe",
        email: "john@gmail.com",
        password: "assumeHashed",
        address: "Example Street Address",
        phone: "0720000000",
        isAdmin: true,
        courses: [],
    });
});

test("Test to fetch all courses", async () => {
    expect(await UserAPI.reqUsers()).toEqual([
        {
            id: 1,
            fullName: "Jane Doe",
            email: "jane@gmail.com",
            password: "assumeHashed",
            address: "Example Street Address",
            phone: "0720000000",
            isAdmin: false,
            courses: [6, 10],
        },
        {
            id: 2,
            fullName: "John Doe",
            email: "john@gmail.com",
            password: "assumeHashed",
            address: "Example Street Address",
            phone: "0720000000",
            isAdmin: true,
            courses: [],
        },
    ]);
});
