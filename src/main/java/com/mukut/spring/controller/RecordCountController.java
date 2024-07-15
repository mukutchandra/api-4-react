package com.mukut.spring.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mukut.spring.dto.RecordCountRequest;
import com.mukut.spring.dto.RecordCountResponse;

@RestController
public class RecordCountController {
	
	@PostMapping(value="/api/count", consumes=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<RecordCountResponse> getRecordCount(@RequestBody RecordCountRequest request) {
        long count = 10L;
        System.out.println("Environment => "+request.getEnvironment()
        +" Database selected => "+request.getDatabaseType()
        +" Schema =>"+request.getSchema()
        +" Table Name => "+request.getTableName());
        return ResponseEntity.ok(new RecordCountResponse(count));
    }
}
