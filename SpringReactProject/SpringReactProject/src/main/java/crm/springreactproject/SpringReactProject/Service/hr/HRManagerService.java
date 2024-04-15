package crm.springreactproject.SpringReactProject.Service.hr;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import crm.springreactproject.SpringReactProject.Repository.hr.HRManagerRepository;
import crm.springreactproject.SpringReactProject.model.hr.HRManager;

@Service
public class HRManagerService {

	@Autowired
    private HRManagerRepository hrManagerRepository;

    public HRManager findByEmailId(String emailId) {
        return hrManagerRepository.findByEmailId(emailId);
    }
}
