# 🧪 Demoblaze Exhaustive Testing (Playwright)

## 📌 Overview

This project demonstrates a **real-world end-to-end (E2E) automation framework** using **Playwright Test (Node.js)**.

It simulates a full **e-commerce buyflow** on the Demoblaze demo site and includes:

* ✅ Happy path (successful purchase)
* ❌ Negative testing (validation errors)
* ⚠️ Edge case testing (unexpected inputs)

The project follows the **Page Object Model (POM)** for scalability and maintainability.

---

## 🧱 Project Structure

```
Demoblaze-exhaustive-testing/
│
├── pages/
│   ├── base/
│   ├── components/
│   ├── shop/
│   │   ├── home.page.js
│   │   └── product.page.js
│   ├── cart/
│   │   └── cart.page.js
│   └── order/
│       └── order.page.js
│
├── tests/
│   ├── happy/
│   │   └── happy.spec.js
│   ├── negative/
│   │   └── order-empty.spec.js
│   └── edge/
│       └── edge.spec.js
│
├── package.json
└── README.md
```

---

## 🚀 Tech Stack

* **Playwright Test**
* **JavaScript (Node.js)**
* **Page Object Model (POM)**

---

## ▶️ How to Run Tests

### Run all tests

```
npx playwright test
```

### Run with browser (headed mode)

```
npx playwright test --headed
```

---

## 🎯 Run by Tags

This project uses **tag-based filtering** for flexible execution.

### Run Happy Path

```
npx playwright test -g "@happy"
```

### Run Negative Tests

```
npx playwright test -g "@negative"
```

### Run Edge Cases

```
npx playwright test -g "@edge"
```

### Run Known Bugs

```
npx playwright test -g "@bug"
```

---

## 🧪 Test Coverage

### ✅ Happy Path (`@happy`)

* Full buyflow:

  * Open homepage
  * Select product (randomized)
  * Add to cart
  * Verify cart
  * Place order
  * Validate success

---

### ❌ Negative Tests (`@negative`)

* Submit empty order form
  ✔ Expected: Alert shown
  ✔ Assertion: Purchase should NOT succeed

---

### ⚠️ Edge Cases (`@edge`)

* Only name filled → validation triggered
* Invalid card input → ⚠️ system accepts (BUG)
* Very long input → accepted
* Special characters → accepted

---

## 🐞 Known Issues

| Scenario            | Issue                                           |
| ------------------- | ----------------------------------------------- |
| Invalid card number | System allows non-numeric input (no validation) |

---

## 🧠 Key Features

* 🔁 **Reusable setup flow** for test consistency
* 🎯 **Dynamic product selection** (randomized testing)
* 🧩 **Page Object Model (POM)** structure
* 🏷️ **Tag-based execution** (`@happy`, `@negative`, `@edge`, `@bug`)
* 🔔 **Dialog handling** (alerts validation)
* ✅ **Real assertions** (not just logs)

---

## 📈 What This Demonstrates

This project showcases:

* End-to-end automation design
* Test structuring like a real QA project
* Handling dynamic UI behavior
* Writing meaningful assertions
* Identifying real system bugs

---

## 💡 Future Improvements

* 📊 HTML reports & trace viewer
* ⚡ Parallel execution
* 🔄 CI/CD integration
* 📸 Screenshots on failure
* 🧪 API + UI combined testing

---

## 👤 Author

Built as part of a **Playwright + QA Automation learning project**.
