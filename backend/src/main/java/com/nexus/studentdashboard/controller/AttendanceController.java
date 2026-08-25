package com.nexus.studentdashboard.controller;

import com.nexus.studentdashboard.dto.AttendanceResponse;
import com.nexus.studentdashboard.model.Attendance;
import com.nexus.studentdashboard.repository.AttendanceRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/attendance")
public class AttendanceController {

    private final AttendanceRepository attendanceRepository;

    public AttendanceController(AttendanceRepository attendanceRepository) {
        this.attendanceRepository = attendanceRepository;
    }

    @GetMapping("/{studentId}")
    public AttendanceResponse getAttendance(@PathVariable Integer studentId) {
        List<Attendance> rows = attendanceRepository.findByStudentId(studentId);

        List<AttendanceResponse.SubjectRow> subjects = rows.stream()
                .map(AttendanceResponse.SubjectRow::new)
                .collect(Collectors.toList());

        // No monthly history in the schema yet — see the note in AttendanceResponse.
        return new AttendanceResponse(Collections.emptyList(), subjects);
    }
}
