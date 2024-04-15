package crm.springreactproject.SpringReactProject.Controller.hr;

import crm.springreactproject.SpringReactProject.Service.business.BusinessEmployeeService;
import crm.springreactproject.SpringReactProject.Service.hr.HREmployeeService;
import crm.springreactproject.SpringReactProject.model.business.BusinessDevEmployee;
import crm.springreactproject.SpringReactProject.model.hr.HREmployee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/hr")
public class HREmployeeController {

    @Autowired
    HREmployeeService hrEmployeeService;

    @GetMapping("/")
    public List<HREmployee> getAll(){
        return hrEmployeeService.getAll();
    }

    @GetMapping("/{id}")
    public HREmployee findById(@PathVariable Integer id){
        return hrEmployeeService.findById(id);
    }

    @PostMapping("/create-employee")
    public List<HREmployee> createEmployee(@RequestBody HREmployee employee){
        hrEmployeeService.createEmployee(employee);
        return hrEmployeeService.getAll();
    }

    @PutMapping("/update-employee/{id}")
    public HREmployee updateEmployee(@PathVariable Integer id, @RequestBody HREmployee employee){
        employee.setHr_employee_id(id);
        hrEmployeeService.createEmployee(employee);
        return hrEmployeeService.findById(id);
    }

    @DeleteMapping("/delete-employee/{id}")
    public String delete(@PathVariable Integer id){
        hrEmployeeService.deleteById(id);
        return "the employee with ID: "+id+" has been deleted";
    }
}
