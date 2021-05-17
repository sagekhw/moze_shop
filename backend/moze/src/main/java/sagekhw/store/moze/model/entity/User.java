package sagekhw.store.moze.model.entity;

import lombok.*;
import lombok.experimental.Accessors;
import sagekhw.store.moze.model.enumclass.SnsType;
import sagekhw.store.moze.model.enumclass.UserAuthority;
import sagekhw.store.moze.model.enumclass.UserRole;
import sagekhw.store.moze.model.enumclass.UserStatus;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
@Accessors(chain = true)
@Entity(name = "user")
//@ToString(exclude = "")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;

    private String password;

    private String name;

    private String subEmail;

    private SnsType snsType;

    private String snsId;

    @Enumerated(EnumType.STRING)
    private UserStatus status;

    private String phoneNumber;

    @Enumerated(EnumType.STRING)
    private UserAuthority authority;

    @Enumerated(EnumType.STRING)
    private UserRole role;

    private BigDecimal accumulatedMoney;

    private LocalDateTime registeredAt;

    private LocalDateTime unregisteredAt;

    private LocalDateTime updatedAt;

    private String updatedBy;

//    private Long company_id;

}
