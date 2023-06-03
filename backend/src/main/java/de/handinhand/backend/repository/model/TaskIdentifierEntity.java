package de.handinhand.backend.repository.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class TaskIdentifierEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;

    private int sequence;

    private int year;

}
