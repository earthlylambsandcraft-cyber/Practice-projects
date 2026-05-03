# 🧪 Playwright Automation Suite

Hi — this repository showcases my hands-on work in **end-to-end automation using Playwright (Node.js)**.

I focus on building **real-world automation flows**, not just scripts — simulating how users interact with systems and generating **proof of execution** (screenshots, validations, and structured flows).

---

## 🚀 Projects

### 🔹 1. E2E Buyflow Automation (SauceDemo)

Simulates a real e-commerce purchase from start to finish.

**Flow:**
Login → Add to Cart → Checkout → Submit Order

**Highlights:**

* Uses Playwright selectors (`getByRole`, `getByPlaceholder`)
* Structured with `try/catch/finally`
* 📸 Captures **timestamped screenshots as execution proof**
* Demonstrates validation of critical business flows

---

### 🔹 2. Google Form Automation

Automates a full form submission workflow.

**Highlights:**

* Handles dynamic form inputs
* Interacts with UI elements reliably
* Validates successful submission
* Represents real-world **data entry automation scenarios**

---

### 🔹 3. NopCommerce Exhaustive Testing (POM-Based)

A scalable automation framework built using the **Page Object Model (POM)**.

**Structure:**

* `pages/` → reusable page classes (base, shop, cart, order, etc.)
* `tests/` → organized test cases (happy, negative, edge)
* `utils/`, `fixtures/` → reusable logic & data
* `snapshots/` → execution proof

**Highlights:**

* Modular and scalable architecture
* Separation of concerns (POM)
* Designed for **large-scale automation systems**
* Ready for CI/CD and integrations

---

### 🔹 4. Demoblaze Exhaustive Testing (Playwright Test + POM)

A **complete QA-style automation suite** simulating a real e-commerce system using structured test strategies.

**Test Strategy:**

* ✅ `@happy` → full successful buyflow
* ❌ `@negative` → validation and failure scenarios
* ⚠️ `@edge` → boundary and unusual inputs
* 🐞 `@bug` → identified system weaknesses

**Coverage:**

* Dynamic product selection (randomized)
* Add to cart + cart validation
* Order placement flow
* Dialog/alert validation handling
* Input validation testing (missing fields, invalid data)

**Highlights:**

* Uses **Playwright Test runner** with tagging system
* Organized test folders:

  * `tests/happy`
  * `tests/negative`
  * `tests/edge`
* Reusable setup flows for consistency
* Strong assertions (not just logs)
* Detects real-world bugs (e.g. invalid card accepted)

**Example Commands:**

```bash
npx playwright test -g "@happy"
npx playwright test -g "@negative"
npx playwright test -g "@edge"
```

---

## 🛠 Tech Stack

* Playwright
* Playwright Test Runner
* Node.js
* JavaScript (ES6)
* Git & GitHub

---

## 🎯 What This Repository Demonstrates

* Real-world automation flows (not just scripts)
* Clean and maintainable code structure
* Execution validation (assertions, logs, flows)
* Scalable automation architecture (POM)
* Structured QA strategy (happy / negative / edge testing)
* Test filtering using tags

---

## 🔮 Future Enhancements

* HTML reports + trace viewer
* Slack notifications (via n8n)
* Email reporting with attachments
* CI/CD integration (automated test runs)
* Parallel execution optimization

---

## 💡 Why This Matters

These projects are designed to reflect how automation works in real environments:

* validating user flows
* handling failures gracefully
* producing clear, reviewable outputs
* identifying real system issues (not just passing tests)

---

## 👨‍💻 Author

Automation portfolio focused on building **practical, real-world QA and workflow automation systems**.
