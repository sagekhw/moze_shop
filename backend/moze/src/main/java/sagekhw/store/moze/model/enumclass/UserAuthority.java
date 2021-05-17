package sagekhw.store.moze.model.enumclass;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum UserAuthority {

    CUSTOMER(0,"customer","customer"),
    SELLER(1,"seller","seller"),
    ADMIN(2,"admin","admin")
    ;

//    customer(0,"customer","customer"),
//    seller(1,"seller","seller"),
//    admin(2,"admin","admin")
//    ;

    private Integer id;
    private String title;
    private String description;
}
