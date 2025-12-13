# CS 499 Computer Science Captstone

Author: Victor Y. Gonzalez Lopez

College: Southern New Hampshire University

Program: B.S. Computer Science

## 1. Professional Self-Assessment
Completing the Computer Science program and developing this ePortfolio has allowed me to clearly articulate and demonstrate the technical depth, leadership skills, and security-focused mindset I have developed throughout my academic and professional career. The coursework reinforced core computer science concepts while providing opportunities to apply them in realistic, hands-on projects. Through the capstone, I was able to consolidate those experiences into a cohesive body of work that reflects not only my technical ability, but also my growth as a problem solver and future leader in cyber and information systems.

Throughout the program, collaboration and communication were emphasized as essential components of successful system design. While many projects were completed individually, they were structured to simulate professional environments where code readability, documentation, and stakeholder awareness are critical. My professional experience in the U.S. Coast Guard further strengthened these skills, as I routinely work with senior leadership, cybersecurity teams, and end users to translate technical requirements into operational solutions. This background influenced how I approached my capstone artifact; prioritizing clarity, maintainability, and decision-support capabilities rather than isolated technical features.

From a technical standpoint, the program reinforced my understanding of data structures and algorithms, software engineering, databases, and security as interconnected disciplines rather than isolated topics. In this capstone, I applied algorithmic principles through authentication logic, password hashing, input validation, and structured data handling. I demonstrated software engineering best practices by designing a modular, MVC-based full-stack application using Node.js, Express, and Handlebars. Database concepts were implemented through MongoDB and Mongoose, including schema design, RESTful APIs, and secure data persistence. Security considerations were integrated throughout the project, reflecting both academic instruction and real-world experience; particularly in protecting credentials, minimizing data exposure, and anticipating misuse or attack vectors.

The artifacts included in this ePortfolio are intentionally connected and build upon one another to demonstrate growth across the Computer Science program. The original inventory application served as a foundation, while each enhancement, software design, algorithms and data structures, and databases, represents a deliberate step toward a production-ready system. Together, they illustrate my ability to evolve a project from a functional prototype into a scalable, secure, and professionally engineered solution. This progression mirrors the type of work required in cyber operations and C5I environments, where systems must be reliable, auditable, and adaptable to mission needs.

Overall, this ePortfolio reflects my readiness to contribute as a computer science professional with a strong emphasis on cybersecurity and systems engineering. Combined with my Coast Guard experience, leadership roles, and certifications such as CISSP, CISM, CISA, and Security+, this work demonstrates both technical competence and the ability to operate effectively in high-stakes, mission-critical environments. The artifacts that follow provide concrete evidence of these skills and serve as a representation of the standards I will continue to uphold as I progress toward commissioning and advanced leadership roles in cyber and information systems.

---

