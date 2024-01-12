const mount = (): void => {
    const logoutLink: HTMLAnchorElement =
        document.querySelector(".logout-link")!;

    logoutLink?.addEventListener("click", () => {
        localStorage.removeItem("wcUserId");
    });
};

export { mount };
