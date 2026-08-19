package com.nexus.studentdashboard.controller;

import com.nexus.studentdashboard.dto.ResultsResponse;
import com.nexus.studentdashboard.model.Result;
import com.nexus.studentdashboard.model.Student;
import com.nexus.studentdashboard.repository.ResultRepository;
import com.nexus.studentdashboard.repository.StudentRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/results")
public class ResultsController {

    private final ResultRepository resultRepository;
    private final StudentRepository studentRepository;

    public ResultsController(ResultRepository resultRepository, StudentRepository studentRepository) {
        this.resultRepository = resultRepository;
        this.studentRepository = studentRepository;
    }

    @GetMapping("/{studentId}")
    public ResponseEntity<ResultsResponse> getResults(@PathVariable Integer studentId) {
        List<Result> rows = resultRepository.findByStudentId(studentId);

        return studentRepository.findById(studentId)
                .map(student -> {
                    Double semesterGpa = rows.isEmpty() ? null : rows.get(0).getSemesterGpa();
                    return ResponseEntity.ok(new ResultsResponse(semesterGpa, student.getCgpa(), rows));
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
