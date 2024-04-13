package crm.springreactproject.SpringReactProject.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import crm.springreactproject.SpringReactProject.model.BusinessDevManager;


@Repository
public interface BusinessDevManagerRepository extends JpaRepository<BusinessDevManager, Long> {
	BusinessDevManager findByEmailId(String emailId);
}
