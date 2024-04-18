package crm.springreactproject.SpringReactProject.Controller.business;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import crm.springreactproject.SpringReactProject.Service.business.BusinessDevManagerService;
import crm.springreactproject.SpringReactProject.model.business.BusinessDevManager;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api")
public class BusinessDevManagerController {

	
	@Autowired
    private BusinessDevManagerService businessDevManagerService;

    @PostMapping("/business-manager-login")
    public ResponseEntity<BusinessDevManager> login(@RequestBody BusinessDevManager loginRequest) {
    	BusinessDevManager businessDevManager = businessDevManagerService.findByEmailId(loginRequest.getEmailId());
        if (businessDevManager != null && businessDevManager.getPassword().equals(loginRequest.getPassword())) {
            return ResponseEntity.ok(businessDevManager);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new BusinessDevManager());
        }
    }
}
