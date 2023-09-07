package com.example.todo.model;
import jakarta.persistence.*;

@Entity
public class Todoitem {

    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String title;
    private  boolean status;
    private String userid;




    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }


    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public boolean isstatus() {
        return status;
    }

    public void setstatus(boolean status) {
        this.status = status;
    }


    public Todoitem() {}

    public Todoitem( String title, boolean status) {

        this.title = title;
        this.status = status;
    }
    public Todoitem(String title, boolean status,String userid) {
        this.title = title;
        this.status = status;
        this.userid=userid;
    }
}
