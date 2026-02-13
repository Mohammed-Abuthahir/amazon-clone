package com.example.amazonbackend.repository;

import com.example.amazonbackend.model.StoreItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StoreItemRepository extends JpaRepository<StoreItem, Long> {
    // Custom method to fetch items by category (e.g., 'main')
    List<StoreItem> findByCategory(String category);
}