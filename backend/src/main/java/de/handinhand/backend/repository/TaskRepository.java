package de.handinhand.backend.repository;

import de.handinhand.backend.repository.model.TaskEntity;
import org.springframework.stereotype.Repository;

@Repository
public class TaskRepository  {

    private TaskCrudRepository repository;

    public void saveTask(TaskEntity task) {
        repository.save(task);
    }
}
