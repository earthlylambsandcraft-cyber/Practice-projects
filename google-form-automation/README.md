#  Playwright-google-form-automation

##  Overview

This project demonstrates basic web automation using **Playwright (Node.js)**.

It automates a form submission flow, including:

* Filling input fields dynamically
* Selecting options
* Submitting the form
* Capturing a screenshot as proof

---

##  Tech Stack

* Node.js (Portable setup)
* Playwright
* JavaScript

---

##  How to Run

### 1. Install dependencies

```bash
npm install
npx playwright install
```

### 2. Run the script

```bash
node playwright.js
```

---

## 📸 Sample Output

After execution, a screenshot is saved:

```
/submissions/submission.png
```

---

##  Key Learnings

* Handling dynamic elements with Playwright
* Using selectors (`getByLabel`, `getByText`, `getByRole`)
* Managing waits and visibility issues
* Automating form workflows end-to-end

---

##  Notes

* This project uses a local/portable Node.js setup
* `.gitignore` excludes unnecessary files like:

  * node_modules
  * test results
  * environment files

---

##  Future Improvements

* Convert script into structured test cases
* Add Playwright Test Runner
* Implement CI/CD (GitHub Actions)
* Parameterize inputs (env / CLI)

---

##  Author

GitHub: https://github.com/earthlylambsandcraft-cyber
