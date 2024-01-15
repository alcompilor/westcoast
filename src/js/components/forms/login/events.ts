import User from "../../../interfaces/user";
import * as UserAPI from "../../../api/users";

const mount = (): void => {
    const loginEvent = ((): void => {
        const loginForm: HTMLFormElement =
            document.querySelector(".login-form")!;

        const loginBtn: HTMLButtonElement =
            document.querySelector(".login-btn")!;

        loginBtn.addEventListener("click", async () => {
            const email: HTMLInputElement =
                document.querySelector(".login-email")!;

            const password: HTMLInputElement =
                document.querySelector(".login-password")!;

            const notice: HTMLSpanElement =
                document.querySelector(".account-status")!;

            if (loginForm.checkValidity()) {
                const user: User = await UserAPI.reqUserByEmail(
                    email.value.trim()
                );

                if (user && user.password === password.value) {
                    localStorage.setItem("wcUserId", user.id!);
                    notice.textContent =
                        "Login successful, you will be redirected..";
                    notice.style.display = "block";
                } else {
                    notice.textContent = "Invalid credentials, try again.";
                    notice.style.display = "block";
                }

                return setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } else {
                notice.textContent = "Please fill the login form correctly.";
                notice.style.display = "block";
            }
        });
    })();
};

export { mount };
