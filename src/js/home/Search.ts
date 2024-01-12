const buildComponent = (): HTMLDivElement => {
    const searchContainer: HTMLDivElement = document.createElement("div");
    searchContainer.className = "search-container";

    const searchInput: HTMLInputElement = document.createElement("input");
    searchInput.placeholder = "Find courses..";
    searchInput.className = "search-input";

    searchContainer.append(searchInput);
    return searchContainer;
}

export { buildComponent };