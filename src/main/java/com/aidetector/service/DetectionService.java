package com.aidetector.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class DetectionService {

    public String detect(String text) {

        RestTemplate restTemplate = new RestTemplate();

        String url = "http://127.0.0.1:8000/predict?text=" + text;

        String response = restTemplate.postForObject(url, null, String.class);

        return response;
    }
}