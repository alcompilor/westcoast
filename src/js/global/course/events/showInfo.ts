const mount = (): void => {
    const infoBtns: NodeListOf<HTMLElement> = document.querySelectorAll(".card-before")!;

    infoBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const courseID: number = Number(btn.parentElement?.dataset.id);
            const courseExtra: HTMLDivElement = document.querySelector(`.card[data-id="${courseID}"] > .card-extra`)!;

            courseExtra.classList.toggle("hidden");
            btn.classList.toggle("close-info");
        })
    })
}

export { mount };