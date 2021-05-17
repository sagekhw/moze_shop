package sagekhw.store.moze.model.enumclass;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum SnsType {

    EMAIL(0,"email","by email"),
    NAVER(1,"naver","by the naver email."),
    KAKAO(2,"kakao","by the kakao email."),
    GOOGLE(3,"google","by the google email."),
    FACEBOOK(4,"facebook","by the facebook email.")
    ;

    private Integer id;
    private String title;
    private String description;

}
