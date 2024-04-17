package crm.springreactproject.SpringReactProject.Controller.business;

import crm.springreactproject.SpringReactProject.Service.business.BusinessEmployeeService;
import crm.springreactproject.SpringReactProject.model.business.BusinessDevEmployee;
import crm.springreactproject.SpringReactProject.model.business.BusinessDevManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("api/business")
public class BusinessEmployeeController {

    @Autowired
    BusinessEmployeeService businessEmployeeService;

    @GetMapping("/")
    public List<BusinessDevEmployee> getAll(){
       return businessEmployeeService.getAll();
    }

    @GetMapping("/{id}")
    public BusinessDevEmployee findById(@PathVariable Integer id){
        return businessEmployeeService.findById(id);
    }

    @PostMapping("/create-employee")
    public List<BusinessDevEmployee> createEmployee(@RequestBody BusinessDevEmployee employee){
        businessEmployeeService.createEmployee(employee);
        return businessEmployeeService.getAll();
    }

    @PutMapping("/update-employee/{id}")
    public BusinessDevEmployee updateEmployee(@PathVariable Integer id, @RequestBody BusinessDevEmployee employee){
        employee.setBusiness_dev_employee_id(id);
        businessEmployeeService.createEmployee(employee);
        return businessEmployeeService.findById(id);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable Integer id){
        businessEmployeeService.deleteById(id);
        return "the employee with ID: "+id+" has been deleted";
    }

    @PostMapping("/business-employee-login")
    public ResponseEntity<BusinessDevEmployee> login(@RequestBody BusinessDevEmployee loginRequest) {
        BusinessDevEmployee businessDevEmployee = businessEmployeeService.findByEmailId(loginRequest.getEmailId());
        if (businessDevEmployee != null && businessDevEmployee.getPassword().equals(loginRequest.getPassword())) {
            return ResponseEntity.ok(businessDevEmployee);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new BusinessDevEmployee());
        }
    }
}
