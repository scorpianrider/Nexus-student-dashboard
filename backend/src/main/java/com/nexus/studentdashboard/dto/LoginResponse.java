package com.nexus.studentdashboard.dto;

import com.nexus.studentdashboard.model.Student;

public class LoginResponse {
    private boolean success;
    private String message;
    private Student student;

    public static LoginResponse ok(Student student) {
        LoginResponse res = new LoginResponse();
        res.success = true;
        res.student = student;
        return res;
    }

    public static LoginResponse fail(String message) {
        LoginResponse res = new LoginResponse();
        res.success = false;
        res.message = message;
        return res;
    }

    public boolean isSuccess() { return success; }
    public String getMessage() { return message; }
    public Student getStudent() { return student; }
}
