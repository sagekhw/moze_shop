package sagekhw.store.moze.model.param.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import sagekhw.store.moze.model.enumclass.SnsType;
import sagekhw.store.moze.model.enumclass.UserAuthority;
import sagekhw.store.moze.model.enumclass.UserRole;
import sagekhw.store.moze.model.enumclass.UserStatus;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserApiRequest {

    private Long id;

    private String email;

    private String password;

    private String name;

    private String subEmail;

    private SnsType snsType;

    private String snsId;

    private UserStatus status;

    private String phoneNumber;

    private UserAuthority authority;

    private UserRole role;

    private BigDecimal accumulatedMoney;

    private LocalDateTime registeredAt;

    private LocalDateTime unregisteredAt;
}
