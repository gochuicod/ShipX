# ShipX – Shipment Tracking Platform

ShipX is a **React-based shipment tracking platform** designed to visualize shipment progress, statuses, and milestones in a clear and user-friendly way. The project focuses on **clean architecture, scalable UI logic, and real-world logistics workflows**.

This repository serves as a **coding demo** showcasing frontend engineering skills such as component design, state management, data normalization, and internationalization.

---

## 🚚 Problem Statement

Shipment tracking data from logistics providers is often:

* Inconsistent in status naming
* Hard to understand for end users
* Poorly visualized

ShipX solves this by:

* Normalizing shipment statuses
* Mapping backend data into meaningful UI steps
* Displaying progress visually using steppers and progress bars

---

## ✨ Key Features

* **Shipment Status Normalization** – Converts raw backend statuses into UI-friendly steps
* **Visual Progress Tracking** – Stepper and progress bar for quick shipment understanding
* **Accordion-based Details View** – Clean presentation of shipment history and metadata
* **Internationalization (i18n)** – Built with `react-i18next` for multilingual support
* **Reusable & Modular Components** – Easy to extend and maintain
* **Graceful Error Handling** – Handles missing or invalid shipment data

---

## 🧱 Tech Stack

* **React**
* **TypeScript / JavaScript**
* **Material Tailwind UI**
* **react-i18next** (Internationalization)
* **Tailwind CSS**

---

## 📁 Project Structure (Simplified)

```
src/
 ├─ components/
 │   ├─ ShipmentTracker
 │   ├─ Stepper
 │   ├─ ProgressBar
 │   └─ StatusMap
 ├─ hooks/
 ├─ i18n/
 └─ utils/
```

### Architecture Highlights

* **UI components are kept presentation-focused**
* **Business logic (status mapping, progress calculation) is isolated**
* **Translation strings are never hardcoded**

---

## 🧠 Key Design Decisions

### 1. Status Mapping Layer

Backend shipment statuses are normalized through a mapping layer before reaching the UI.

**Why?**

* Prevents UI breakage from backend changes
* Makes adding new statuses trivial
* Keeps components clean and predictable

---

### 2. Isolated Progress Calculation

Shipment progress is computed using a dedicated helper function.

**Why?**

* Avoids duplicated logic across components
* Improves testability
* Keeps UI components "dumb"

---

### 3. Built-in Internationalization

The app uses `react-i18next` from the start.

**Why?**

* Supports global users
* Improves scalability
* Reflects real-world production needs

---

## 🧪 Example Use Case

1. User enters a tracking number
2. Shipment data is fetched
3. Raw statuses are normalized
4. Progress and steps are calculated
5. UI updates visually with shipment progress

---

## 🔮 Future Improvements

* Add unit tests for status mapping and progress calculation
* Backend API schema validation
* Caching shipment responses
* Server-side rendering or pre-rendering for SEO
* Role-based views for shippers vs customers

---

## 🎯 Why This Project Matters

This project demonstrates:

* Real-world problem solving
* Clean separation of concerns
* Scalable frontend architecture
* Production-oriented design decisions

It is intended as a **portfolio and technical demonstration project**.

---

## 👨‍💻 Author

**Darelle Gochuico**
Junior Full‑Stack Web Developer
GitHub: [https://github.com/gochuicod](https://github.com/gochuicod)

---

If you’re reviewing this as part of a technical interview or code review, feedback is very welcome.
