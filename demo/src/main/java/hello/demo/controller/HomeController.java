package hello.demo.controller;

import hello.demo.service.MemberService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/spring")
public class HomeController {

    @GetMapping("/")
    public String home(){
        return "home";
    }

}
