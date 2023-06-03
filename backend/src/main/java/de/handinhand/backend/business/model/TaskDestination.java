package de.handinhand.backend.business.model;

import java.util.Date;

public record TaskDestination(Date date, String name,
                              TaskAdress adress) {

}
