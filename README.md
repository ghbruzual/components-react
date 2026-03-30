# 🚀 React Component Collection

A modular collection of interactive components developed with **React + Vite**, focusing on scalability, complex state management, and Frontend architecture best practices.

## 🕹️ Featured Components

### 1. Counter (Smart Counter)
A component that manages multiple arithmetic operations through a **Master Action Handler**.
* **Centralized Logic:** A single function to process increments, resets, and random values.
* **State Safety:** Implementation of the functional update pattern (`prev => prev + n`) to ensure state integrity.

### 2. Pokémon Filter (Data Management)
A dynamic search engine that consumes a Pokémon catalog and allows filtering by type.
* **Data Cleaning:** Use of `Set` and `flatMap` to automatically generate a list of unique types directly from the JSON source.
* **Efficient Filtering:** Logic executed during render to avoid redundant states and ensure a **unidirectional data flow**.

---

## 📋 Development Roadmap

| Component | Technical Description | Status |
| :--- | :--- | :--- |
| **[Counter](./src/Counter.jsx)** | Master Handler and functional state updates. | ✅ Completed |
| **[Filter](./src/Filter.jsx)** | Duplicate removal with `Set` and dynamic filtering. | ✅ Completed |
| **Inventory & Cart** | **Controlled forms**, data validation, and complex array management (CRUD). | ⏳ In Progress |

---

## 🛠️ Tech Stack
* **Core:** React 18
* **Build Tool:** Vite
* **Version Control:** Git via SSH
* **Styling:** Modern CSS (Grid & Flexbox) with responsive design using `clamp()`.

---

## ⚙️ Installation and Setup

1. Clone the repository via SSH:
   ```bash
   git clone git@github.com:ghbruzual/components-react.git
