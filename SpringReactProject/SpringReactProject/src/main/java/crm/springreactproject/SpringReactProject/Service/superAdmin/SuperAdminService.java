package crm.springreactproject.SpringReactProject.Service.superAdmin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import crm.springreactproject.SpringReactProject.Repository.superAdmin.SuperRepository;
import crm.springreactproject.SpringReactProject.model.superAdmin.SuperAdmin;

@Service
public class SuperAdminService {

	 @Autowired
	    private SuperRepository superAdminRepository;

	    public SuperAdmin findByEmailId(String emailId) {
	        return superAdminRepository.findByEmailId(emailId);
	    }
}
