package com.example.todo.controller;

import com.example.todo.model.Todoitem;
import com.example.todo.repo.Todorepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping

public class Todocontroller {
    @Autowired
    private Todorepo todorepo;

    @GetMapping("/todo")
    public List<Todoitem> findAll()  {return todorepo.findAll();}


    @GetMapping("/todo/bid")
    public List<Todoitem> findAByUserid(@RequestBody Todoitem todoitem ) {

        return todorepo.findAllByUserid(todoitem.getUserid());
    }

    @PostMapping("/todo")
    public Todoitem  save(@RequestBody Todoitem todoitem) {
       return todorepo.save(todoitem);
    }


    @PutMapping("/todo/toggle/{id}")
    public Todoitem update1(@PathVariable("id") long id) {

        return todorepo.findById(id)
                .map(todoitem1-> {
                    todoitem1.setstatus((!todoitem1.isstatus()));
                    return todorepo.save(todoitem1);

                }).get();
    }

    @PutMapping("/todo/{id}")
    public Object update(@RequestBody Todoitem todoitem , @PathVariable("id") long id) {


            return todorepo.findById(id)
                    .map(todoitem1 -> {


                        if(todoitem1.getUserid().equals(todoitem.getUserid()))
                        {
                            todoitem1.setTitle((todoitem.getTitle()));
                            return todorepo.save(todoitem1);
                        }
                        else
                        {
                            return  "Invalid user";

                        }

                    }).get();
        }


    @DeleteMapping("/todo")
    public void deleteall() {
        todorepo.deleteAll();
    System.out.println("All Records Deleted");
    }
    @DeleteMapping("/todo/{id}")
    public void delete(@PathVariable("id") long id) {todorepo.deleteById(id);
    System.out.println(" Record Deleted Sucessfully ");
    }


}
