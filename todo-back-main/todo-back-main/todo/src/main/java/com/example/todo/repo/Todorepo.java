package com.example.todo.repo;

import com.example.todo.model.Todoitem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface Todorepo extends JpaRepository<Todoitem, Long>
{

    List<Todoitem> findAllByUserid(String userid);
}
