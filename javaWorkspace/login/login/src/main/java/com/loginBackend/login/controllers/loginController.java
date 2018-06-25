package com.loginBackend.login.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.loginBackend.login.services.LoginService;

@RestController
@RequestMapping("/api")
public class loginController {
	@Autowired
	LoginService loginService;
	
	 @RequestMapping(value = "/login/{userid}/{password}", method = RequestMethod.GET)
	 public boolean verifyUser(@PathVariable("userid") String userid,@PathVariable("password")  String password) {
	     
		 return  loginService.verifyUser(userid, password);
	 }
	 
	 @RequestMapping(value = "/newUser/{userid}/{password}", method = RequestMethod.POST)
	 public boolean createNewUser(@PathVariable("userid") String userid,@PathVariable("password")  String password) {
	     
		 return  loginService.verifyUser(userid, password);
	 }
	 
}
