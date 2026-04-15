# CodeceptJS-API-Tests

This repository contains automated end-to-end (E2E) API tests for the JSONPlaceholder service, a popular fake online REST API for testing and prototyping.

🌐 Access the documentation through this link 👉 [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

<img width="1019" height="550" alt="image" src="https://github.com/user-attachments/assets/36f82acd-de23-4c11-bf09-dff13a32c3c2" />



&nbsp;

## 🧭 Overview

In this project, I implement automated functional end-to-end (E2E) API tests using **CodeceptJS** with **JavaScript**, following BDD practices with the **Gherkin** language using the **Cucumber** tool. The goal is to ensure the quality and reliability of the JSONPlaceholder API endpoints.

&nbsp;

## 🛠️ Technologies and Tools Used

- JavaScript
- CodeceptJS
- Node.js
- npm
- Cucumber  
- Gherkin  
- BDD (Behavior-Driven Development)  
- Joi (Schema validation)

<div>
 <a href="https://nodejs.org/en/">
  <img align="center" alt="NodeJS" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" />
 </a>
 <a href="https://www.npmjs.com/">
  <img align="center" alt="NPM" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
 </a>
 <a href="https://www.javascript.com/">
  <img align="center" alt="Javascript" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
 </a>
 <a href="https://codecept.io/">
  <img align="center" alt="CodeceptJS" height="50" width="60" src="https://www.svgrepo.com/show/330181/codeceptjs.svg" />
 </a>
 <a href="https://cucumber.io/" target="_blank">
  <img align="center" alt="Cucumber" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cucumber/cucumber-plain-wordmark.svg" />
 </a>
 <a href="https://joi.dev/" target="_blank">
  <img align="center" alt="Joi" height="50" width="60" src="https://i.imgur.com/InejDjb.png" />
 </a>
</div>

&nbsp;

## ⚙️ Project Structure

This project is designed for **scalability** and **maintainability** for both current and future test scenarios.

- **`features/`**: Contains Gherkin feature files describing the test scenarios in BDD style.
<img width="1308" height="629" alt="image" src="https://github.com/user-attachments/assets/e5f4fbe0-5300-46bc-904b-5b0367651030" />

&nbsp;

- **`step_definitions/`**: Contains JavaScript step definitions for each feature, organized by domain (e.g., `posts.steps.js`, `users.steps.js`, and `common.steps.js` for shared steps).
<img width="1390" height="753" alt="image" src="https://github.com/user-attachments/assets/33833e50-1488-40de-8028-fc131f296859" />

&nbsp;

- **`data/schema/`**: Contains Joi schemas for validating API responses.
<img width="1225" height="596" alt="image" src="https://github.com/user-attachments/assets/03a9f8d9-c3ff-4c3e-8da5-164b77016b93" />


&nbsp;

## 🧪 Automated Test Scenarios

This project covers a variety of positive and negative API scenarios, including:

- **GET all posts**
- **GET post by ID**
- **GET posts by userId**
- **GET all users**
- **CREATE a new user**
- **UPDATE a user**
- **DELETE a user**
- **GET a user that does not exist** (negative scenario, using Scenario Outline for multiple invalid IDs)

All scenarios are written in Gherkin and validated with Joi schemas for contract testing.

&nbsp;

## 🔬 Running Tests Locally

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v14+ recommended)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

### Setup

1. **Clone this repository:**
   ```bash
   git clone https://github.com/your-username/codeceptjs-api-tests.git
   cd codeceptjs-api-tests
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the tests:**
   ```bash
   npm test
   ```

Test results will be displayed in the terminal and logs will be available in the `output/` folder.

&nbsp;

## 📝 Example Test Output

```
Posts --
  √ GET all posts
  √ GET posts by id {"id":"1"}
  ...
Users --
  √ GET all users
  √ CREATE a new user
  ...
  √ GET a user that does not exist {"userId":"9999"}
  √ GET a user that does not exist {"userId":"0"}
  ...
OK  | 23 passed   // 8s
```

