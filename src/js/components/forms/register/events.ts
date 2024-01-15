import User from "../../../interfaces/user";
import * as UserAPI from "../../../api/users";

const mount = (): void => {
    const regEvent = ((): void => {
        const regForm: HTMLButtonElement = document.querySelector(".reg-form")!;
        const regBtn: HTMLButtonElement = document.querySelector(".reg-btn")!;
        const notice: HTMLSpanElement =
            document.querySelector(".account-status")!;

        regBtn.addEventListener("click", async () => {
            const fullNameField: HTMLInputElement =
                document.querySelector(".reg-name")!;
            const fullName: string = fullNameField.value.trim();

            const emailField: HTMLInputElement =
                document.querySelector(".reg-email")!;
            const email: string = emailField.value.trim();

            const passwordField: HTMLInputElement =
                document.querySelector(".reg-password")!;
            const password: string = passwordField.value;

            const addressField: HTMLInputElement =
                document.querySelector(".reg-address")!;
            const address: string = addressField.value.trim();

            const phoneField: HTMLInputElement =
                document.querySelector(".reg-phone")!;
            const phone: string = phoneField.value.trim();

            if (regForm.checkValidity()) {
                const user: User = {
                    fullName,
                    email,
                    password,
                    address,
                    phone,
                    isAdmin: false,
                    courses: [],
                };

                await UserAPI.postUser(user);
                notice.textContent = "Registration successful, please login.";
                notice.style.display = "block";

                return setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }

            notice.textContent = "Please fill the registration form correctly.";
            notice.style.display = "block";
        });
    })();
};

export { mount };
