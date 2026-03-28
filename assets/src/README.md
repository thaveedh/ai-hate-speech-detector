🛡️ SafeSpace AI: Next-Gen Multilingual Content Moderator
Powered by SOTA Deep Learning Transformers
![alt text](https://img.shields.io/badge/Backend-FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)

![alt text](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)

![alt text](https://img.shields.io/badge/AI-XLM--RoBERTa-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black)

![alt text](https://img.shields.io/badge/Auth-Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
SafeSpace AI is a sophisticated, real-time moderation engine that moves beyond simple keyword filtering to understand Human Intent. Using Deep Neural Networks, it identifies toxicity across English, Hindi, Tamil, and regional slangs (Hinglish/Tanglish).
🧠 The AI Core: Deep Learning & Transformers
Unlike traditional moderators that use "if-else" keyword lists, SafeSpace AI uses a Deep Learning Transformer Architecture (XLM-RoBERTa).
🧬 Neural Network Architecture
Transformer-Based NLP: Utilizes a multi-layered Transformer model with self-attention mechanisms. This allows the system to understand the relationship between words in a sentence, catching subtle insults that simple filters miss.
Deep Layer Inference: Input text is passed through 12+ hidden layers of a Neural Network, which perform complex mathematical transformations to extract semantic meaning.
Vector Space Mapping: The model maps comments into a high-dimensional Vector Space. Words with similar toxic intent (even in different languages like Tamil and English) are mapped close to each other mathematically, enabling seamless multilingual detection.
Transfer Learning: Leverages a pre-trained model on over 2.5TB of multilingual data, which I implemented via the HuggingFace transformers pipeline for high-performance inference.
🚀 Key Features
🌍 Intelligent Multilingual Detection
Native & Transliterated Support: Detects hate in native scripts (முட்டாள், बेवकूफ) and transliterated slangs (poda, chutiya, otha).
Contextual Awareness: Can distinguish between casual conversation and harmful intent (e.g., understands the difference in context for words like "kill" or "kiss").
🚔 Real-Time Enforcement Protocol
Emergency Siren Alert: Triggers a high-volume, 5-second acoustic deterrent upon detection to discourage toxic behavior.
5-Strike Security System: A persistent "Life Meter" (Hearts) tracks violations.
Automatic Lockdown: Reaching 0 lives triggers an immediate security protocol, locking the terminal and logging the user out.
🔄 Active Learning Moderation Dashboard
Human-in-the-Loop: Admins can verify "Pending" comments in the Activity Feed.
Dynamic Learning: Marking a comment as "Hate" instantly updates the Blocked Memory (NoSQL DB), effectively "training" the system to recognize new slangs without a full model retraining.
History Purge: For privacy, safe comments are completely erased from the system after verification.
🛠️ Tech Stack
Frontend: React.js, Tailwind CSS (Glassmorphism), Lucide Icons, Framer Motion.
Backend: Python, FastAPI, Uvicorn (High-performance ASGI).
AI/ML: PyTorch, HuggingFace Transformers, XLM-RoBERTa.
Auth: Firebase Authentication (Google OAuth 2.0).
Database: TinyDB (JSON-based NoSQL for Learned Memory).
📈 Technical Implementation Details
Debounced Analysis: Implemented a 600ms debounce on text input to optimize API calls to the Deep Learning backend, ensuring 0% lag during the typing experience.
Hybrid Memory Logic: Built a dual-check system where the backend queries the Learned Memory (O(1) lookup) before running the Deep Learning Model, ensuring instant blocking of known slangs.
Auto-Purge Security: Designed an automatic data-cleansing routine that resets user strikes and clears activity logs upon every fresh login.
⚙️ Quick Start
Backend:
code
Bash
cd backend
pip install fastapi uvicorn transformers torch tinydb fastapi-cors
python main.py
Frontend:
code
Bash
cd frontend
npm install && npm run dev
Developed with 💡 by THAVEEDHU V
Passionate about building AI-driven solutions for a safer internet.