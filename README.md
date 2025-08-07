# 🌐 Pankaj Kumar Vishvakaram - Portfolio Website

🎯 **Front-End Web & Android App Developer**  
📍 Based in New Delhi, India  
📱 Published 10+ Android Apps | 🌍 Deployed 25+ Web Apps | 🚀 10000+ Downloads

---

## ✨ Live Preview

🔗https://github.com/Pankajkmr17/Pankaj_portfolio


---

## 📌 Overview

This is a **premium-designed, animated personal portfolio website** to showcase:

- Technical Skills
- Project Highlights
- Development Workflow
- Interactive Stats
- Contact Information
- Resume Download

Made using modern frontend techniques, smooth animations, and responsive layouts.

---

## 🚀 Features

- ✅ Fully responsive across devices
- ✅ Scroll-triggered animations
- ✅ Animated statistics counter
- ✅ Tooltips, progress bars, and custom cards
- ✅ Professional project section
- ✅ Resume download & contact buttons

---

## 🛠️ Tech Stack

| HTML5 | CSS3 | JavaScript |
|-------|------|------------|
| ✅ Semantic HTML | ✅ Modern CSS Styling | ✅ DOM Animations |
| ✅ CSS Grid & Flexbox | ✅ Media Queries | ✅ `requestAnimationFrame` |

---

## 🧠 How It Works

The portfolio includes animated stat counters like:

```js
function updateCount() {
  const current = +statNum.textContent;
  if (current < target) {
    statNum.textContent = Math.ceil(current + increment);
    requestAnimationFrame(updateCount);
  } else {
    statNum.textContent = target;
  }
}
