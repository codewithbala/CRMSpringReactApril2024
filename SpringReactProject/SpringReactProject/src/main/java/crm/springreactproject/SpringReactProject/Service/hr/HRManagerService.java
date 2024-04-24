package crm.springreactproject.SpringReactProject.Service.hr;

import crm.springreactproject.SpringReactProject.model.business.BusinessDevManager;
import crm.springreactproject.SpringReactProject.model.hr.HREmployee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import crm.springreactproject.SpringReactProject.Repository.hr.HRManagerRepository;
import crm.springreactproject.SpringReactProject.model.hr.HRManager;

import java.util.List;

@Service
public class HRManagerService {

	@Autowired
    private HRManagerRepository hrManagerRepository;

    public List<HRManager> getAll(){
        return hrManagerRepository.findAll();
    }

    public HRManager findById(Integer id){
        return hrManagerRepository.findById(Long.valueOf(id)).get();
    }

    public void createEmployee(HRManager employee){
        hrManagerRepository.save(employee);
    }

    public HRManager findByEmailId(String emailId) {
        return hrManagerRepository.findByEmailId(emailId);
    }
}
