package crm.springreactproject.SpringReactProject.Repository.business;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import crm.springreactproject.SpringReactProject.model.business.BusinessDevManager;


@Repository
public interface BusinessDevManagerRepository extends JpaRepository<BusinessDevManager, Long> {
	BusinessDevManager findByEmailId(String emailId);
}
