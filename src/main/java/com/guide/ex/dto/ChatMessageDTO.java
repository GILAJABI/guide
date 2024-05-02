package com.guide.ex.dto;

import lombok.Data;

@Data
public class ChatMessageDTO {

    public enum MessageType {
        ENTER, TALK, EXIT, MATCH, MATCH_REQUEST;
    }
    private MessageType type;
    private String roomId;
    private String sender;
    private String message;
}