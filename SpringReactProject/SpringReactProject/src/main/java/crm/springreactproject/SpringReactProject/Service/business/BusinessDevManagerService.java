package crm.springreactproject.SpringReactProject.Service.business;

import crm.springreactproject.SpringReactProject.model.business.BusinessDevEmployee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import crm.springreactproject.SpringReactProject.Repository.business.BusinessDevManagerRepository;
import crm.springreactproject.SpringReactProject.model.business.BusinessDevManager;

import java.util.List;

@Service
public class BusinessDevManagerService {

	
	@Autowired
    private BusinessDevManagerRepository businessDevManagerRepository;

    public BusinessDevManager findByEmailId(String emailId) {
        return businessDevManagerRepository.findByEmailId(emailId);
    }

    public List<BusinessDevManager> getAll(){
        return businessDevManagerRepository.findAll();
    }

    public void createEmployee(BusinessDevManager employee){
        businessDevManagerRepository.save(employee);
    }

    public BusinessDevManager findById(Integer id){
        return businessDevManagerRepository.findById(Long.valueOf(id)).get();
    }


}
