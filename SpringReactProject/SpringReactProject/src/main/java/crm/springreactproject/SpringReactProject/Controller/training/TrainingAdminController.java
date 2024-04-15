package crm.springreactproject.SpringReactProject.Controller.training;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import crm.springreactproject.SpringReactProject.Service.training.TrainingAdminService;
import crm.springreactproject.SpringReactProject.model.training.TrainingAdmin;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api")
public class TrainingAdminController {

	
	
	@Autowired
    private TrainingAdminService trainingAdminService;

    @PostMapping("/training-admin-login")
    public ResponseEntity<String> login(@RequestBody TrainingAdmin loginRequest) {
    	TrainingAdmin trainingAdmin = trainingAdminService.findByEmailId(loginRequest.getEmailId());
        if (trainingAdmin != null && trainingAdmin.getPassword().equals(loginRequest.getPassword())) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }
    }
}
