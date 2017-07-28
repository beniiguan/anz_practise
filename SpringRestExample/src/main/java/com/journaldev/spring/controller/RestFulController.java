package com.journaldev.spring.controller;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.journaldev.spring.model.LogDetail;
import com.journaldev.spring.model.LoginInfo;
import com.journaldev.spring.model.ServerLog;

/**
 * Handles requests for the rest service.
 */
@Controller
public class RestFulController {
	
	private static final Logger logger = LoggerFactory.getLogger(RestFulController.class);
	
	
	@RequestMapping(value = RestURIConstants.GET_LOG, method = RequestMethod.GET)
	public @ResponseBody List<LogDetail> getLogDetail(@PathVariable("type") String type) {
		logger.info("Start getLogDetail. type="+type);
		List<LogDetail> logs = getAllLogs();	
		List<LogDetail> filterLogs = new ArrayList<LogDetail>();	
		for(int i=0;i<logs.size();i++){
			if(type.equalsIgnoreCase(logs.get(i).getLogLevel())){
				filterLogs.add(logs.get(i));
			}
		}
		return filterLogs;
	}
	
	@RequestMapping(value = RestURIConstants.GET_ALL_LOG, method = RequestMethod.GET)
	public @ResponseBody List<LogDetail> getAllLogDetails() {
		//TO-DO validation check or add it in filter
		logger.info("Start getAllLogDetails.");
		List<LogDetail> logs = getAllLogs();	
		return logs;
	}
	
	private List<LogDetail> getAllLogs(){
		ServerLog log = null;
		List<LogDetail> logs = new ArrayList<LogDetail>();
		ObjectMapper mapper = new ObjectMapper();
		//mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        try {
            log = mapper.readValue(readJson("logs.json"),  ServerLog[].class)[0];
            logs = log.getLogItems();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return logs;
	}
	
	@RequestMapping(value = RestURIConstants.POST_LOGIN, method = RequestMethod.POST)
	public @ResponseBody LoginInfo login(@RequestBody LoginInfo user) {
		logger.info("Start login...");
		LoginInfo users[];
		ObjectMapper mapper = new ObjectMapper();
		//mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        try {
        	users = mapper.readValue(readJson("users.json"),  LoginInfo[].class);
        	for(int i=0;i<users.length;i++){
        		//simple validation
        		if(users[i].getUser().equals(user.getUser())&&users[i].getPassword().equals(user.getPassword())){
        			user.setRedirect("home.html");
        			logger.info("Valid user info...");
        			return user;
        		}
        	}
        } catch (IOException e) {
            e.printStackTrace();
        }
        logger.info("Invalid user info");
		return user;
	}

	public String readJson(String file){
		FileReader is;
		BufferedReader br;
		  StringBuffer sb = new StringBuffer();
			try {
				//is = new FileReader(DummyJSON.class.getResource("").getPath()+fileName+".json");
				is = new FileReader("D:\\private\\SpringRestExample\\src\\main\\resources\\"+file);
 				br = new BufferedReader(is);
				String line = null;
				while((line=br.readLine())!=null){
					sb.append(line);
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
			
			return sb.toString();
	}
	
}
