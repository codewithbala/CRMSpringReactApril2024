package crm.springreactproject.SpringReactProject.Repository.superAdmin;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import crm.springreactproject.SpringReactProject.model.superAdmin.SuperAdmin;

@Repository
public interface SuperRepository extends JpaRepository<SuperAdmin, Long>{
	SuperAdmin findByEmailId(String emailId);
}
