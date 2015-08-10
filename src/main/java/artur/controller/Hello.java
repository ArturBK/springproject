package artur.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.boot.SpringApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.RequestMapping;
 
@Controller
public class Hello {
 
	
    @RequestMapping(value = "/hello")
    public String hello(
		Model model,
		@CookieValue(value = "abc", defaultValue = "") String abc,  HttpServletRequest request){
		try {

    		model.addAttribute("qwerty", "qwerty");
 
        } catch (Exception e) {
            e.printStackTrace();
        }
		return "hello/hello123";
    }
    
	public static void main(String[] args) throws Exception {
		SpringApplication.run(Hello.class, args);
	}
 
}

