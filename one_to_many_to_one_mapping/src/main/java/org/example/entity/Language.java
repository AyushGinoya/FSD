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
public class Language {
    @Id
    private int id;
    @Column(name = "lan_name")
    private String name;
    @OneToMany(mappedBy = "language",cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Student> students;
}