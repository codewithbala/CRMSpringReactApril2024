package crm.springreactproject.SpringReactProject.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "training_admin")
public class TrainingAdmin {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private Integer training_admin_id;
	
	private Integer superAdminId;
    private Integer departmentId;
    private String firstName;
    private String lastName;
    private String emailId;
    private String password;
    
    
	public TrainingAdmin() {
		super();
		// TODO Auto-generated constructor stub
	}


	public TrainingAdmin(Integer training_admin_id, Integer superAdminId, Integer departmentId, String firstName,
			String lastName, String emailId, String password) {
		super();
		this.training_admin_id = training_admin_id;
		this.superAdminId = superAdminId;
		this.departmentId = departmentId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
		this.password = password;
	}


	public Integer getTraining_admin_id() {
		return training_admin_id;
	}


	public void setTraining_admin_id(Integer training_admin_id) {
		this.training_admin_id = training_admin_id;
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
		return "TrainingAdmin [training_admin_id=" + training_admin_id + ", superAdminId=" + superAdminId
				+ ", departmentId=" + departmentId + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", emailId=" + emailId + ", password=" + password + "]";
	}
    
    
}
