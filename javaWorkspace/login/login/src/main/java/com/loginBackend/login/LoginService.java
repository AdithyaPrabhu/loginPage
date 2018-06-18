package com.loginBackend.login;

import org.springframework.stereotype.Service;

@Service
public class LoginService {
	public boolean verifyUser(String userid, String password) {
		if(userid.equals("prabhu.adithya") && password.equals("HelloWorld")) {
			return true;
		}
		return false;
	}
}
