package de.handinhand.backend.business;

import de.handinhand.backend.business.model.Task;
import de.handinhand.backend.repository.TaskRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class TaskService {

    private final TaskRepository repository;

    public void save(Task task) {
        repository.saveTask(null);
    }



}
