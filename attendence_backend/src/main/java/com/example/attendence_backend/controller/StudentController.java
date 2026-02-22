package com.example.attendence_backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.attendence_backend.model.Student;
import com.example.attendence_backend.repository.StudentRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;


@CrossOrigin
@RestController
@RequestMapping("/students")
public class StudentController {
    

    private final StudentRepository repository;

    public StudentController(StudentRepository repository){
        this.repository=repository;
    }



    @GetMapping()
    public List<Student> getallstudents(){
        return repository.findAll();
    }

     @PostMapping
    public Student addStudent(@RequestBody Student s){
        return repository.save(s);
    }
    
}
