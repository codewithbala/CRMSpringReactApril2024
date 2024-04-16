package crm.springreactproject.SpringReactProject.Service.business;


import crm.springreactproject.SpringReactProject.Repository.business.BusinessDevEmployeeRepository;
import crm.springreactproject.SpringReactProject.model.business.BusinessDevEmployee;
import crm.springreactproject.SpringReactProject.model.business.BusinessDevManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BusinessEmployeeService {
    @Autowired
    BusinessDevEmployeeRepository businessDevEmployeeRepository;

    public List<BusinessDevEmployee> getAll(){
        return businessDevEmployeeRepository.findAll();
    }

    public BusinessDevEmployee findById(Integer id){
        return businessDevEmployeeRepository.findById(id).get();
    }

    public BusinessDevEmployee findByEmailId(String emailId) {
        return businessDevEmployeeRepository.findByEmailId(emailId);
    }
    public void createEmployee(BusinessDevEmployee employee){
        businessDevEmployeeRepository.save(employee);
    }

    public void deleteById(Integer id){
        businessDevEmployeeRepository.deleteById(id);
    }
}
