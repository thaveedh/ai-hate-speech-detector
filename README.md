# 🛡️ SafeSpace AI: Next-Gen Multilingual Content Moderator
### *Real-time Toxicity Detection through Deep Neural Context*

<p align="left">
  <img src="https://img.shields.io/badge/Backend-FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" />
  <img src="https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/AI-XLM--RoBERTa-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black" />
  <img src="https://img.shields.io/badge/Auth-Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" />
</p>

---

## 📺 Project Demo
<div align="center">
  <a href="https://drive.google.com/file/d/1dRbjyFR2BxVKvfIrwXONOSaAvLTS2Bg-/view?usp=sharing">
    <img src="https://img.shields.io/badge/▶_WATCH_DEMO_VIDEO-SafeSpace_AI-red?style=for-the-badge&logo=google-drive&logoColor=white" alt="SafeSpace AI Demo" width="300" height="60">
  </a>
  <br />
  <p><i>Click the button above to watch the AI in action (Redirects to Google Drive)</i></p>
</div>

---

## 📝 Project Overview

**SafeSpace AI** is a sophisticated, full-stack moderation engine that moves beyond simple keyword filtering to understand **Human Intent**. Built with a focus on modern web security and Indian regional languages, it identifies toxicity across English, Hindi, Tamil, and complex transliterated slangs (Hinglish/Tanglish).

---

## 🧠 The AI Core: Deep Learning & Transformers

Unlike traditional moderators that use "if-else" keyword lists, SafeSpace AI utilizes a **Transformer-Based NLP** architecture to evaluate the semantic weight of every comment.

### 🧬 Neural Network Architecture
*   **Contextual Self-Attention:** Powered by **XLM-RoBERTa**, the model understands the relationship between words in a sentence. It can detect a threat even if no "bad words" are used.
*   **Deep Layer Inference:** Input text passes through **12+ hidden layers** of a Neural Network to calculate toxic probability scores based on semantic patterns.
*   **Vector Space Mapping:** Multilingual comments are mapped into a high-dimensional vector space. Toxic intent in Tamil (e.g., *முட்டாள்*) is mathematically recognized as similar to toxic intent in English (*Fool*).
*   **Transfer Learning:** Implemented via the HuggingFace pipeline, utilizing a model pre-trained on **2.5TB of multilingual data**.

---

## 🚀 Key Features

### 🌍 Intelligent Multilingual Detection
*   **Native & Transliterated Support:** Detects hate in native scripts (முட்டாள், बेवकूफ) and common transliterated slangs (poda, chutiya, otha).
*   **Semantic Thresholding:** Configurable sensitivity (optimized at 0.60) to differentiate between casual slang and harmful attacks.

### 🚔 Real-Time Enforcement Protocol
*   **Emergency Siren Alert:** A high-volume, 5-second acoustic deterrent triggers instantly upon detection to discourage toxic behavior.
*   **Persistent Strike System:** A 5-life "Heart" meter tracks user violations across sessions using NoSQL persistence.
*   **Automated Lockdown:** Upon reaching 0 lives, the system initiates an immediate account logout and security lockout.

### 🔄 Active Learning Moderation Dashboard
*   **Human-in-the-Loop:** Admins review a live "Activity Feed" to verify flagged content.
*   **Instant Learning:** Marking a comment as "Hate" updates the **Blocked Memory**, allowing the AI to "learn" new slangs instantly without retraining.
*   **Privacy-First:** Safe-marked comments are completely purged from the database upon verification.

---

## 🛠️ Tech Stack

| Component | Technology |
| :--- | :--- |
| **Frontend** | React.js, Tailwind CSS (Glassmorphism), Lucide Icons |
| **Backend** | Python 3.10+, FastAPI, Uvicorn |
| **AI / Deep Learning** | PyTorch, HuggingFace Transformers, XLM-RoBERTa |
| **Authentication** | Firebase Auth (Google OAuth 2.0) |
| **Database** | TinyDB (Lightweight NoSQL) |

---

## ⚙️ Quick Start (Run Both Backend & Frontend)

```bash
# --- 1. BACKEND SETUP ---
cd backend
# Install Deep Learning and Server dependencies
pip install fastapi uvicorn transformers torch tinydb fastapi-cors sentencepiece tiktoken
# Start the AI Server
python main.py

# --- 2. FRONTEND SETUP ---
# Open a new terminal tab and run:
cd frontend
# Install UI, Auth, and Animation dependencies
npm install
# Start the React development server
npm run dev
