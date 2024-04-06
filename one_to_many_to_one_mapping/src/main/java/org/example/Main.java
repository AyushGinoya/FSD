package org.example;

import org.example.entity.Language;
import org.example.entity.Student;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Configuration config = new Configuration().configure();
        SessionFactory factory = config.buildSessionFactory();
        Session session = factory.openSession();

        Transaction transaction = session.beginTransaction();

        Language dart = new Language();
        dart.setId(1);
        dart.setName("dart");

        Language java = new Language();
        java.setId(2);
        java.setName("java");

        Language xml = new Language();
        xml.setId(3);
        xml.setName("xml");

        session.persist(dart);
        session.persist(java);
        session.persist(xml);

        Student ayush = new Student();
        ayush.setId(11);
        ayush.setName("ayush");
        ayush.setLanguage(dart);

        Student ayushi = new Student();
        ayushi.setId(22);
        ayushi.setName("ayushi");
        ayushi.setLanguage(dart);

        Student mk = new Student();
        mk.setId(33);
        mk.setName("mk");
        mk.setLanguage(java);

        session.persist(ayush);
        session.persist(ayushi);
        session.persist(mk);

        dart.setStudents(new ArrayList<>(List.of(ayush, ayushi)));
        java.setStudents(new ArrayList<>(List.of(mk)));
        xml.setStudents(new ArrayList<>());

        // Merge the Language entities to update the database
        session.merge(dart);
        session.merge(java);
        session.merge(xml);

        transaction.commit();
        session.close();
    }
}
