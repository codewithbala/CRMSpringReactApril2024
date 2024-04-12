package crm.springreactproject.SpringReactProject.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import crm.springreactproject.SpringReactProject.Service.BusinessDevManagerService;
import crm.springreactproject.SpringReactProject.model.BusinessDevManager;

@RestController
@RequestMapping("/api")
public class BusinessDevManagerController {

	
	@Autowired
    private BusinessDevManagerService businessDevManagerService;

    @PostMapping("busi_manager_login")
    public ResponseEntity<String> login(@RequestBody BusinessDevManager loginRequest) {
    	BusinessDevManager businessDevManager = businessDevManagerService.findByEmailId(loginRequest.getEmailId());
        if (businessDevManager != null && businessDevManager.getPassword().equals(loginRequest.getPassword())) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }
    }
}
