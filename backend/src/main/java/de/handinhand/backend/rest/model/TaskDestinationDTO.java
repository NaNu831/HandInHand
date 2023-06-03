package de.handinhand.backend.rest.model;

import java.util.Date;

public record TaskDestinationDTO(Date date, String name,
                                 TaskAdressDTO adress) {

}
