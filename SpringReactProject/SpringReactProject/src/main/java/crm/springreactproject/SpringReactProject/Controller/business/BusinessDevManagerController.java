package crm.springreactproject.SpringReactProject.Controller.business;

import crm.springreactproject.SpringReactProject.model.business.BusinessDevEmployee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import crm.springreactproject.SpringReactProject.Service.business.BusinessDevManagerService;
import crm.springreactproject.SpringReactProject.model.business.BusinessDevManager;

import java.util.List;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api")
public class BusinessDevManagerController {

	
	@Autowired
    private BusinessDevManagerService businessDevManagerService;

    @GetMapping("/business-manager/")
    public List<BusinessDevManager> getAll(){
        return businessDevManagerService.getAll();
    }

    @GetMapping("/business-manager/{id}")
    public BusinessDevManager findById(@PathVariable Integer id){
        return businessDevManagerService.findById(id);
    }

    @PostMapping("/business-manager-login")
    public ResponseEntity<BusinessDevManager> login(@RequestBody BusinessDevManager loginRequest) {
    	BusinessDevManager businessDevManager = businessDevManagerService.findByEmailId(loginRequest.getEmailId());
        if (businessDevManager != null && businessDevManager.getPassword().equals(loginRequest.getPassword())) {
            return ResponseEntity.ok(businessDevManager);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new BusinessDevManager());
        }
    }

    @PutMapping("/business-manager/update-employee/{id}")
    public BusinessDevManager updateEmployee(@PathVariable Integer id, @RequestBody BusinessDevManager manager){
        manager.setBusiness_dev_admin_id(id);
        businessDevManagerService.createEmployee(manager);
        return businessDevManagerService.findById(id);
    }
}
