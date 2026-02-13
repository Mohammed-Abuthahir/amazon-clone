package com.example.amazonbackend.servies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
    @Autowired
    private JavaMailSender mailSender;
    public void sendLoginAlert(String toEmail, String name) {

        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(toEmail);
        message.setSubject("Login Alert - Amazon Clone");
        message.setText(
                "Hello " + name + ",\n\n" +
                        "You have successfully logged into your account.\n\n" +
                        "If this was not you, please secure your account immediately.\n\n" +
                        "Thanks,\nAmazon Security Team"
        );

        mailSender.send(message);
    }
}
