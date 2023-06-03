package de.handinhand.backend.rest.mapper;

import de.handinhand.backend.business.model.Task;
import de.handinhand.backend.rest.model.TaskDTO;
import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface TaskMapper {

    TaskDTO taskToTaskDTO(Task task);

    Task taskDTOToTask(TaskDTO taskDTO);

}
