package com.sashkou.websocket.controller;

import com.sashkou.websocket.message.Message;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

@Controller
public class MessageController {

    @MessageMapping("/message")
    @SendTo("/topic/message")
    public Message greeting(Message message) {
        return new Message(HtmlUtils.htmlEscape(message.getContent()));
    }
}
