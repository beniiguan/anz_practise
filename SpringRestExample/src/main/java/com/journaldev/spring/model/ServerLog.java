package com.journaldev.spring.model;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ServerLog implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String server;
	private String logFileName;
	private List<LogDetail> logItems;
	@JsonProperty("Server")
	public String getServer() {
		return server;
	}
	public void setServer(String server) {
		this.server = server;
	}
	@JsonProperty("LogFileName")
	public String getLogFileName() {
		return logFileName;
	}
	public void setLogFileName(String logFileName) {
		this.logFileName = logFileName;
	}
	@JsonProperty("LogItems")
	public List<LogDetail> getLogItems() {
		return logItems;
	}
	public void setLogItems(List<LogDetail> logItems) {
		this.logItems = logItems;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	

}
