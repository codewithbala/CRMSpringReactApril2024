package crm.springreactproject.SpringReactProject.Controller.hr;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import crm.springreactproject.SpringReactProject.Service.hr.HRManagerService;
import crm.springreactproject.SpringReactProject.model.hr.HRManager;


@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api")
public class HRManagerController {

	
	@Autowired
    private HRManagerService hrManagerService;

    @PostMapping("/hr-manager-login")
    public ResponseEntity<HRManager> login(@RequestBody HRManager loginRequest) {
    	HRManager hrManger = hrManagerService.findByEmailId(loginRequest.getEmailId());
        if (hrManger != null && hrManger.getPassword().equals(loginRequest.getPassword())) {
            return ResponseEntity.ok(hrManger);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new HRManager());
        }
    }
}
