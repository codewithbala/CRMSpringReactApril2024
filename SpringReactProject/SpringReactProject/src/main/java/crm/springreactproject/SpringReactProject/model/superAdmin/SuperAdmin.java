package crm.springreactproject.SpringReactProject.model.superAdmin;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;	

@Entity
@Table(name = "super_admin")
public class SuperAdmin {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

	private Integer superAdminId;

    private Integer departmentId;
    private String firstName;
    private String lastName;
    private String emailId;
    private String password;
    
    
	public SuperAdmin() {
		super();
		// TODO Auto-generated constructor stub
	}


	public SuperAdmin(Integer superAdminId, Integer departmentId, String firstName, String lastName, String emailId,
			String password) {
		super();
		this.superAdminId = superAdminId;
		this.departmentId = departmentId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
		this.password = password;
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
		return "SuperAdmin [superAdminId=" + superAdminId + ", departmentId=" + departmentId + ", firstName="
				+ firstName + ", lastName=" + lastName + ", emailId=" + emailId + ", password=" + password + "]";
	}
    
    
	
}
