package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface RegisterRepository extends JpaRepository<Register, Long> {
    Optional<Register> findByEmailAndAccessCode(String email, String accessCode);
}
