const mount = (): void => {
    const cardOnlineBtns: NodeListOf<HTMLButtonElement> =
        document.querySelectorAll(".card-btn-online");

    const cardOnSiteBtns: NodeListOf<HTMLButtonElement> =
        document.querySelectorAll(".card-btn-onsite");

    const combinedBtns: HTMLButtonElement[] = [
        ...cardOnlineBtns,
        ...cardOnSiteBtns,
    ];

    combinedBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const courseID: number = Number(
                btn.parentElement?.parentElement?.parentElement?.dataset.id
            );
            if (localStorage.getItem("wcUserId")) {
                window.location.assign(`/enroll.html?id=${courseID}`);
            } else {
                window.location.assign(`/account.html`);
            }
        });
    });
};

export { mount };
