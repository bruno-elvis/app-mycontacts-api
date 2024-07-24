<p align="center">
  <img src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/96/external-readme-is-a-easy-to-build-a-developer-hub-that-adapts-to-the-user-logo-regular-tal-revivo.png" width="100" />
</p>
<p align="center">
    <h1 align="center">API-CONTACTS-JS</h1>
</p>
<p align="center">
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/Bruno-Elvis/api-contacts-js?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/Bruno-Elvis/api-contacts-js?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/Bruno-Elvis/api-contacts-js?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/Bruno-Elvis/api-contacts-js?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/Nodemon-76D04B.svg?style=flat&logo=Nodemon&logoColor=white" alt="Nodemon">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/SemVer-3F4551.svg?style=flat&logo=SemVer&logoColor=white" alt="SemVer">
	<img src="https://img.shields.io/badge/Ajv-23C8D2.svg?style=flat&logo=Ajv&logoColor=white" alt="Ajv">
	<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

## 🔗 Quick Links

> - [📦 Features](#-features)
> - [📂 Repository Structure](#-repository-structure)
> - [🧩 Modules](#-modules)
> - [🚀 Getting Started](#-getting-started)
>   - [⚙️ Installation](#️-installation)
>   - [🤖 Running api-contacts-js](#-running-api-contacts-js)
> - [📄 License](#-license)

---

## 📦 Features

 `features`

---

## 📂 Repository Structure

```sh
└── api-contacts-js/
    ├── README.md
    ├── package.json
    ├── src
    │   ├── app
    │   │   ├── controllers
    │   │   │   ├── CategoryController.js
    │   │   │   └── ContactController.js
    │   │   ├── middlewares
    │   │   │   ├── cors.js
    │   │   │   └── errorHandler.js
    │   │   ├── repositories
    │   │   │   ├── CategoryRepository.js
    │   │   │   └── ContactRepository.js
    │   │   └── utils
    │   │       └── isValidUUID​.js
    │   ├── database
    │   │   ├── index.js
    │   │   └── schema.sql
    │   ├── index.js
    │   └── routes.js
    └── yarn.lock
```

---

## 🧩 Modules

<details closed><summary>.</summary>

| File                                                                                    | Summary                                  |
| ---                                                                                     | ---                                      |
| [package.json](https://github.com/Bruno-Elvis/api-contacts-js/blob/master/package.json) |  `package.json` |
| [yarn.lock](https://github.com/Bruno-Elvis/api-contacts-js/blob/master/yarn.lock)       |  `yarn.lock`    |

</details>

<details closed><summary>src</summary>

| File                                                                                  | Summary                                   |
| ---                                                                                   | ---                                       |
| [routes.js](https://github.com/Bruno-Elvis/api-contacts-js/blob/master/src/routes.js) |  `src/routes.js` |
| [index.js](https://github.com/Bruno-Elvis/api-contacts-js/blob/master/src/index.js)   |  `src/index.js`  |

</details>

<details closed><summary>src.database</summary>

| File                                                                                             | Summary                                             |
| ---                                                                                              | ---                                                 |
| [schema.sql](https://github.com/Bruno-Elvis/api-contacts-js/blob/master/src/database/schema.sql) |  `src/database/schema.sql` |
| [index.js](https://github.com/Bruno-Elvis/api-contacts-js/blob/master/src/database/index.js)     |  `src/database/index.js`   |

</details>

<details closed><summary>src.app.repositories</summary>

| File                                                                                                                           | Summary                                                                |
| ---                                                                                                                            | ---                                                                    |
| [ContactRepository.js](https://github.com/Bruno-Elvis/api-contacts-js/blob/master/src/app/repositories/ContactRepository.js)   |  `src/app/repositories/ContactRepository.js`  |
| [CategoryRepository.js](https://github.com/Bruno-Elvis/api-contacts-js/blob/master/src/app/repositories/CategoryRepository.js) |  `src/app/repositories/CategoryRepository.js` |

</details>

<details closed><summary>src.app.utils</summary>

| File                                                                                                        | Summary                                                   |
| ---                                                                                                         | ---                                                       |
| [isValidUUID​.js](https://github.com/Bruno-Elvis/api-contacts-js/blob/master/src/app/utils/isValidUUID​.js) |  `src/app/utils/isValidUUID​.js` |

</details>

<details closed><summary>src.app.controllers</summary>

| File                                                                                                                          | Summary                                                               |
| ---                                                                                                                           | ---                                                                   |
| [CategoryController.js](https://github.com/Bruno-Elvis/api-contacts-js/blob/master/src/app/controllers/CategoryController.js) |  `src/app/controllers/CategoryController.js` |
| [ContactController.js](https://github.com/Bruno-Elvis/api-contacts-js/blob/master/src/app/controllers/ContactController.js)   |  `src/app/controllers/ContactController.js`  |

</details>

<details closed><summary>src.app.middlewares</summary>

| File                                                                                                              | Summary                                                         |
| ---                                                                                                               | ---                                                             |
| [cors.js](https://github.com/Bruno-Elvis/api-contacts-js/blob/master/src/app/middlewares/cors.js)                 |  `src/app/middlewares/cors.js`         |
| [errorHandler.js](https://github.com/Bruno-Elvis/api-contacts-js/blob/master/src/app/middlewares/errorHandler.js) |  `src/app/middlewares/errorHandler.js` |

</details>

---

## 🚀 Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* **JavaScript**: `version x.y.z`

### ⚙️ Installation

1. Clone the api-contacts-js repository:

```sh
git clone https://github.com/Bruno-Elvis/api-contacts-js
```

2. Change to the project directory:

```sh
cd api-contacts-js
```

3. Install the dependencies:

```sh
npm install
```

### 🤖 Running api-contacts-js

Use the following command to run api-contacts-js:

```sh
node app.js
```

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/Bruno-Elvis/api-contacts-js/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/Bruno-Elvis/api-contacts-js/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/Bruno-Elvis/api-contacts-js/issues)**: Submit bugs found or log feature requests for Api-contacts-js.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/Bruno-Elvis/api-contacts-js
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

[**Return**](#-quick-links)

---
