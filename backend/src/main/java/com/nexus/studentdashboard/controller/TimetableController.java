package com.nexus.studentdashboard.controller;

import com.nexus.studentdashboard.dto.TimetableSession;
import com.nexus.studentdashboard.model.TimetableEntry;
import com.nexus.studentdashboard.repository.TimetableRepository;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/timetable")
public class TimetableController {

    private static final List<String> DAY_ORDER =
            List.of("Monday", "Tuesday", "Wednesday", "Thursday", "Friday");

    private final TimetableRepository timetableRepository;

    public TimetableController(TimetableRepository timetableRepository) {
        this.timetableRepository = timetableRepository;
    }

    // Returns { Monday: [{time, subject, room}, ...], Tuesday: [...], ... }
    // matching the shape the React Timetable page expects.
    @GetMapping("/{studentId}")
    public Map<String, List<TimetableSession>> getTimetable(@PathVariable Integer studentId) {
        List<TimetableEntry> entries = timetableRepository.findByStudentId(studentId);

        Map<String, List<TimetableSession>> byDay = new LinkedHashMap<>();
        for (String day : DAY_ORDER) {
            List<TimetableSession> sessions = entries.stream()
                    .filter(e -> day.equals(e.getDayOfWeek()))
                    .map(TimetableSession::new)
                    .collect(Collectors.toList());
            byDay.put(day, sessions);
        }
        return byDay;
    }
}
