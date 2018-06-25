package com.loginBackend.login.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.loginBackend.login.dao.LoginCredentialsRepository;

@Service
public class LoginService {
	@Autowired
	LoginCredentialsRepository loginCredentialsRepo;

	public boolean verifyUser(String userid, String password) {
//		loginCredentialsRepo.findById(userid);
//		System.out.println(loginCredentialsRepo.findById(userid).isPresent());
		if (loginCredentialsRepo.findById(userid).isPresent()) {
			return true;
		}
		return false;
	}
}
