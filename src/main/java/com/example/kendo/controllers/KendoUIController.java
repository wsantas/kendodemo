package com.example.kendo.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by wms0802 on 6/9/17.
 */
@RestController
public class KendoUIController {

    @RequestMapping("/loadContent")
    public String loadContent() {
        return "Greetings from Spring Boot!";
    }

}
