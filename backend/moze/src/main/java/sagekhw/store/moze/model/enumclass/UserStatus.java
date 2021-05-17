package sagekhw.store.moze.model.enumclass;


import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum UserStatus {

    IN(0,"in","login"),
    OUT(1,"out","logout"),
    DELETE(2,"del","unregistered user")
    ;

    private Integer id;
    private String title;
    private String description;
}
