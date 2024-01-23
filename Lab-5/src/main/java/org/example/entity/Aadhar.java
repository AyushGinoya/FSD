package org.example.entity;

import jakarta.persistence.*;

@Entity
public class Aadhar {
    @Id
    long aadhar_no;
    @Column(name =  "phone_no")
    long phone_no;
    @OneToOne(cascade = CascadeType.ALL,mappedBy = "aadhar")
    Person person;

    public long getAadhar_no() {
        return aadhar_no;
    }

    public void setAadhar_no(long aadhar_no) {
        this.aadhar_no = aadhar_no;
    }

    public long getPhone_no() {
        return phone_no;
    }

    public void setPhone_no(long phone_no) {
        this.phone_no = phone_no;
    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }
}