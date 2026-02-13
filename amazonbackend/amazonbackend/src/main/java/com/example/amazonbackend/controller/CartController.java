package com.example.amazonbackend.controller;

import com.example.amazonbackend.model.CartItem;
import com.example.amazonbackend.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")

public class CartController {

    @Autowired
    private CartRepository cartRepository;

    @GetMapping
    public List<CartItem> getCartItems() {
        return cartRepository.findAll();
    }

    @PostMapping("/add")
    public CartItem addToCart(@RequestBody CartItem item) {
        return cartRepository.save(item);
    }

    @DeleteMapping("/remove/{id}")
    public void removeFromCart(@PathVariable Long id) {
        cartRepository.deleteById(id);
    }
}