package de.handinhand.backend.repository.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
public class TaskDestinationEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;

    private Date date;

    private String name;

    @OneToOne
    private TaskAdressEntity adress;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

}
