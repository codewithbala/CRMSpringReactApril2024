package crm.springreactproject.SpringReactProject.model.business;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name="business_dev_employees")
public class BusinessDevEmployee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer business_dev_employee_id;


    @Column(nullable=false)
    private Integer departmentId;
    @Column(nullable=false)
    private String firstName;
    @Column(nullable=false)
    private String lastName;
    @Column(nullable=false)
    private String emailId;
    @Column(nullable=false)
    private String password;

    @Column(nullable=false)

    private String hireDate;

    @Column(nullable=false)
    private String job;

    @Column(nullable=false)
    private String edLevel;

    @Column(nullable=false)
    private String sex;

    @Column(nullable=false)
    private String birthdate;

    @Column(nullable=false)
    private String salary;

    @Column
    private String midInitial;

    @Column
    private String phoneNum;


}
