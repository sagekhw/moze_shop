package sagekhw.store.moze.controller.api;


import org.springframework.web.bind.annotation.*;
import sagekhw.store.moze.controller.CrudController;
import sagekhw.store.moze.model.entity.User;
import sagekhw.store.moze.model.param.request.UserApiRequest;
import sagekhw.store.moze.model.param.response.UserApiResponse;

@RestController
@RequestMapping("/user")
public class UserController extends CrudController<UserApiRequest, UserApiResponse, User> {


    @GetMapping("/hello")
    public String hello(){
        return "Hello World";
    }




}
