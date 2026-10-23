# 🏗️ Lemma | Senior Structural Engineer Portfolio & CMS

[![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.1-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-5.11-2D3748?logo=prisma&logoColor=white)](https://www.prisma.io/)
[![License](https://img.shields.io/badge/License-MIT-D4AF37.svg)](LICENSE)

> **A high-end, production-ready structural engineering portfolio and administrative Content Management System (CMS) featuring dark blueprint aesthetics, interactive FEA visualizers, filterable project case studies, and complete client consultation management.**

---

## 🏛️ About This Platform

Designed for **licensed Professional Engineers (PE, SE)**, architects, and engineering consultants, this full-stack platform bridges computational civil/structural engineering with a state-of-the-art web experience.

Visitors can explore multi-stage case studies with finite element modeling notes, download ASCE/IBC technical reference guides, review peer recommendations, and request stamped structural calculation packages. 

The custom CMS administration suite allows full control over projects, services, insights, testimonials, consultation inquiries, and video hero media with zero code modifications.

---

## ✨ Key Architectural Highlights

### 🎨 1. Public Engineering Visitor Portal
- **Dark Blueprint Visual Identity**: Deep charcoal palette (`#121417`, `#181A1E`) accented with metallic gold (`#D4AF37`), blueprint grid backgrounds, and ambient aurora glows.
- **Dynamic Structural Canvas**: Interactive particle and node-link physics simulation representing space frame connections.
- **Project Case Studies Engine**: Filter by category (*Commercial High-Rise*, *Infrastructure & Bridges*, *Special Structures*, *Seismic Retrofit*) with multi-step narrative breakdown (*Challenge → Approach & FEA → Solution → Quantified Result*).
- **Interactive Publications & Whitepapers**: Real-time category pills and instant text search across structural research notes.
- **Client Reference Library**: Downloadable engineering calculators, checklists, and code compliance reference summaries.
- **Client Endorsements & FAQ**: Role-filtered testimonials (Architects, Developers, Authorities) and expandable client FAQs.
- **Consultation Gateway**: Direct consultation request form with status tracking and backend persistence.

### ⚡ 2. Admin CMS Operations Suite
- **Responsive Navigation Drawer**: Fixed mobile topbar with hamburger toggle and backdrop drawer, fully responsive across all screen viewports.
- **Bento Card / Table View Toggles**: Manage case studies with thumbnail previews, status tags, and quick-action modals.
- **Consultation Inquiries CRM**: Inquiries pipeline with status tags (`NEW`, `IN_REVIEW`, `RESPONDED`), 1-click email copy, and message viewer.
- **Hero Video & Visual Reel Center**: 1-click preset selector for curated high-rise/bridge reels and live auto-looping video monitor.
- **SEO & Identity Manager**: Instant Google Search result snippet preview for meta titles and descriptions.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend UI** | React 18, Vite, Vanilla CSS + Tailwind CSS, Framer Motion, Lucide React |
| **Backend API** | Node.js, Express, RESTful Architecture, Multer (File Uploads) |
| **Database & ORM** | Prisma ORM, SQLite (Local Dev) / PostgreSQL (Production Ready) |
| **Security & Auth** | JSON Web Tokens (JWT), bcrypt password hashing, input sanitization |

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v18.x or later)
- npm or yarn

### 1. Installation
Clone the repository and install all dependencies:
```bash
git clone https://github.com/kenenisabeyan/Lemma.git
cd Lemma
npm run postinstall
```

### 2. Database Setup & Seeding
Push the database schema and seed initial structural engineering data:
```bash
cd backend
npx prisma db push
npx prisma db seed
cd ..
```

### 3. Launch Development Servers
Run both backend API and frontend Vite dev servers concurrently:
```bash
npm run dev
```

- **Visitor Web Portal**: [http://localhost:5173](http://localhost:5173)
- **Backend API Server**: [http://localhost:5000](http://localhost:5000)

---

## 🔐 Default Admin CMS Credentials

To test the administrative control center:
1. Navigate to: `http://localhost:5173/admin/login`
2. Click **"Quick Fill Demo Admin Credentials"** or enter:
   - **Email**: `admin@engineering.com`
   - **Password**: `AdminPassword123!`

---

## 📄 License

This project is licensed under the MIT License.