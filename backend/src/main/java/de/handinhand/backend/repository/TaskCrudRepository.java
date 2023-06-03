package de.handinhand.backend.repository;

import de.handinhand.backend.repository.model.TaskEntity;
import org.springframework.data.repository.CrudRepository;

public interface TaskCrudRepository extends CrudRepository<TaskEntity, Long> {

}
