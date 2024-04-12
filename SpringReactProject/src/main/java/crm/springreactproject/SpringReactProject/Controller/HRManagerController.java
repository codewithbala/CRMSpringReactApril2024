package crm.springreactproject.SpringReactProject.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import crm.springreactproject.SpringReactProject.Service.HRManagerService;
import crm.springreactproject.SpringReactProject.model.HRManager;


@RestController
@RequestMapping("/api")
public class HRManagerController {

	
	@Autowired
    private HRManagerService hrManagerService;

    @PostMapping("/hr_manager_login")
    public ResponseEntity<String> login(@RequestBody HRManager loginRequest) {
    	HRManager hrManger = hrManagerService.findByEmailId(loginRequest.getEmailId());
        if (hrManger != null && hrManger.getPassword().equals(loginRequest.getPassword())) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }
    }
}
