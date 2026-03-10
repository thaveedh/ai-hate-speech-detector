package com.aidetector.model;

public class PredictionResult {

    private String category;
    private double confidence;

    public PredictionResult(String category, double confidence) {

        this.category = category;
        this.confidence = confidence;

    }

    public String getCategory() {

        return category;

    }

    public double getConfidence() {

        return confidence;

    }
}