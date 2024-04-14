package crm.springreactproject.SpringReactProject.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import crm.springreactproject.SpringReactProject.Service.SuperAdminService;
import crm.springreactproject.SpringReactProject.model.SuperAdmin;
import jakarta.servlet.http.HttpSession;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api")
public class SuperAdminController {

	
	@Autowired
    private SuperAdminService superAdminService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody SuperAdmin loginRequest) {
        SuperAdmin superAdmin = superAdminService.findByEmailId(loginRequest.getEmailId());
        if (superAdmin != null && superAdmin.getPassword().equals(loginRequest.getPassword())) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }
    }
}
