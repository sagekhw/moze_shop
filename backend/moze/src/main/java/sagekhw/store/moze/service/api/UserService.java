package sagekhw.store.moze.service.api;

import org.springframework.stereotype.Service;
import sagekhw.store.moze.model.entity.User;
import sagekhw.store.moze.model.enumclass.UserAuthority;
import sagekhw.store.moze.model.enumclass.UserRole;
import sagekhw.store.moze.model.enumclass.UserStatus;
import sagekhw.store.moze.model.param.header.Header;
import sagekhw.store.moze.model.param.request.UserApiRequest;
import sagekhw.store.moze.model.param.response.UserApiResponse;
import sagekhw.store.moze.service.BaseService;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Service
public class UserService extends BaseService<UserApiRequest, UserApiResponse, User> {

    @Override
    public Header<UserApiResponse> create(Header<UserApiRequest> request) {

        // 1. request data
        UserApiRequest userApiRequest = request.getData();

        // 2. User 생성
        User user = User.builder()
                .email(userApiRequest.getEmail())
                .password(userApiRequest.getPassword())
                .name(userApiRequest.getName())
                .subEmail(userApiRequest.getSubEmail())
                .status(UserStatus.OUT)
                .phoneNumber(userApiRequest.getPhoneNumber())
                .authority(UserAuthority.CUSTOMER)
                .role(UserRole.OWNER)
                .accumulatedMoney(BigDecimal.valueOf(0.0))
                .registeredAt(LocalDateTime.now())
                .build();
        System.out.println(user);
        User newUser = baseRepository.save(user);

        // 3. 생성된 데이터 -> userApiResponse return
        return response(newUser);
    }


    @Override
    public Header<UserApiResponse> read(Long id) {
        return null;
    }

    @Override
    public Header<UserApiResponse> update(Header<UserApiRequest> request) {
        return null;
    }

    @Override
    public Header delete(Long id) {
        return null;
    }

    private Header<UserApiResponse> response(User user){
        // user -> userApiResponse

        UserApiResponse userApiResponse = UserApiResponse.builder()
                .id(user.getId())
                .email(user.getEmail())
                .name(user.getName())
                .subEmail(user.getSubEmail())
                .status(user.getStatus())
                .phoneNumber(user.getPhoneNumber())
                .authority(user.getAuthority())
                .role(user.getRole())
                .accumulatedMoney(user.getAccumulatedMoney())
                .registeredAt(user.getRegisteredAt())
                .unregisteredAt(user.getUnregisteredAt())
                .build();

        // Header + data return
        return Header.OK(userApiResponse);
    }
}
