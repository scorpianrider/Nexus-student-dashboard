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
   @GetMapping("/{studentId}")
public AttendanceResponse getAttendance(@PathVariable Integer studentId) {
    List<Attendance> rows = attendanceRepository.findByStudentId(studentId);

    List<AttendanceResponse.SubjectRow> subjects = rows.stream()
            .map(AttendanceResponse.SubjectRow::new)
            .collect(Collectors.toList());

    List<AttendanceResponse.MonthPoint> overview = List.of(
            new AttendanceResponse.MonthPoint("Feb", 82),
            new AttendanceResponse.MonthPoint("Mar", 85),
            new AttendanceResponse.MonthPoint("Apr", 79),
            new AttendanceResponse.MonthPoint("May", 88),
            new AttendanceResponse.MonthPoint("Jun", 90),
            new AttendanceResponse.MonthPoint("Jul", 87)
    );

    return new AttendanceResponse(overview, subjects);
}
}
