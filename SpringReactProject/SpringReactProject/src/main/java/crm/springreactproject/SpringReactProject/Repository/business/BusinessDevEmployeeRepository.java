package crm.springreactproject.SpringReactProject.Repository.business;

import crm.springreactproject.SpringReactProject.model.business.BusinessDevEmployee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BusinessDevEmployeeRepository extends JpaRepository<BusinessDevEmployee, Integer> {
}
