package lab4.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Map;

@Controller
public class FrontController{

    @GetMapping("/main")
    public String main(Map<String, Object> model) {
        return "/index.html";
    }

    @GetMapping("/error")
    public String errors(Map<String, Object> model) {
        return "/index.html";
    }
}
