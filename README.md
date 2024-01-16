# 🦉 WestCoast Education

Welcome to WestCoast, your go-to educational platform where students can explore and purchase courses, choosing between online and classroom options. This README provides essential information to help you set up and use WestCoast.

<img src="https://i.imgur.com/5ucM5Kb.png" alt="Overview of WestCoast Education Platform" width="550px">

## 👋 Introduction
WestCoast is a user-friendly educational platform designed to connect students with a diverse range of courses. Whether you prefer the flexibility of online learning or the traditional classroom experience, WestCoast has you covered. Explore our courses, make your selections, and embark on a journey of knowledge and skill-building.

## 🌟 Features
- **Course Selection:** Browse and choose from a variety of courses offered on the platform.
- **Online or Classroom:** Decide whether to take your selected courses online or attend in a classroom setting.
- **Easy Registration:** Simple and quick registration process for both students and educators.

## ⚠️ Requirements
Before you get started with WestCoast, make sure you have the following prerequisites installed:

- Node.js (v20.10.0 or newer)
- npm (Node Package Manager)
- Ports 8080 & 3000 must be available

## 🚀 Installation
1. Clone the WestCoast repository:
   ```bash
   git clone https://github.com/alcompilor/westcoast.git
    ```
2. Navigate to the project directory:
   ```bash
   cd westcoast
    ```
3. Install the dependencies:
   ```bash
   npm install
    ```
4. Start the application:
   ```bash
   npm start
    ```
5. Open your browser and go to http://localhost:8080 to access the WestCoast platform.

## ⚙️ Setup & Demo Accounts
WestCoast uses `json-server` with a pre-seeded database to provide a realistic development environment. For exploration purposes, two demo accounts have been pre-configured within the json database, allowing you to interact with various features of the platform:

#### Admin Account:
- **Email:** `john@gmail.com`
- **Password:** `assumeHashed`

#### Regular User Account:
- **Email:** `jane@gmail.com`
- **Password:** `assumeHashed`

Feel free to use these demo accounts to navigate through different sections of the platform and experience its functionalities during development. Furthermore, feel free to examine the database schema in the [db.json](./db/db.json) file.

## 🧪 Unit Tests

WestCoat uses Jest as its testing framework. To execute the existing tests, ensure that you have installed the required dependencies and then run the following command:

```bash
   npm test
```

#### Adding Tests
If you wish to contribute or introduce new tests, locate the existing test files in the `tests` directory. Adhere to Jest's testing conventions and create your test files accordingly.

## ⚖️ License
WestCoast is licensed under the [MIT License](LICENSE.md). Feel free to reach out if you have any questions or suggestions.

## ©️ Credits
WestCoast acknowledges and appreciates the following libraries for providing some of its static content:
- [Storyset](https://storyset.com/)
- [Icons8](https://icons8.com/)
