package crm.springreactproject.SpringReactProject.model.hr;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Table(name="hr_employee")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class HREmployee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer hr_employee_id;


    @Column(nullable=false)
    private Integer manager_id;
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
