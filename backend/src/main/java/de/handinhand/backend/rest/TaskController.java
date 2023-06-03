package de.handinhand.backend.rest;

import de.handinhand.backend.business.TaskService;
import de.handinhand.backend.business.model.Task;
import de.handinhand.backend.rest.mapper.TaskMapper;
import de.handinhand.backend.rest.model.TaskDTO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@AllArgsConstructor
@RequestMapping(value = "/tasks")
public class TaskController {

    private final TaskService service;
    private final TaskMapper mapper;

    @PostMapping
    void newTask(@RequestBody TaskDTO newTask) {
        Task task = mapper.taskDTOToTask(newTask);
        service.save(task);
    }

}
