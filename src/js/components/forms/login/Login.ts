const buildComponent = (): HTMLDivElement => {
    const formContainer: HTMLDivElement = document.createElement("div");
    formContainer.className = "login-container";

    const loginTitle: HTMLHeadingElement = document.createElement("h2");
    loginTitle.className = "login-title";
    loginTitle.textContent = "Sign in";

    const loginForm: HTMLFormElement = document.createElement("form");
    loginForm.className = "login-form";

    const emailField: HTMLInputElement = document.createElement("input");
    emailField.type = "email";
    emailField.placeholder = "Email";
    emailField.className = "login-email";
    emailField.required = true;

    const passwordField: HTMLInputElement = document.createElement("input");
    passwordField.type = "password";
    passwordField.placeholder = "Password";
    passwordField.className = "login-password";
    passwordField.required = true;

    const loginBtn: HTMLButtonElement = document.createElement("button");
    loginBtn.className = "login-btn";
    loginBtn.textContent = "Sign in";

    loginForm.append(emailField, passwordField);
    formContainer.append(loginTitle, loginForm, loginBtn);

    return formContainer;
};

export { buildComponent };
