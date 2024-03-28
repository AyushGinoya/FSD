package org.example;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;
import org.example.entity.Student;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        //TIP Press <shortcut actionId="ShowIntentionActions"/> with your caret at the highlighted text
        // to see how IntelliJ IDEA suggests fixing it.
        EntityManagerFactory factory = Persistence.createEntityManagerFactory("jpademo");
        EntityManager manager = factory.createEntityManager();


//        try{
//            manager.getTransaction().begin();
//
//            Student raj = new Student();
//            raj.setName("raj");
//            raj.setId(3L);
//
//            manager.persist(raj);
//
//            manager.getTransaction().commit();
//        }finally {
//            manager.close();
//        }

        Configuration config = new Configuration().configure();

        SessionFactory sessionFactory = config.buildSessionFactory();
        Session session = sessionFactory.openSession();

        try{
            session.beginTransaction();

            Student sahil = new Student();
            sahil.setId(4L);
            sahil.setName("sahil");

            session.persist(sahil);

            session.getTransaction().commit();
        }finally {
            sessionFactory.close();
            session.close();
        }
    }
}