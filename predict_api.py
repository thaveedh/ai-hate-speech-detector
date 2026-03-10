from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from transformers import pipeline
import re

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# load AI model
classifier = pipeline("text-classification", model="unitary/toxic-bert")

# keyword filters
hate_keywords = [
    "kill","die","racist","hate","terrorist"
]

offensive_keywords = [
    "idiot","stupid","ugly","dumb","fool"
]


def clean_text(text):
    text = text.lower()
    text = re.sub(r"http\S+", "", text)
    text = re.sub(r"[^a-z\s]", "", text)
    return text


@app.get("/predict")
def predict(text: str):

    cleaned = clean_text(text)

    # ---------- Rule Based Filter ----------
    for word in hate_keywords:
        if word in cleaned:
            return {
                "text": text,
                "prediction": "Hate Speech",
                "confidence": 95
            }

    for word in offensive_keywords:
        if word in cleaned:
            return {
                "text": text,
                "prediction": "Offensive Language",
                "confidence": 90
            }

    # ---------- AI Prediction ----------
    result = classifier(cleaned)[0]

    label = result["label"]
    score = result["score"] * 100

    if "toxic" in label.lower():
        prediction = "Offensive Language"
    else:
        prediction = "Normal Speech"

    # ---------- Confidence Protection ----------
    if score < 65:
        prediction = "Normal Speech"

    return {
        "text": text,
        "prediction": prediction,
        "confidence": round(score,2)
    }