<div align="center">

<img src="img/amaan logo  .png" alt="Aman Logo" width="120" />

# أمان — Aman App

**AI-Powered Pre-Marital Genetic Health Companion**

*Built for DevClash Hackathon 2026*

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Arabic RTL](https://img.shields.io/badge/Language-Arabic%20%2F%20RTL-009900?style=for-the-badge)](https://en.wikipedia.org/wiki/Right-to-left)

</div>

---

## 📖 Project Overview

**Aman (أمان)** is a bilingual Arabic-first mobile web application designed to help individuals and families make informed health decisions before marriage. The app bridges the gap between complex genetic medical reports and everyday users — especially families — by leveraging AI-powered OCR to read and analyze pre-marital health reports automatically.

> *"أمان... قرار صحي يبدأ قبل الزواج"*
> — *"Aman... a healthy decision that begins before marriage"*

The app addresses a critical public health need in the Arab world: hereditary blood diseases (such as Sickle Cell Anemia, Thalassemia, G6PD Deficiency, and Cystic Fibrosis) are highly prevalent in the Gulf region. Aman empowers people with knowledge, without requiring any medical background.

---

## 🎬 Demo

> 📱 Open `index.html` in any modern browser to run the full prototype locally.

**App Flow:**

```
Splash Screen → Login / Register → Home Dashboard
   └── Upload Report (AI Analysis via Tesseract.js OCR)
   └── Analysis Results (AI Risk Summary)
   └── Genetic Library (5 Diseases, Tabbed Detail View)
        └── Educational Stories for Children
        └── Interactive Mini-Games per Disease
   └── Reports History
   └── Health Statistics
   └── Personal Health Profile
```

---

## ✨ Features

### 🔐 Authentication
- Login and Register flows with phone/email support
- Social login buttons (Apple, Google)
- Privacy and genetic data sharing consent at signup

### 🏠 Home Dashboard
- Personalized greeting with user profile avatar
- Health status card with quick report upload CTA
- Health guide tiles: Nutrition, Medical Records, Health Tips
- "Did you know?" rotating info cards
- Data encryption & security badge

### 📤 AI Report Upload & Analysis
- **Drag-and-drop** or click-to-upload medical reports (JPG/PNG/PDF)
- **Tesseract.js OCR** reads the report image automatically — no manual input needed
- Real-time progress indicator with Arabic loading messages
- Smart medical keyword detection to validate authenticity of the report
- Seamless redirect to **AI Analysis Results** screen upon success
- Error feedback for invalid/non-medical files

### 🤖 AI Analysis Results
- Genetic risk level indicator (Low / Medium / High)
- Per-disease status cards (e.g., "Beta Thalassemia — Carrier", "Sickle Cell — 100% Clear")
- "View Details" deep-links to the Genetic Library

### 📚 Genetic Library
5 hereditary diseases covered with full detail tabs:

| Disease | Arabic Name |
|---|---|
| Sickle Cell Anemia | فقر الدم المنجلي |
| Beta Thalassemia | تلاسيميا بيتا |
| Alpha Thalassemia | تلاسيميا ألفا |
| G6PD Deficiency | نقص إنزيم G6PD |
| Cystic Fibrosis | التليف الكيسي |

Each disease includes:
- **Overview** — plain-language explanation
- **Inheritance** — how it's passed down, with visual probability chart (25/25/25/25%)
- **Symptoms** — icon-rich symptom cards
- **Actions** — recommended medical steps

### 📖 Educational Children's Stories
Unique illustrated stories per disease that explain genetics to children in a fun, accessible way:
- 🩸 *"مغامرة كريات الدم الشجاعة"* — Sickle Cell
- 🏭 *"سر مصنع الطاقة الصغير"* — Thalassemia
- 🛡️ *"الدرع السحري وحبات الفول الشقية"* — G6PD
- 👷 *"الأصدقاء الأربعة وفريق البناء"* — Alpha Thalassemia
- 🌳 *"مغامرة هواء الرئتين المنعش"* — Cystic Fibrosis

### 🎮 Interactive Mini-Games (Per Disease)
| Game | Disease | Mechanic |
|---|---|---|
| 💧 Water Drinking Game | Sickle Cell | Tap water to widen the blood vessel |
| ⚡ Energy Charging Game | Thalassemia | Click blood drops to fill the energy bar |
| 🛡️ Magic Shield Challenge | G6PD | Collect apples, avoid fava beans |
| 🔧 Complete the Build | Alpha Thalassemia | Give tools to workers to build the car |
| 💨 Clean the Lungs | Cystic Fibrosis | Tap to blow air and restore the lung |

### 👤 Health Profile
- Personal health info: blood type, height, weight, age range, gender
- Family medical history
- Uploaded report history with lab name and date

### 📊 Statistics & Reports
- Dedicated reports and statistics tabs ready for data integration

---

## 🎨 Figma Design

> 🔗 **[View Figma Design File →](https://www.figma.com/design/YOUR_FIGMA_LINK_HERE)**

*Replace the link above with your actual Figma share URL.*

The Figma file includes:
- Full mobile screen designs (375px width)
- RTL layout (Right-to-Left Arabic)
- Color system, typography (Tajawal font), and component library
- All 10+ screens: Splash, Login, Home, Upload, Analysis, Library, Story, Activity, Reports, Stats, Profile

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5, Semantic RTL Markup |
| Styling | Vanilla CSS3, Custom Animations |
| Logic | Vanilla JavaScript (IIFE pattern, ES6+) |
| OCR / AI | [Tesseract.js v5](https://tesseract.projectnaptha.com/) (in-browser OCR) |
| Fonts | [Tajawal – Google Fonts](https://fonts.google.com/specimen/Tajawal) |
| Icons | [SVGcdn Heroicons](https://files.svgcdn.io/) |
| Data | Local `diseases.json` (structured genetic disease data) |

---

## 📁 Project Structure

```
Aman App/
├── index.html              # Single-page app — all screens
├── css/
│   ├── styles.css          # Core design system & all screen styles
│   └── additions.css       # Supplementary styles
├── js/
│   └── app.js              # Full app logic (navigation, OCR, library, games)
├── data/
│   └── diseases.json       # Structured data for 5 genetic diseases
├── img/
│   ├── amaan logo  .png    # App logo
│   ├── profile.png         # Sample user avatar
│   ├── العائلة.png          # Login illustration
│   ├── red_blood_cells_highway.png  # Story image - Sickle Cell
│   ├── sickle_cell_stuck.png
│   ├── water_slide_cells.png
│   ├── thalassemia_1.png / _2.png
│   ├── g6pd_1.png / g6pd_2.svg
│   ├── alpha_1.svg
│   ├── cf_1.svg / cf_2.svg
│   ├── activity_*.svg      # Game illustrations (5 diseases)
│   ├── DNA.png
│   └── ...                 # Other assets
└── README.md
```

---

## 🚀 Getting Started

No build tools or dependencies needed. Just open the file:

```bash
# Clone or download the project
cd "Aman App"

# Open directly in browser
start index.html    # Windows
open index.html     # macOS
```

Or serve locally for full OCR functionality:

```bash
# Using Python (recommended for file:// fetch restrictions)
python -m http.server 8080

# Then visit:
# http://localhost:8080
```

> **Note:** Tesseract.js OCR requires the app to be accessed via `http://` (not `file://`) for best performance.

---

## 🧬 Diseases Data

The app reads from `data/diseases.json` which contains structured data for each disease:

- `id` — unique identifier (e.g., `"sickle"`, `"thalassemia"`)
- `nameAr` / `nameEn` — Arabic and English names
- `overview` — plain-language overview
- `inheritance` — inheritance mechanism description
- `symptoms` — comma-separated symptoms list
- `actions` — recommended actions list
- `imageUrl` — disease illustration path

---

## 👥 Team

> *Built with ❤️ for DevClash 2026*

| Name | Role |
|---|---|
| [Your Name] | Full-Stack Developer / Designer |
| [Team Member 2] | UI/UX Designer |
| [Team Member 3] | Medical Content Advisor |

---

## 🏆 Hackathon

**Event:** DevClash 2026
**Track:** Health & Wellbeing / Social Impact
**Submitted:** April 2026

---

## 📄 License

This project was created for the DevClash Hackathon and is intended for educational and demo purposes.

---

<div align="center">

*أمان — لأن الصحة أمانة*
**Aman — Because health is a trust.**

</div>
