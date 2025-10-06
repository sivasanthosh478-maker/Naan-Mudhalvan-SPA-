# Single Page Application (SPA) – Naan Mudhalvan Project

### Project Overview
This project demonstrates a **Single Page Application (SPA)** built using **AngularJS**.  
It dynamically loads user data, supports viewing and editing profiles, and updates content without full page reload.

---

### Tools & Technologies
- **Frontend:** HTML5, CSS3, Bootstrap, AngularJS  
- **Data:** Mock JSON file (`users.json`)  
- **Server:** Python HTTP Server  
- **Version Control:** Git & GitHub  
- **Deployment:** Netlify  

---

### Features
- Dashboard displaying all users dynamically.  
- Profile view with detailed user information.  
- Edit Profile page with form validation and live updates.  
- Two-way data binding for instant UI reflection.  
- Responsive design using Bootstrap.  

---

### Architecture
SPA → AngularJS → JSON (Mock Data) → Dynamic View Rendering  

**Routing handled using `ngRoute`:**

--------------------------------------

**Project Folder Structure**
NaanMudhalvan-SPA-/
│
├── SPA-project/
│ ├── index.html
│ ├── app.js
│ ├── services.js
│ ├── css/
│ │ └── styles.css
│ ├── partials/
│ │ ├── dashboard.html
│ │ ├── profile.html
│ │ └── edit.html
│ ├── images/
│ │ ├── placeholder.jpg
│ │ ├── guhan.jpg
│ │ └── siva.jpg
│ └── data/
│ └── users.json
│
└── README.md

---------------------------------------
### How to Run Locally
1. **Clone the repository**
   ```bash
   git clone https://github.com/sivasanthosh478-maker/Naan-Mudhalvan-SPA-.git
2. **Navigate to project**
   cd Naan-Mudhalvan-SPA-/SPA-project
3. **Start local server**
   python -m http.server 8000
4. **Open browser**
   http://localhost:8000
--------------------------------------

### Deployment
Deployed on Netlify
      https://student-userprofiles-spa.netlify.app/

### GitHub Repository
      https://github.com/sivasanthosh478-maker/Naan-Mudhalvan-SPA-
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
