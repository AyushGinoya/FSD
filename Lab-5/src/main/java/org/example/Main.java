package org.example;
import org.example.entity.Aadhar;
import org.example.entity.Company;
import org.example.entity.Person;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import java.util.ArrayList;
import java.util.List;


public class Main {
    public static void main(String[] args) {
        Configuration configuration = new Configuration();
        configuration.configure();

        SessionFactory sf = configuration.buildSessionFactory();
        Session s = sf.openSession();

        try(s)
        {
            s.beginTransaction();

            //1st
            Person ayush = new Person();
            ayush.setName("Ayush");

            Aadhar a1 = new Aadhar();
            a1.setAadhar_no(1234567890);
            a1.setPhone_no(987654);
            a1.setPerson(ayush);

            ayush.setAadhar(a1);


            //2nd
            Person p = new Person();
            p.setName("Monil");

            Aadhar a2 = new Aadhar();
            a2.setAadhar_no(7654321);
            a2.setPhone_no(9647287);
            a2.setPerson(p);

            p.setAadhar(a2);


            //company
            Company company1 = new Company();
            company1.setName("MN company");

            List<Person> list=new ArrayList<>();
            list.add(ayush);
            list.add(p);

            company1.setPersonList(list);
            p.setCompany(company1);
            ayush.setCompany(company1);

            s.persist(ayush);
            s.persist(p);


            s.getTransaction().commit();
        }
    }
}