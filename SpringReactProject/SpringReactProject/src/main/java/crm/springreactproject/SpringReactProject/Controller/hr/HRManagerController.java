package crm.springreactproject.SpringReactProject.Controller.hr;

import crm.springreactproject.SpringReactProject.model.business.BusinessDevManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import crm.springreactproject.SpringReactProject.Service.hr.HRManagerService;
import crm.springreactproject.SpringReactProject.model.hr.HRManager;

import java.util.List;


@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api")
public class HRManagerController {

	
	@Autowired
    private HRManagerService hrManagerService;

    @GetMapping("/hr-manager/")
    public List<HRManager> getAll(){
        return hrManagerService.getAll();
    }

    @GetMapping("/hr-manager/{id}")
    public HRManager findById(@PathVariable Integer id){
        return hrManagerService.findById(id);
    }

    @PostMapping("/hr-manager-login")
    public ResponseEntity<HRManager> login(@RequestBody HRManager loginRequest) {
    	HRManager hrManger = hrManagerService.findByEmailId(loginRequest.getEmailId());
        if (hrManger != null && hrManger.getPassword().equals(loginRequest.getPassword())) {
            return ResponseEntity.ok(hrManger);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new HRManager());
        }
    }

    @PutMapping("/hr-manager/update-employee/{id}")
    public HRManager updateEmployee(@PathVariable Integer id, @RequestBody HRManager manager){
        manager.setHr_manager_id(id);
        hrManagerService.createEmployee(manager);
        return hrManagerService.findById(id);
    }
}
