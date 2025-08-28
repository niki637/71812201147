package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Register {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;
    private String name;
    private String mobileNo;
    private String githubUsername;
    private String rollNo;
    private String accessCode;

    // ✅ Default constructor
    public Register() {}

    // ✅ Parameterized constructor
    public Register(String email, String name, String mobileNo, String githubUsername, String rollNo, String accessCode) {
        this.email = email;
        this.name = name;
        this.mobileNo = mobileNo;
        this.githubUsername = githubUsername;
        this.rollNo = rollNo;
        this.accessCode = accessCode;
    }

    // ✅ Getters
    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getName() {
        return name;
    }

    public String getMobileNo() {
        return mobileNo;
    }

    public String getGithubUsername() {
        return githubUsername;
    }

    public String getRollNo() {
        return rollNo;
    }

    public String getAccessCode() {
        return accessCode;
    }

    // ✅ Setters
    public void setEmail(String email) {
        this.email = email;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setMobileNo(String mobileNo) {
        this.mobileNo = mobileNo;
    }

    public void setGithubUsername(String githubUsername) {
        this.githubUsername = githubUsername;
    }

    public void setRollNo(String rollNo) {
        this.rollNo = rollNo;
    }
}