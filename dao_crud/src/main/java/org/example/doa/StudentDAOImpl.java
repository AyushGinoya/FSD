package org.example.doa;

import org.example.entity.Student;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

import java.util.List;
import java.util.Queue;

public class StudentDAOImpl implements StudentDAO{

    private final SessionFactory sessionFactory;

    public StudentDAOImpl(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    @Override
    public void saveStudent(Student student) {
        try (Session session = sessionFactory.openSession()){
            Transaction transaction = session.beginTransaction();
            session.persist(student);
            transaction.commit();
        }
    }

    @Override
    public List<Student> getAllStudent() {
       try(Session session = sessionFactory.openSession()){
           Query<Student>  studentQuery = session.createQuery("FROM Student ", Student.class);
           return studentQuery.list();
       }
    }

    @Override
    public Student getStudentById(Long id) {
        try(Session session = sessionFactory.openSession()){
            return session.get(Student.class,id);
        }
    }

    @Override
    public void updateStudent(Student student) {
        try(Session session = sessionFactory.openSession()) {
            Transaction transaction = session.beginTransaction();
            Student student1 = session.get(Student.class,student.getId());
            student1.setName(student.getName());
            transaction.commit();
        }
    }

    @Override
    public void delete(Long id) {
        try(Session session = sessionFactory.openSession()) {
            Transaction transaction = session.beginTransaction();
            Student student = session.get(Student.class,id);
            if(student!=null){
                session.remove(student);
            }
            transaction.commit();
        }
    }
}
