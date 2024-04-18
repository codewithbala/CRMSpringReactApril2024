package crm.springreactproject.SpringReactProject.Service.hr;

import crm.springreactproject.SpringReactProject.Repository.business.BusinessDevEmployeeRepository;
import crm.springreactproject.SpringReactProject.Repository.hr.HREmployeeRepository;
import crm.springreactproject.SpringReactProject.model.business.BusinessDevEmployee;
import crm.springreactproject.SpringReactProject.model.hr.HREmployee;
import crm.springreactproject.SpringReactProject.model.training.TrainingEmployee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HREmployeeService {

    @Autowired
    private HREmployeeRepository hrEmployeeRepository;


    public List<HREmployee> getAll(){
        return hrEmployeeRepository.findAll();
    }

    public HREmployee findById(Integer id){
        return hrEmployeeRepository.findById(id).get();
    }

    public void createEmployee(HREmployee employee){
        hrEmployeeRepository.save(employee);
    }

    public HREmployee findByEmailId(String emailId) {
        return hrEmployeeRepository.findByEmailId(emailId);
    }

    public void deleteById(Integer id){
        hrEmployeeRepository.deleteById(id);
    }


}
