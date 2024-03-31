package org.example.doa;

import org.example.entity.Student;

import java.util.List;

public interface StudentDAO {
    void saveStudent(Student student);

    List<Student> getAllStudent();

    Student getStudentById(Long id);

    void updateStudent(Student student);

    void delete(Long id);
}
