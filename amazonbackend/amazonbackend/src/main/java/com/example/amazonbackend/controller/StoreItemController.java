package com.example.amazonbackend.controller;

import com.example.amazonbackend.model.StoreItem;
import com.example.amazonbackend.repository.StoreItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/store")
public class StoreItemController {

    @Autowired
    private StoreItemRepository storeItemRepository;

    @GetMapping("/main")
    public List<StoreItem> getMainProducts() {
        return storeItemRepository.findByCategory("main");
    }

    // Optional: Get everything
    @GetMapping("/all")
    public List<StoreItem> getAllItems() {
        return storeItemRepository.findAll();
    }
}