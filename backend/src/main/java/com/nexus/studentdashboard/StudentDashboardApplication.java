package com.nexus.studentdashboard;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// CORS is configured properly in config/WebConfig.java, not here.
@SpringBootApplication
public class StudentDashboardApplication {
    public static void main(String[] args) {
        SpringApplication.run(StudentDashboardApplication.class, args);
    }
}
