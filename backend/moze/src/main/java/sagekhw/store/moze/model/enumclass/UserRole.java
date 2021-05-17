package sagekhw.store.moze.model.enumclass;


import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum UserRole {

    STAFF(0,"staff","staff"),
    OWNER(1,"owner","owner")
    ;

    private Integer id;
    private String title;
    private String description;
}
