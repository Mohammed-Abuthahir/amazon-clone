package com.example.amazonbackend.repository;

import com.example.amazonbackend.model.products;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<products, Long> {

}
