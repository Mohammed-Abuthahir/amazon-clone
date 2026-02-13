package com.example.amazonbackend.model;

import jakarta.persistence.*; // This imports Id, GeneratedValue, Entity, etc.
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Table(name = "products")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class products {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private Double price;
    private Double rating;
    private String reviews;
    private String image;
}