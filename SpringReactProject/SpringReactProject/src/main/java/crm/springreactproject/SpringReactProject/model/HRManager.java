package crm.springreactproject.SpringReactProject.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "hr_manager")
public class HRManager {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private Integer hr_manager_id;
	
	private Integer superAdminId;
    private Integer departmentId;
    private String firstName;
    private String lastName;
    private String emailId;
    private String password;
    
    
	public HRManager() {
		super();
		// TODO Auto-generated constructor stub
	}


	public HRManager(Integer hr_manager_id, Integer superAdminId, Integer departmentId, String firstName,
			String lastName, String emailId, String password) {
		super();
		this.hr_manager_id = hr_manager_id;
		this.superAdminId = superAdminId;
		this.departmentId = departmentId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
		this.password = password;
	}


	public Integer getHr_manager_id() {
		return hr_manager_id;
	}


	public void setHr_manager_id(Integer hr_manager_id) {
		this.hr_manager_id = hr_manager_id;
	}


	public Integer getSuperAdminId() {
		return superAdminId;
	}


	public void setSuperAdminId(Integer superAdminId) {
		this.superAdminId = superAdminId;
	}


	public Integer getDepartmentId() {
		return departmentId;
	}


	public void setDepartmentId(Integer departmentId) {
		this.departmentId = departmentId;
	}


	public String getFirstName() {
		return firstName;
	}


	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public String getEmailId() {
		return emailId;
	}


	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	@Override
	public String toString() {
		return "HRManager [hr_manager_id=" + hr_manager_id + ", superAdminId=" + superAdminId + ", departmentId="
				+ departmentId + ", firstName=" + firstName + ", lastName=" + lastName + ", emailId=" + emailId
				+ ", password=" + password + "]";
	}
    
    
    
    
}
