package crm.springreactproject.SpringReactProject.Controller.training;

import crm.springreactproject.SpringReactProject.model.business.BusinessDevManager;
import crm.springreactproject.SpringReactProject.model.hr.HRManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import crm.springreactproject.SpringReactProject.Service.training.TrainingAdminService;
import crm.springreactproject.SpringReactProject.model.training.TrainingAdmin;

import java.util.List;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api")
public class TrainingAdminController {

	
	
	@Autowired
    private TrainingAdminService trainingAdminService;

    @GetMapping("/training-admin/")
    public List<TrainingAdmin> getAll(){
        return trainingAdminService.getAll();
    }

    @GetMapping("/training-admin/{id}")
    public TrainingAdmin findById(@PathVariable Integer id){
        return trainingAdminService.findById(id);
    }

    @PostMapping("/training-admin-login")
    public ResponseEntity<TrainingAdmin> login(@RequestBody TrainingAdmin loginRequest) {
    	TrainingAdmin trainingAdmin = trainingAdminService.findByEmailId(loginRequest.getEmailId());
        if (trainingAdmin != null && trainingAdmin.getPassword().equals(loginRequest.getPassword())) {
            return ResponseEntity.ok(trainingAdmin);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new TrainingAdmin());
        }
    }

    @PutMapping("/training-admin/update-employee/{id}")
    public TrainingAdmin updateEmployee(@PathVariable Integer id, @RequestBody TrainingAdmin manager){
        manager.setTraining_admin_id(id);
        trainingAdminService.createEmployee(manager);
        return trainingAdminService.findById(id);
    }
}
