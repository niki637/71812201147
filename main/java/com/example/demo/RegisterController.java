package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/register")
public class RegisterController {

    @Autowired
    private RegisterRepository repo;

    // Add a new user
    @PostMapping("/add")
    public String addUser(@RequestBody Register user) {
        repo.save(user);
        return "User registered successfully!";
    }

    // Login user
    @PostMapping("/login")
    public String loginUser(@RequestBody Register user) {
        Optional<Register> foundUser = repo.findByEmailAndAccessCode(user.getEmail(), user.getAccessCode());

        if (foundUser.isPresent()) {
            return "Login successful! Welcome " + foundUser.get().getName();
        } else {
            return "Invalid email or access code";
        }
    }

    @GetMapping
    public List<Register> getAllUsers() {
        return repo.findAll();
    }
}
