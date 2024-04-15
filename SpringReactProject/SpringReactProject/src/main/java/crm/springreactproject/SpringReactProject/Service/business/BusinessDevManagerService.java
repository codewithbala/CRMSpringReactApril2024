package crm.springreactproject.SpringReactProject.Service.business;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import crm.springreactproject.SpringReactProject.Repository.business.BusinessDevManagerRepository;
import crm.springreactproject.SpringReactProject.model.business.BusinessDevManager;

@Service
public class BusinessDevManagerService {

	
	@Autowired
    private BusinessDevManagerRepository businessDevManagerRepository;

    public BusinessDevManager findByEmailId(String emailId) {
        return businessDevManagerRepository.findByEmailId(emailId);
    }
}
