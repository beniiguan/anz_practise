package com.journaldev.spring.model;

import java.io.Serializable;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.DateSerializer;

public class LogDetail implements Serializable{

	private static final long serialVersionUID = -7788619177798333712L;
	
	private String logMarker;
	private String currentThread;
	private String logger;
	private String logLevel;
	private String logMessage;	
	private String timeStamp;
	@JsonProperty("LogMarker")
	public String getLogMarker() {
		return logMarker;
	}
	public void setLogMarker(String logMarker) {
		this.logMarker = logMarker;
	}
	@JsonProperty("CurrentThread")
	public String getCurrentThread() {
		return currentThread;
	}
	public void setCurrentThread(String currentThread) {
		this.currentThread = currentThread;
	}
	@JsonProperty("Logger")
	public String getLogger() {
		return logger;
	}
	public void setLogger(String logger) {
		this.logger = logger;
	}
	@JsonProperty("LogLevel")
	public String getLogLevel() {
		return logLevel;
	}
	public void setLogLevel(String logLevel) {
		this.logLevel = logLevel;
	}
	@JsonProperty("LogMessage")
	public String getLogMessage() {
		return logMessage;
	}
	public void setLogMessage(String logMessage) {
		this.logMessage = logMessage;
	}
	@JsonProperty("TimeStamp")
	public String getTimeStamp() {
		return timeStamp;
	}
	public void setTimeStamp(String timeStamp) {
		this.timeStamp = timeStamp;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	
	
}
