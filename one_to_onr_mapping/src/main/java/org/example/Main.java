package org.example;

import org.example.entity.CapitalCity;
import org.example.entity.Country;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        //TIP Press <shortcut actionId="ShowIntentionActions"/> with your caret at the highlighted text
        // to see how IntelliJ IDEA suggests fixing it.
        Configuration configuration = new Configuration().configure();

        SessionFactory factory = configuration.buildSessionFactory();

        Session session = factory.openSession();
        Transaction transaction = session.beginTransaction();

        Country india = new Country();
        india.setId(1L);
        india.setName("india");

        CapitalCity delhi = new CapitalCity();
        delhi.setId(1L);
        delhi.setName("delhi");

        delhi.setCountry(india);
        india.setCapitalCity(delhi);

        session.persist(india);
        session.persist(delhi);

        Country afghanistan = new Country();
        afghanistan.setId(2L);
        afghanistan.setName("afghanistan");

        CapitalCity kabul = new CapitalCity();
        kabul.setId(2L);
        kabul.setName("kabul");

        afghanistan.setCapitalCity(kabul);
        kabul.setCountry(afghanistan);

        session.persist(afghanistan);
        session.persist(kabul);


        transaction.commit();
    }
}