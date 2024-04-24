package crm.springreactproject.SpringReactProject.Service.training;

import crm.springreactproject.SpringReactProject.model.business.BusinessDevManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import crm.springreactproject.SpringReactProject.Repository.training.TrainingAdminRepository;
import crm.springreactproject.SpringReactProject.model.training.TrainingAdmin;

import java.util.List;

@Service
public class TrainingAdminService {

	
	@Autowired
    private TrainingAdminRepository trainingAdminRepository;

    public TrainingAdmin findByEmailId(String emailId) {
        return trainingAdminRepository.findByEmailId(emailId);
    }

    public List<TrainingAdmin> getAll(){
        return trainingAdminRepository.findAll();
    }

    public void createEmployee(TrainingAdmin manager){
        trainingAdminRepository.save(manager);
    }

    public TrainingAdmin findById(Integer id){
        return trainingAdminRepository.findById(Long.valueOf(id)).get();
    }
}
