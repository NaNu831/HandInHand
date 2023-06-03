package de.handinhand.backend.business.model;

public record Task (TaskIdentifier identifier, TaskState state,
                    TaskClient client, TaskDestination destination,
                    TaskDriver driver) {

}
