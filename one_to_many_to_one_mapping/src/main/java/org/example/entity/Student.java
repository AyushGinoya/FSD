package org.example.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Student {
    @Id
    private int id;
    @Column(name = "st_name")
    private String name;
    @ManyToOne(cascade = CascadeType.ALL)
    private Language language;
}