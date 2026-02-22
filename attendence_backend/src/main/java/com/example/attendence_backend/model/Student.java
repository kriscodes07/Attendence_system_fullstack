package com.example.attendence_backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "student")
public class Student {

    @Id
    private String id;

    private int rollno;
    private String name;
    private String section;
    private String branch;

    public Student(){}

    public Student(int rollno,String name,String section,String branch){
        this.rollno=rollno;
        this.name=name;
        this.section=section;
        this.branch=branch;
    }

    public int getRollno(){ return rollno;}
    public String getName(){ return name;}
    public String getSection(){ return section;}
    public String getBranch(){ return branch;}
}