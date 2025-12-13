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

---

## 3. Artifact Overview – Inventory Management System

- **Original Course:** CS 360 – Mobile Architecture and Programming  
- **Original Form:** Android mobile app with SQLite backend and role-based inventory management  
- **Enhanced Form:** Full-stack Node.js/Express/Handlebars web app with MongoDB and REST APIs  
- **Repo Link:** [GitHub Repository](https://github.com/vygonzalezlopez/CS-360-Mobile-Architecture-Programming.git)
  
  The original Inventory Management System was developed during CS 360 – Mobile Architecture and Programming as an Android application built in Android Studio. The application was designed to manage organizational inventory using a role-based access control model, supporting three distinct user roles: System Administrator, Inventory Clerk, and Warehouse Associate. Each role was granted different levels of access and functionality, such as managing inventory records, adjusting quantities, or viewing inventory data. The application used a local SQLite database for data persistence and followed structured validation and authentication logic to ensure proper access and data integrity within the mobile environment.

  This artifact was selected for enhancement because it provided a strong foundation for demonstrating growth across multiple areas of computer science. Transforming the original mobile application into a full-stack web-based system required re-architecting the solution using modern software engineering principles. The enhanced version now leverages a Node.js and Express backend, Handlebars for server-side rendering, MongoDB for data persistence, and RESTful APIs to support authentication and inventory management. This transformation showcases my ability to plan, design, and implement scalable systems while maintaining role-based security, structured data handling, and clean separation of concerns.

  By evolving this application from a standalone mobile solution into a database-driven, full-stack platform, the artifact demonstrates proficiency in software design, backend development, database integration, and security-conscious system architecture. It serves as a comprehensive representation of my ability to take an existing system, evaluate its limitations, and enhance it into a more robust, maintainable, and enterprise-aligned solution.

---

## 4. Code Review Video

Short description of what’s in the video:
> This informal code review walks through the original CS-360 inventory app, identifies areas for improvement in software design, algorithms, and data handling, and outlines the enhancement plan executed in this capstone.

- **Video Link:** [Watch Code Review](https://www.youtube.com/playlist?list=PLBZlxNACkNPJbpW099KRJm9iqlLvW59gq)

---

## 5. Enhancement 1 – Software Design & Engineering

### 5.1 Description of Enhancement
  This enhancement focused on redesigning the original Android-based inventory application into a full-stack web application using Node.js, Express, and Handlebars while applying modern software engineering principles. The application was restructured using an MVC architecture to clearly separate routing, business logic, and presentation layers. A consistent UI was implemented through shared Handlebars layouts and partials for headers, footers, and navigation, along with a dedicated authentication layout for the login experience. Additional features such as a role-aware dashboard interface, dynamic inventory table structure, and modal-based logout confirmation improved usability and maintainability. Overall, this enhancement emphasized clean architecture, modular design, and scalability to better align the application with professional, enterprise-level development standards.

### 5.2 Original vs Enhanced (Software Design & Engineering)
- **Original:** Android app with activities, adapters, and SQLite helpers tightly coupled.
- **Enhanced:** Web MVC separation:
  - `app.js` (Express setup)
  - `app_server/controllers/*.js`
  - `app_server/routes/*.js`
  - `views/layouts/main.hbs`, `partials/header.hbs`, `partials/footer.hbs`
  - `public/css/styles.css`, `public/javascripts/main.js`

### 5.3 Narrative
  The artifact enhanced in this category is the Inventory Management System originally developed for CS-360 as an Android mobile application using Java and SQLite. The original application implemented user authentication, role-based access control, and a basic inventory interface. For the capstone, this project was redesigned as a full-stack web application using Node.js, Express, Handlebars, and an MVC architecture, allowing the system to evolve into a more scalable, maintainable, and industry-aligned solution while preserving its original functionality.

  This artifact was selected because it represents one of the most comprehensive projects completed in the program and clearly demonstrates modern software engineering skills. The enhancement highlights architectural planning, modular design, UI consistency, and clean separation of concerns. Key improvements include the introduction of a structured MVC layout, reusable Handlebars layouts and partials, a redesigned login flow, role-aware dashboard views, centralized controllers, and consistent styling across the application. These changes significantly improved code readability, maintainability, and extensibility compared to the original mobile implementation.

  Reworking this artifact provided valuable insight into the importance of system architecture and reusable component design. Challenges included restructuring the application flow for the web, redesigning the authentication layout, implementing shared UI components, and resolving layout and modal behavior issues. Addressing these challenges reinforced best practices in software design and strengthened problem-solving skills. Overall, this enhancement transformed the project from a classroom prototype into a polished, professional application that reflects meaningful growth as a software engineer and lays a strong foundation for future security and database integrations.

### 5.4 Related Artifacts
- [Link to original artifact](https://github.com/vygonzalezlopez/CS-360-Mobile-Architecture-Programming.git)
- [Link to enhanced code folder](https://github.com/vygonzalezlopez/vygonzalezlopez.github.io/tree/module3_sprint2)

---

## 6. Enhancement 2 – Algorithms and Data Structures

### 6.1 Description of Enhancement
  This enhancement focused on strengthening the application’s authentication logic by introducing structured algorithms for user validation and secure credential handling. A reusable SHA-256 password hashing utility was implemented to ensure passwords are never compared or stored in plain text, and the login workflow was redesigned to follow a clear decision-based flow: validating input, querying for a matching username, hashing the provided password, and comparing hashes to determine access. Additional branching logic was added to handle edge cases such as missing credentials, non-existent users, and incorrect passwords, with explicit error messaging returned to the user. These improvements replaced ad hoc conditional logic with a more deterministic, secure, and maintainable authentication process aligned with real-world software practices.

### 6.2 Original vs Enhanced (Algorithms and Data Structures)
- **Original:**
- Plaintext password handling stored directly in SQL database.
- Minimal conditional logic for authentication
- No structured validation or differentiation between authentication failures
- **Enhanced:**
- SHA-256 password hashing utility
- Compare hashed input vs stored `passwordHash`
- Differentiate:
  - “No account found”
  - “Incorrect password”
- Temporary login dropdown using selected user info

### 6.3 Narrative
This enhancement builds on the Inventory Management System originally developed in CS-360 as an Android application and reimplemented during the capstone as a full-stack Node.js and Handlebars web application. The focus of this milestone was strengthening the system’s authentication logic by introducing structured algorithms for credential handling and validation. During Module Four, the application was enhanced with SHA-256 password hashing, deterministic hash comparison routines, and controlled branching logic to manage login success and failure states. These changes transformed authentication from a basic form submission into a deliberate, algorithm-driven workflow that mirrors real-world system behavior.

The artifact was selected for inclusion because it demonstrates practical algorithmic thinking applied to a core system function. Password hashing, duplicate username detection, and structured account-creation logic required careful consideration of data flow, state management, and error handling. Even while temporarily using JSON-based storage, the system enforces constraints such as input validation, uniqueness checks, and secure credential comparison. These improvements highlight the ability to design algorithms that operate on persistent data, manage conditional execution paths, and preserve system integrity; skills that directly translate to database-backed environments.

Enhancing this portion of the system reinforced how much complexity exists beneath seemingly simple features like login and account creation. A key challenge involved ensuring consistency between in-memory data and persisted records, especially when new users were created dynamically. Working through these issues strengthened my understanding of authentication workflows, hashing pipelines, and edge-case handling, while also preparing the application for its next evolution into a database-driven architecture. Overall, this enhancement demonstrates growth in applying algorithmic principles to real application logic while maintaining a security-conscious design mindset.

### 6.4 Related Artifacts
- [Link to original artifact](https://github.com/vygonzalezlopez/CS-360-Mobile-Architecture-Programming.git)
- [Link to enhanced code folder](https://github.com/vygonzalezlopez/vygonzalezlopez.github.io/tree/module4_sprint2)

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

| Course Outcome | How It’s Demonstrated in This Portfolio |
|----------------|------------------------------------------|
| **1. Collaboration / decision support** | Planning and executing enhancements in phases (sprints), documenting design decisions, and organizing the codebase so it could be easily understood and maintained by a team. |
| **2. Professional communication** | Code review video, written narratives, structured README/ePortfolio layout, and clear inline documentation. |
| **3. Algorithms & data structures** | Password hashing logic, authentication flow, search/filter placeholders, structured handling of user and item data. |
| **4. Software engineering / tools** | Migration to full-stack Node/Express app, MVC structure, Mongoose, REST APIs, use of Git, GitHub, Postman, and Compass. |
| **5. Security mindset** | SHA-256 password hashing, avoiding plaintext-only auth, validation steps, thinking about limiting access to user data APIs, and planning for future hardening. |

---



