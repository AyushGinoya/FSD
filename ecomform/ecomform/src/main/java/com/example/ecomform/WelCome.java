package com.example.ecomform;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import java.util.Map;

@Controller
public class WelCome {
    @RequestMapping("/welcome")
    public String welcome1() {
        return "welcome";
    }

    @PostMapping("/home1")
    public ModelAndView showUser(
            @RequestParam("userName") String username,
            @RequestParam("userNumber") String usernumber) {

        ModelAndView modelAndView = new ModelAndView("home1");
        modelAndView.addObject("user", String.format("User name : %s , contact : %s", username, usernumber));

        return modelAndView;
    }

    @RequestMapping("/welcome2")
    public String welcome2() {
        return "welcome2";
    }

    @PostMapping("/home2")
    public ModelAndView showUser(@RequestParam Map<String, String> reqMap) {
        ModelAndView modelAndView = new ModelAndView("home2");
        modelAndView.addObject("user2", String.format("User : %s , User Id: %s", reqMap.get("userName"), reqMap.get("userId")));

        return modelAndView;
    }

    @RequestMapping("/welcome3")
    public String welcome3() {
        return "welcome3";
    }

    @PostMapping("/home3")
    public ModelAndView showUser(@ModelAttribute User user) {
        ModelAndView modelAndView = new ModelAndView("home3");
        modelAndView.addObject("message", "Register Successfully");

        return modelAndView;
    }
}