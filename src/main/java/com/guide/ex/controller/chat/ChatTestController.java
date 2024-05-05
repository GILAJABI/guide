package com.guide.ex.controller.chat;

import com.guide.ex.domain.chat.ChatMessage;
import com.guide.ex.domain.chat.ChatRoom;
import com.guide.ex.repository.chat.ChatMessageRepository;
import com.guide.ex.repository.chat.ChatRoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequiredArgsConstructor
@RequestMapping("/chat")
@Controller
public class ChatTestController {

    private final SimpMessageSendingOperations messagingTemplate;
    private final ChatMessageRepository chatMessageRepository;
    private final ChatRoomRepository chatRoomRepository;

    @GetMapping("/chatList")
    public void getRoomById() {
    }

    @GetMapping("/chatRoom.html")
    public void chatRoom(){

    }
}