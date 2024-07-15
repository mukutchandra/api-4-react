package com.mukut.spring.dto;

import lombok.Data;

@Data
public class RecordCountRequest {
	private String tableName;
    private String databaseType;
    private String environment;
    private String schema;
}