## 2. Navigation
- [Professional Self-Assessment](#1-professional-self-assessment)
- [Artifact Overview](#3-artifact-overview-inventory-management-system)
- [Code Review Video](#4-code-review-video)
- [Enhancement 1 – Software Design & Engineering](#5-enhancement-1-software-design--engineering)
- [Enhancement 2 – Algorithms--data-structures](#6-enhancement-2-algorithms-and-data-structures)
- [Enhancement 3 – Databases](#7-enhancement-3-databases)
- [Course Outcomes Mapping](#8-course-outcomes-mapping)
- [Contact / About Me](#9-contact--about-me)

---

## 3. Artifact Overview – Inventory Management System

- **Original Course:** CS 360 – Mobile Architecture and Programming  
- **Original Form:** Android mobile app with SQLite backend and role-based inventory management  
- **Enhanced Form:** Full-stack Node.js/Express/Handlebars web app with MongoDB and REST APIs  
- **Repo Link:** [GitHub Repository](<your-repo-link-here>)
- **Live Demo (optional):** [GitHub Pages / Render / etc.]

Brief paragraph describing:

- what the inventory app does
- roles (admin, clerk, associate)
- why it’s a strong representation of your skills.

---

## 4. Code Review Video

Short description of what’s in the video:
> This informal code review walks through the original CS-360 inventory app, identifies areas for improvement in software design, algorithms, and data handling, and outlines the enhancement plan executed in this capstone.

- **Video Link:** [Watch Code Review](https://www.youtube.com/playlist?list=PLBZlxNACkNPJbpW099KRJm9iqlLvW59gq)

---

## 5. Enhancement 1 – Software Design & Engineering

### 5.1 Description of Enhancement
[Short summary of what changed: Android → Node/Express app, MVC, Handlebars layout/partials, login page, dashboard UI, logout modal, etc.]

### 5.2 Original vs Enhanced
- **Original:** Android app with activities, adapters, and SQLite helpers tightly coupled.
- **Enhanced:** Web MVC separation:
  - `app.js` (Express setup)
  - `app_server/controllers/*.js`
  - `app_server/routes/*.js`
  - `views/layouts/main.hbs`, `partials/header.hbs`, `partials/footer.hbs`
  - `public/css/styles.css`, `public/javascripts/main.js`

### 5.3 Narrative
[Paste/adapt the Software Engineering narrative we already wrote:
why you chose it, how it improved structure, UX, maintainability, how it shows your skills.]

### 5.4 Related Artifacts
- [Link to original branch/tag or folder](<link>)
- [Link to enhanced code folder](<link>)

---

## 6. Enhancement 2 – Algorithms and Data Structures

### 6.1 Description of Enhancement
[Describe the password hashing, login flow, SHA-256 utility, validation, branch logic, error messages.]

### 6.2 Key Logic Implemented
- SHA-256 password hashing utility
- Compare hashed input vs stored `passwordHash`
- Differentiate:
  - “No account found”
  - “Incorrect password”
- Temporary login dropdown using selected user info

### 6.3 Narrative
[Paste/adapt your Algorithms & DS narrative:
what you implemented, what you learned, challenges (hashing, API responses, error handling).]

### 6.4 Related Files
- `utils/password-hasher.js`
- `app_server/controllers/auth.controller.js`
- `public/javascripts/login.js`

---

## 7. Enhancement 3 – Databases

### 7.1 Description of Enhancement
[Describe JSON → MongoDB migration, schema definitions, APIs, and integration with the UI.]

### 7.2 Database & API Architecture
- MongoDB + Mongoose connection: `app_api/models/db.js`
- User schema & model: `app_api/models/user.js`
- Item schema & model: `app_api/models/item.js`
- Seed scripts: `seedUsers.js`, `seedItems.js`
- REST APIs:
  - `GET /api/users`, `GET /api/users/:username`, `POST /api/users`, etc.
  - `GET /api/items`, `POST /api/items`, etc.

### 7.3 Narrative
[Paste/modify the database narrative we just wrote:
seeding, API testing with Postman, verification in MongoDB Compass, challenges with error handling and result shapes, etc.]

### 7.4 Evidence of Testing
- API tested with **Postman**
- Database verified with **MongoDB Compass**

---

## 8. Course Outcomes Mapping

Simple table that shows your instructor, “Yes, I covered all 5.”

| Course Outcome | How It’s Demonstrated in This Portfolio |
|----------------|------------------------------------------|
| **1. Collaboration / decision support** | Planning and executing enhancements in phases (sprints), documenting design decisions, and organizing the codebase so it could be easily understood and maintained by a team. |
| **2. Professional communication** | Code review video, written narratives, structured README/ePortfolio layout, and clear inline documentation. |
| **3. Algorithms & data structures** | Password hashing logic, authentication flow, search/filter placeholders, structured handling of user and item data. |
| **4. Software engineering / tools** | Migration to full-stack Node/Express app, MVC structure, Mongoose, REST APIs, use of Git, GitHub, Postman, and Compass. |
| **5. Security mindset** | SHA-256 password hashing, avoiding plaintext-only auth, validation steps, thinking about limiting access to user data APIs, and planning for future hardening. |

---

## 9. Contact / About Me

Short, clean block:

- **Name:** Victor Gonzalez  
- **Location:** U.S. Coast Guard – IT / Cyber professional  
- **Focused Areas:** Cybersecurity, C5I systems, full-stack development  
- **GitHub:** `<your GitHub link>`  
- **LinkedIn (if you want):** `<link>`  

---


