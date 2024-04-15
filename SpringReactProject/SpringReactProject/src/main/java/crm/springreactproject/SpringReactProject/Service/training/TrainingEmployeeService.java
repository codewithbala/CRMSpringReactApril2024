package crm.springreactproject.SpringReactProject.Service.training;

import crm.springreactproject.SpringReactProject.Repository.training.TrainingEmployeeRepository;
import crm.springreactproject.SpringReactProject.model.hr.HREmployee;
import crm.springreactproject.SpringReactProject.model.training.TrainingEmployee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrainingEmployeeService {

    @Autowired
    private TrainingEmployeeRepository trainingEmployee;


    public List<TrainingEmployee> getAll(){
        return trainingEmployee.findAll();
    }

    public TrainingEmployee findById(Integer id){
        return trainingEmployee.findById(id).get();
    }

    public void createEmployee(TrainingEmployee employee){
        trainingEmployee.save(employee);
    }

    public void deleteById(Integer id){
        trainingEmployee.deleteById(id);
    }

}
