package de.handinhand.backend.repository.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class TaskClientEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;

    private TaskGender gender;

    private String name;

    @OneToOne
    private TaskAdressEntity adress;

    private String phoneNumber;

}
