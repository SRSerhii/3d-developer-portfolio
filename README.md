<div align="center">
  <br />

  <h3 align="center">A Multilingual 3D Developer Portfolio</h3>

</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🚙 [Quick Start](#quick-start)

## 🚨 Tutorial


## <a name="introduction">🤖 Introduction</a>

This is SEO optimized multilingual 3d developer portfolio with GTM integration for analytics. This website autodetects user's browser language and shows the version for the detected language if it's supported.


## <a name="tech-stack">⚙️ Tech Stack</a>

- React.js
- Three.js
- React Three Fiber
- React Three Drei
- Email JS
- Vite
- Tailwind CSS
- i18n


## <a name="features">🔋 Features</a>

👉 **Customizable 3D objects**: Includes a 3D desktop model and earth model easily customizable to suit specific needs.

👉 **3D Stars**: Generate stars progressively at random positions using Three.js for background display.

👉 **Responsive Design**: Supports design and functionality across all devices.

👉 **Multilingual**: Currently available in 2 languages: English and Ukrainian.

and others including sitemap generation for SEO optimization.


## <a name="quick-start">🚙 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**1. Download the project and open it or clone the repository**

```bash
git clone https://github.com/SRSerhii/3d-developer-portfolio.git
cd 3d-developer-portfolio
```

**2. Installation**

Install the project dependencies using npm:

```bash
npm install
```
or if you get an error then run command below:

```bash
npm install --legacy-peer-deps
```

**3. Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_MY_EMAIL=your_email
VITE_MY_WORK_EMAIL=your_work_email
VITE_MY_TELEGRAM=your_telegram_link
VITE_GTM_ID=your_gtm_id
VITE_TAWK_TO_SRC=your_tawk_to_link


You can obtain EmailJS credentials by signing up for free on the [EmailJS website](https://www.emailjs.com/).

You can obtain GTM id by signing up for free on the [Google Tag Manager website](https://tagmanager.google.com/).

You can obtain Tawk.to link by signing up for free on the [Tawk.to website](https://www.tawk.to/).


**4. Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.
