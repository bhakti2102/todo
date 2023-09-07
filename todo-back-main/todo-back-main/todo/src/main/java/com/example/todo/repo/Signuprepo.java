package com.example.todo.repo;

import com.example.todo.model.SignupModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface Signuprepo extends JpaRepository<SignupModel, Long>
{
    Optional<SignupModel> findByUserid(String userid);
}
