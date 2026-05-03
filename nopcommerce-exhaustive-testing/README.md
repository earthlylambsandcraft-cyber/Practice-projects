
# 🧪 NopCommerce Exhaustive Testing (Playwright)

## 📌 Overview

This project demonstrates an **end-to-end (E2E) automation framework** using **Playwright (Node.js)**.

It simulates a real-world **e-commerce buyflow** on the NopCommerce demo site and is structured using the **Page Object Model (POM)** for scalability and maintainability.

---

## 🧱 Project Structure

```
nopcommerce-exhaustive-testing/
│
├── pages/
│   ├── base/            # Base reusable page (navigation, waits, screenshots)
│   ├── components/      # Shared UI components (navbar, etc.)
│   ├── shop/            # Shop-related pages (home, product)
│   ├── cart/            # Cart functionality
│   ├── order/           # Checkout & order flow
│   └── auth/            # Login / registration (future)
│
├── tests/
│   ├── happy/           # Positive test cases
│   ├── negative/        # Error scenarios
│   └── edge/            # Edge cases
│
├── fixtures/            # Test data (future use)
├── utils/               # Helper functions (future use)
├── snapshots/           # Screenshots for proof of execution
│
├── .gitignore
└── README.md
```

---

## 🚀 Features

* ✅ Page Object Model (POM) architecture
* ✅ Reusable BasePage (navigation, waits, screenshots)
* ✅ Organized test layers (happy / negative / edge)
* ✅ Dynamic waits with timeout handling
* ✅ Execution proof via screenshots

---

## ▶️ How to Run

### 1. Install dependencies

```bash
npm install
```

### 2. Run test

```bash
node tests/happy/buyflow.spec.js
```

---

## 🔧 Tech Stack

* Playwright
* Node.js
* JavaScript (ES6)

---

## 🎯 Goal of this Project

To simulate **real-world QA automation practices**, including:

* Structured test design
* Scalable architecture
* Reliable execution strategies
* Integration-ready workflows (Slack, email, etc.)

---

## 📌 Future Improvements

* [ ] Add full checkout flow
* [ ] Add login & user scenarios
* [ ] Integrate Slack / Email notifications (n8n)
* [ ] Convert to Playwright Test Runner (`npx playwright test`)
* [ ] Add CI/CD pipeline

---

## 👨‍💻 Author

Automation practice project for portfolio and skill development.
=======
# 🧪 Project Overview

Hi — this repository is a collection of my hands-on work in **end-to-end automation using Playwright (Node.js)**.

I focus on building **real-world automation flows**, not just scripts — simulating how users interact with systems and generating **proof of execution** (like screenshots and validations).

---

## 🚀 Featured Projects

### 🔹 Google Form Automation

Automates a full form submission flow using Playwright.

**What it demonstrates:**

* Handling dynamic input fields
* Interacting with form elements reliably
* Validating successful submission

👉 This project reflects how I approach **UI automation for data entry workflows**

---

### 🔹 E2E Buyflow Automation (SauceDemo)

Simulates a real e-commerce purchase from start to finish.

**Flow:**
Login → Add to Cart → Checkout → Submit Order

**What it demonstrates:**

* Clean selector strategy using `getByRole`
* Structured error handling (`try/catch/finally`)
* 📸 Capturing **timestamped screenshots as execution proof**
* Writing automation that is **readable and maintainable**

👉 This mirrors how real QA automation validates **critical business flows**

---

## 🛠 Tech Stack

* Playwright (Automation Framework)
* Node.js
* JavaScript
* Git & GitHub

---

## 🎯 What I’m Working Toward

I’m currently focused on building automation that goes beyond testing:

* Connecting Playwright scripts to **real workflows**
* Generating **artifacts (screenshots, logs)**
* Integrating with tools like:

  * n8n
  * Slack
  * Email systems

👉 Goal: move toward **end-to-end automation pipelines**, not just test scripts

---

## 🔮 Next Steps

* Send execution results to Slack (via n8n)
* Email reports with attached screenshots
* Explore CI/CD integration for automated runs

---

## 💡 Why This Matters

These projects are built to reflect how automation works in real environments:

* validating user flows
* handling failures gracefully
* producing clear, reviewable outputs

---

If you're reviewing this as part of an application, feel free to explore each project folder for implementation details.
>>>>>>> b37e4d74f3bd4527e8d3053f5e7a4940cd35174b
