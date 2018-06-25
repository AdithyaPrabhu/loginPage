package com.loginBackend.login.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.loginBackend.login.model.LoginCredentials;

public interface LoginCredentialsRepository extends JpaRepository<LoginCredentials, String> {

}
