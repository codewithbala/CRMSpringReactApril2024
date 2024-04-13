package crm.springreactproject.SpringReactProject.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import crm.springreactproject.SpringReactProject.Repository.TrainingAdminRepository;
import crm.springreactproject.SpringReactProject.model.TrainingAdmin;

@Service
public class TrainingAdminService {

	
	@Autowired
    private TrainingAdminRepository trainingAdminRepository;

    public TrainingAdmin findByEmailId(String emailId) {
        return trainingAdminRepository.findByEmailId(emailId);
    }
}
