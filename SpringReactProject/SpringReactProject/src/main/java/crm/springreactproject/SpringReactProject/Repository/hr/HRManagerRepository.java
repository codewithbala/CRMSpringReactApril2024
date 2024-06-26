package crm.springreactproject.SpringReactProject.Repository.hr;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import crm.springreactproject.SpringReactProject.model.hr.HRManager;


@Repository
public interface HRManagerRepository extends JpaRepository<HRManager, Long>{
	HRManager findByEmailId(String emailId);
}
