package artur.controller;

import java.io.InputStream;

import javax.validation.constraints.NotNull;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.core.MediaType;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@ComponentScan("artur.controller")
@SpringBootApplication
public class Hello {
		

	
	@RequestMapping("/")
	String home() {
		return "ok";
	}

	@RequestMapping("/hello")
	@POST
	@Consumes(MediaType.APPLICATION_OCTET_STREAM)
	@NotNull
	String process(InputStream file) {
		return "";
	}
		
	@GET
	@RequestMapping("/goodBy")
	String populateFinTable(InputStream file) {
		return "OK";
	}

	public static void main(String[] args) throws Exception {
		SpringApplication.run(Hello.class, args);
	}
}