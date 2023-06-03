package de.handinhand.backend.business.model;

public record TaskClient(TaskGender gender, String name,
                         TaskAdress adress, String phoneNumber) {

}
