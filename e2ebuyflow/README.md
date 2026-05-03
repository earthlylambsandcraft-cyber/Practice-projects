# 🛒 Playwright E2E Buyflow Automation

## 📌 Overview

This project demonstrates an **end-to-end (E2E) automation flow** using Playwright.
It simulates a real-world e-commerce purchase on SauceDemo and captures proof of execution.

---

## 🔁 Automated Flow

1. Login with valid credentials
2. Add item to cart
3. Navigate to cart
4. Proceed to checkout
5. Fill out user details
6. Complete order
7. Validate success message
8. Capture screenshot as proof

---

## ⚙️ Key Features

* ✅ Uses **Playwright selectors** (`getByRole`, `getByPlaceholder`)
* 🧠 Structured with `try/catch/finally` for error handling
* 📸 **Dynamic timestamp screenshots**
* 🧾 Stores execution proof (`success` / `error`)
* 🧹 Clean and reusable automation logic

---

## 📸 Output Example

Screenshots are saved automatically:

```text
Snapshots/
├── order_success_04-26-26_14-32-10.png
├── error_04-26-26_14-35-02.png
```

---

## ▶️ How to Run

```bash
npm install
node playwright.js
```

---

## 🛠 Tech Stack

* Playwright
* Node.js
* JavaScript

---

## 🎯 Purpose

This project demonstrates:

* Real-world automation flow
* UI interaction strategies
* Reliable test execution with proof artifacts

---

## 🚀 Future Enhancements

* Integrate with **n8n**
* Send Slack notifications after execution
* Email screenshot reports
* CI/CD pipeline integration

---

## 💡 Notes

* Test site used: https://www.saucedemo.com
* Designed for learning and automation practice
