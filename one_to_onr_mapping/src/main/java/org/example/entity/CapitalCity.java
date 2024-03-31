package org.example.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CapitalCity {
    @Id
    private Long id;
    @Column(name = "city_name")
    private String name;
    @OneToOne
    private Country country;
}
