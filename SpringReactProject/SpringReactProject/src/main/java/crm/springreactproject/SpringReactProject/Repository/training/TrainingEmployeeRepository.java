package crm.springreactproject.SpringReactProject.Repository.training;

import crm.springreactproject.SpringReactProject.model.hr.HREmployee;
import crm.springreactproject.SpringReactProject.model.training.TrainingEmployee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrainingEmployeeRepository extends JpaRepository<TrainingEmployee, Integer> {
}
