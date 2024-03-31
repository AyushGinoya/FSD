package org.example;

import org.example.doa.StudentDAOImpl;
import org.example.entity.Student;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        //TIP Press <shortcut actionId="ShowIntentionActions"/> with your caret at the highlighted text
        // to see how IntelliJ IDEA suggests fixing it.
        Configuration configuration = new Configuration().configure();

        SessionFactory sessionFactory = configuration.buildSessionFactory();

        StudentDAOImpl dao = new StudentDAOImpl(sessionFactory);

//        Student student = new Student();
//        student.setName("Shreena");
//        student.setId(10L);
//        System.out.println("Studente added");
//        System.out.println();

//        dao.saveStudent(student);
//        System.out.println("Studente deleted by id");
//        System.out.println();

        System.out.println("Student by id:"+dao.getStudentById(3L));
        System.out.println();

        System.out.println("All Students");
        System.out.println(dao.getAllStudent().toString());
        System.out.println();

        Student student1 =dao.getStudentById(10L);
        if(student1!=null){
            student1.setName("Shree");
            dao.updateStudent(student1);
        }


    }
}