package crm.springreactproject.SpringReactProject.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import crm.springreactproject.SpringReactProject.model.TrainingAdmin;

@Repository
public interface TrainingAdminRepository extends JpaRepository<TrainingAdmin, Long> {

	TrainingAdmin  findByEmailId(String emailId);

}
