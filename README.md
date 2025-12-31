# PIITO
This is a complete, production-ready full-stack application for territorial intelligence and electoral analysis. It is designed for political strategists, analysts, and operators with no technical background. The platform provides aggregated electoral analytics, interactive maps, simulation tools, and operational tracking.
Features
Authentication & Roles: Secure login with role-based access (admin, analyst, operator).
Territorial Structure Management: Manage communes, neighborhoods, polling places, and tables.
Electoral Database Management: Handle aggregated electoral data.
Electoral Analytics Engine: Generate aggregated insights and charts.
Interactive Maps: Layers for territories, polling places, and tables using Leaflet.
Simulation Engine: What-if scenarios for electoral outcomes.
Mobilization & Operations Tracking: Track events and status.
Executive Dashboards: Clean, synchronized dashboards with maps and charts.
Admin Panel & Audit Logs: Manage users, roles, and log all sensitive actions.
All data is aggregated; no individual-level information is stored or used.

Tech Stack
Frontend: React + Vite + TailwindCSS
Backend: Node.js + Express
Database: PostgreSQL
ORM: Prisma
Maps: Leaflet
Charts: Recharts
Auth: JWT + RBAC
Infrastructure: Docker + Docker Compose

Prerequisites
Docker and Docker Compose installed on your machine.
No coding experience required.
Quick Start
Clone or Download the Project:

Download the project files and extract them into a folder named piito.
Navigate to the Project Folder:

Open a terminal (Command Prompt on Windows) and go to the piito folder:

- cd path/to/piito

Run the Application:

Execute the following command to start all services:
- docker-compose up --build

This will build and start the database, backend, and frontend.
Access the Application:

Open your web browser and go to http://localhost:3000 for the frontend.
The backend API is available at http://localhost:3001.

Initial Setup:

The database will be initialized automatically.
Default admin user: email admin@piito.com, password admin123 (change this immediately in production).
Log in and start using the platform.
Step-by-Step for Non-Developers
Install Docker:

Download and install Docker Desktop from docker.com.
Download the Project:

This response contains all the code. Create the folder structure as described and copy the code into the respective files.

Run Docker Compose:

In the terminal, run docker-compose up --build.
Wait for the build to complete (it may take a few minutes the first time).
Use the Platform:

Register or log in.
Explore the sidebar menu to navigate modules.
Upload aggregated data via the admin panel.
View maps, charts, and run simulations.
Troubleshooting
If ports 3000, 3001, or 5432 are in use, stop other applications using them.
For database issues, check Docker logs: docker-compose logs db.
If the frontend doesn't load, ensure the backend is running.
Change JWT_SECRET in docker-compose.yml for security.












