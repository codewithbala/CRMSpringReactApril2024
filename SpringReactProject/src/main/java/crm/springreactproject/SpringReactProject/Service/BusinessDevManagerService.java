package crm.springreactproject.SpringReactProject.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import crm.springreactproject.SpringReactProject.Repository.BusinessDevManagerRepository;
import crm.springreactproject.SpringReactProject.model.BusinessDevManager;

@Service
public class BusinessDevManagerService {

	
	@Autowired
    private BusinessDevManagerRepository businessDevManagerRepository;

    public BusinessDevManager findByEmailId(String emailId) {
        return businessDevManagerRepository.findByEmailId(emailId);
    }
}
