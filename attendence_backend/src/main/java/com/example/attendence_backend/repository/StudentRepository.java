package com.example.attendence_backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.attendence_backend.model.Student;

public interface StudentRepository extends MongoRepository<Student,String>{
    
}
