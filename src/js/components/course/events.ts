const mount = (): void => {
    const enrollEvent = ((): void => {
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
    })();

    const showInfoEvent = ((): void => {
        const infoBtns: NodeListOf<HTMLElement> =
            document.querySelectorAll(".card-before")!;

        infoBtns.forEach((btn) => {
            btn.addEventListener("click", () => {
                const courseID: number = Number(btn.parentElement?.dataset.id);
                const courseExtra: HTMLDivElement = document.querySelector(
                    `.card[data-id="${courseID}"] > .card-extra`
                )!;

                courseExtra.classList.toggle("hidden");
                btn.classList.toggle("close-info");
            });
        });
    })();
};

export { mount };
