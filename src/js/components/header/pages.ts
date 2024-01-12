const pages: NavLinks[] = [
    {
        name: "Home",
        url: "./index.html",
    },
    {
        name: "Popular Courses",
        url: "./popular.html",
    },
    {
        name: "My Account",
        url: "./account.html",
    },
];

interface NavLinks {
    name: string;
    url: string;
}

export { pages };
