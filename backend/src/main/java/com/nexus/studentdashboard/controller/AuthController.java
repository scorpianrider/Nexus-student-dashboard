package com.nexus.studentdashboard.controller;

import com.nexus.studentdashboard.dto.LoginRequest;
import com.nexus.studentdashboard.dto.LoginResponse;
import com.nexus.studentdashboard.model.Student;
import com.nexus.studentdashboard.repository.StudentRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

// Deliberately simple: validates roll number + password directly against
// MySQL and returns the student record. No JWT, no Spring Security, per spec.
@RestController
@RequestMapping
public class AuthController {

    private final StudentRepository studentRepository;

    public AuthController(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        Optional<Student> found = studentRepository.findByRollNumber(request.getRollNumber());

        if (found.isEmpty() || !found.get().getPassword().equals(request.getPassword())) {
            return LoginResponse.fail("Invalid roll number or password.");
        }

        return LoginResponse.ok(found.get());
    }
}
