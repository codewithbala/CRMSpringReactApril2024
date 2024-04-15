package crm.springreactproject.SpringReactProject.Controller.training;

import crm.springreactproject.SpringReactProject.Service.hr.HREmployeeService;
import crm.springreactproject.SpringReactProject.Service.training.TrainingEmployeeService;
import crm.springreactproject.SpringReactProject.model.business.BusinessDevEmployee;
import crm.springreactproject.SpringReactProject.model.training.TrainingEmployee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/training")
@CrossOrigin(origins = "*")
public class TrainingEmployeeController {

    @Autowired
    private TrainingEmployeeService trainingEmployeeService;

    @GetMapping("/")
    public List<TrainingEmployee> getAll(){
        return trainingEmployeeService.getAll();
    }

    @GetMapping("/{id}")
    public TrainingEmployee findById(@PathVariable Integer id){
        return trainingEmployeeService.findById(id);
    }

    @PostMapping("/create-employee")
    public List<TrainingEmployee> createEmployee(@RequestBody TrainingEmployee employee){
        trainingEmployeeService.createEmployee(employee);
        return trainingEmployeeService.getAll();
    }

    @PutMapping("/update-employee/{id}")
    public TrainingEmployee updateEmployee(@PathVariable Integer id, @RequestBody TrainingEmployee employee){
        employee.setHr_employee_id(id);
        trainingEmployeeService.createEmployee(employee);
        return trainingEmployeeService.findById(id);
    }

    @DeleteMapping
    public String delete(@PathVariable Integer id){
        trainingEmployeeService.deleteById(id);
        return "the employee with ID: "+id+" has been deleted";
    }



}
