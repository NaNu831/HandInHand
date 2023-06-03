package de.handinhand.backend.business.mapper;

import de.handinhand.backend.business.model.Task;
import de.handinhand.backend.repository.model.TaskEntity;
import org.mapstruct.Mapper;

@Mapper
public interface TaskMapper {

    TaskEntity taskToTaskEntity(Task task);

    Task taskEntityToTask(TaskEntity taskEntity);

}
