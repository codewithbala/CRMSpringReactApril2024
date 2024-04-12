package crm.springreactproject.SpringReactProject.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import crm.springreactproject.SpringReactProject.Repository.SuperRepository;
import crm.springreactproject.SpringReactProject.model.SuperAdmin;

@Service
public class SuperAdminService {

	 @Autowired
	    private SuperRepository superAdminRepository;

	    public SuperAdmin findByEmailId(String emailId) {
	        return superAdminRepository.findByEmailId(emailId);
	    }
}
