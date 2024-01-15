const buildComponent = (): HTMLDivElement => {
    const formContainer: HTMLDivElement = document.createElement("div");
    formContainer.className = "reg-container";

    const regTitle: HTMLHeadingElement = document.createElement("h2");
    regTitle.className = "reg-title";
    regTitle.textContent = "Sign up";

    const regForm: HTMLFormElement = document.createElement("form");
    regForm.className = "reg-form";

    const fullNameField: HTMLInputElement = document.createElement("input");
    fullNameField.type = "text";
    fullNameField.placeholder = "Full Name";
    fullNameField.className = "reg-name";
    fullNameField.required = true;

    const emailField: HTMLInputElement = document.createElement("input");
    emailField.type = "email";
    emailField.placeholder = "Email";
    emailField.className = "reg-email";
    emailField.required = true;

    const passwordField: HTMLInputElement = document.createElement("input");
    passwordField.type = "password";
    passwordField.placeholder = "Password";
    passwordField.className = "reg-password";
    passwordField.required = true;

    const addressField: HTMLInputElement = document.createElement("input");
    addressField.type = "text";
    addressField.placeholder = "Address";
    addressField.className = "reg-address";
    addressField.required = true;

    const phoneField: HTMLInputElement = document.createElement("input");
    phoneField.type = "text";
    phoneField.placeholder = "Phone";
    phoneField.className = "reg-phone";
    phoneField.required = true;

    const regBtn: HTMLButtonElement = document.createElement("button");
    regBtn.className = "reg-btn";
    regBtn.textContent = "Sign up";

    regForm.append(
        fullNameField,
        emailField,
        passwordField,
        addressField,
        phoneField
    );
    formContainer.append(regTitle, regForm, regBtn);

    return formContainer;
};

export { buildComponent };
