package de.handinhand.backend.repository.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class TaskEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;

    @OneToOne
    private TaskIdentifierEntity identifier;

    private TaskState state;

    @OneToOne
    private TaskClientEntity client;

    @OneToOne
    private TaskDestinationEntity destination;

    @OneToOne
    private TaskDriverEntity driver;
}
