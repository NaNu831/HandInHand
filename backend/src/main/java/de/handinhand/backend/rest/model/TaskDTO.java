package de.handinhand.backend.rest.model;

public record TaskDTO(TaskIdentifierDTO identifier,
                      TaskStateDTO state,
                      TaskClientDTO client,
                      TaskDestinationDTO destination,
                      TaskDriverDTO driver) {

}
