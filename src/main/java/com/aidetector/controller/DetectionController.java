package com.aidetector.controller;

import com.aidetector.model.TextRequest;
import com.aidetector.service.DetectionService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class DetectionController {

    @Autowired
    private DetectionService detectionService;

    @PostMapping("/detect")
    public String detect(@RequestBody TextRequest request) {
        return detectionService.detect(request.getText());
    }
}