package com.example.amazonbackend.repository;

import com.example.amazonbackend.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<CartItem, Long> {

}
