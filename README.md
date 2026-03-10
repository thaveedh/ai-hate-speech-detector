# AI Hate Speech Detection Platform

An AI-powered web application that detects hate speech and offensive language in real time using a **BERT-based NLP model** with a **React frontend** and **FastAPI backend**.

---

## 🚀 Overview

This project simulates a **social media moderation system** capable of detecting harmful or toxic text automatically.
The application analyzes user input and classifies it into:

* Normal Speech
* Offensive Language
* Hate Speech

The prediction is returned with a **confidence score** and displayed in a modern web interface.

---

## 🧠 Features

* Real-time hate speech detection
* Transformer-based NLP model (BERT)
* Confidence score visualization
* React-based interactive frontend
* FastAPI backend for AI inference
* REST API communication
* Scalable architecture for moderation systems

---

## 🏗️ System Architecture

```
React Frontend
      ↓
REST API (Axios)
      ↓
FastAPI Backend
      ↓
BERT NLP Model
      ↓
Prediction + Confidence Score
```

---

## 🛠️ Tech Stack

### Frontend

* React
* Axios
* Tailwind CSS
* Vite

### Backend

* FastAPI
* Python
* Uvicorn

### AI / NLP

* Transformers
* Toxic BERT Model
* PyTorch

---

## 📂 Project Structure

```
ai-hate-speech-detector
│
├── backend
│   └── predict_api.py
│
├── frontend-react
│   ├── src
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/thaveedh/ai-hate-speech-detector.git
cd ai-hate-speech-detector
```

---

### 2️⃣ Install backend dependencies

```bash
pip install fastapi uvicorn transformers torch
```

Run the backend server:

```bash
uvicorn predict_api:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

---

### 3️⃣ Install frontend dependencies

```bash
cd frontend-react
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 🧪 Example API Request

```
GET /predict?text=you%20stupid%20idiot
```

Response:

```json
{
 "prediction": "Offensive Language",
 "confidence": 94
}
```

---

## 📊 Use Cases

This system can be used for:

* Social media moderation
* Online community management
* Comment filtering systems
* Gaming chat moderation
* Content monitoring platforms

---

## 🔮 Future Improvements

Possible upgrades:

* Multilingual hate speech detection
* Voice-based toxicity detection
* Moderation analytics dashboard
* User reporting system
* Database logging for moderation history

---

## 👨‍💻 Author

**Thaveedh**

GitHub:
https://github.com/thaveedh

---
