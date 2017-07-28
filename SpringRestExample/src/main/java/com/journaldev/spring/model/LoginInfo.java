package com.journaldev.spring.model;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LoginInfo implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 6621398346485617932L;
	private String user;
	private String password;
	private String redirect;
	@JsonProperty("UserId")
	public String getUser() {
		return user;
	}
	public void setUser(String user) {
		this.user = user;
	}
	@JsonProperty("Password")
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRedirect() {
		return redirect;
	}
	public void setRedirect(String redirect) {
		this.redirect = redirect;
	}
	
	
	
	

}
