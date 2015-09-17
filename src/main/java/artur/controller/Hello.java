package artur.controller;

import java.io.InputStream;

import javax.validation.constraints.NotNull;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.core.MediaType;

import org.springframework.boot.SpringApplication;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.concurrent.ConcurrentMapCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import artur.resource.Greeting;

@Controller
@EnableCaching
public class Hello {
		
	private static final String TEMPLATE = "Hello, %s!";

    @RequestMapping("/greeting")
    @ResponseBody
    @Cacheable("greeting")
    public HttpEntity<Greeting> greeting(
            @RequestParam(value = "name", required = false, defaultValue = "World") String name) {

        Greeting greeting = new Greeting(String.format(TEMPLATE, name));
        greeting.add(linkTo(methodOn(Hello.class).greeting(name)).withSelfRel());

        return new ResponseEntity<Greeting>(greeting, HttpStatus.OK);
    }
    
    @Bean
    public CacheManager cacheManager() {
        return new ConcurrentMapCacheManager("greeting");
    }
    
    
    
	@RequestMapping("/")
	String home() {
		return "ok";
	}

	@RequestMapping("/hello")
	@POST
	@Consumes(MediaType.APPLICATION_OCTET_STREAM)
	@NotNull
	String hello(InputStream file) {
		return "";
	}
		
	@GET
	@RequestMapping("/goodBy")
	String goodby(InputStream file) {
		return "OK";
	}
	
	@PUT
	@RequestMapping("/putStufs")
	String putStufs(InputStream file) {
		return "OK";
	}

	public static void main(String[] args) throws Exception {
		SpringApplication.run(Hello.class, args);
	}
}