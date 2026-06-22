package com.guvi.subscriptionmanager.repo;

import com.guvi.subscriptionmanager.model.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InvoiceRepository extends JpaRepository<Invoice, Long> {

    List<Invoice> findByUserId(Long userId);

    List<Invoice> findBySubscriptionId(Long subscriptionId);
}
