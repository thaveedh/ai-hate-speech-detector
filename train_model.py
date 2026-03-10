import pandas as pd
import pickle

from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

# Load dataset
data = pd.read_csv("dataset.csv")
print(data.columns)

# Change column names if your dataset uses different names
X = data['tweet']
y = data['class']      # hate speech label

# Convert text to numbers using TF-IDF
vectorizer = TfidfVectorizer(stop_words='english')

X_vec = vectorizer.fit_transform(X)

# Split dataset (80% train / 20% test)
X_train, X_test, y_train, y_test = train_test_split(X_vec, y, test_size=0.2, random_state=42)

# Train model
model = LogisticRegression()
model.fit(X_train, y_train)

# Test accuracy
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)

print("Model Accuracy:", accuracy)

# Save model
pickle.dump(model, open("model.pkl", "wb"))
pickle.dump(vectorizer, open("vectorizer.pkl", "wb"))

print("Model saved as model.pkl")
print("Vectorizer saved as vectorizer.pkl")