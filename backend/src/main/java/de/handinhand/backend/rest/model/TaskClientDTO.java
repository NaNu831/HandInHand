package de.handinhand.backend.rest.model;

public record TaskClientDTO(TaskGenderDTO gender, String name,
                            TaskAdressDTO adress, String phoneNumber) {

}
