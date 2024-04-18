package crm.springreactproject.SpringReactProject.Repository.hr;

import crm.springreactproject.SpringReactProject.model.business.BusinessDevEmployee;
import crm.springreactproject.SpringReactProject.model.hr.HREmployee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HREmployeeRepository extends JpaRepository<HREmployee, Integer> {

    HREmployee findByEmailId(String emailId);
}
