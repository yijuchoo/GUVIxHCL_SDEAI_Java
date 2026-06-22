package com.guvi.subscriptionmanager.repo;

import com.guvi.subscriptionmanager.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
