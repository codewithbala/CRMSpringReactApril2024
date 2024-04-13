package crm.springreactproject.SpringReactProject.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import crm.springreactproject.SpringReactProject.Repository.HRManagerRepository;
import crm.springreactproject.SpringReactProject.model.HRManager;

@Service
public class HRManagerService {

	@Autowired
    private HRManagerRepository hrManagerRepository;

    public HRManager findByEmailId(String emailId) {
        return hrManagerRepository.findByEmailId(emailId);
    }
}
