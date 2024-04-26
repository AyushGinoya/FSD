package org.example.config.bean;

import org.springframework.stereotype.Component;

@Component
public class BTechStudent implements Student{
    @Override
    public String getStudentCurrentStatus() {
        return this+" is studying in 6th Sem";
    }
}
