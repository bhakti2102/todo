package com.example.todo.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class SignupModel
{

    @Id
    private String userid;
    private String password;

    public SignupModel(String userid, String password, String gender) {
        this.userid = userid;
        this.password = password;
        this.gender = gender;
    }





    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    private String gender;
    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public SignupModel(String userid, String password)
    {
        this.userid = userid;
        this.password = password;
    }
    public SignupModel() {}


}
