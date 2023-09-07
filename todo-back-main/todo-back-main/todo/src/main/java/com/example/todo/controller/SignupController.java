package com.example.todo.controller;


import com.example.todo.model.SignupModel;

import com.example.todo.repo.Signuprepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping
public class SignupController {


    @Autowired
    private Signuprepo signuprepo;

    @GetMapping("/signup")
    public List<SignupModel> findAll()  {return signuprepo.findAll();}


    @PostMapping("/signup")
    public SignupModel save(@RequestBody SignupModel signupModel) {
        return signuprepo.save(signupModel);
    }


    @PostMapping("/login")
    public String login(@RequestBody SignupModel signupModel)  {


        // return  loginrepo.findByUserid();
        return  signuprepo.findByUserid(signupModel.getUserid())
                .map(signupModel1 -> {
                    boolean res=false;
                    res = signupModel1.getPassword().equals(signupModel.getPassword());
                    if(res)
                    {
                        return "Correct";
                    }
                    else{
                        return "Wrong password";
                    }

                })
                .orElseGet(() -> {

                    return "Acc dosen't exist";
                });
    }





}
