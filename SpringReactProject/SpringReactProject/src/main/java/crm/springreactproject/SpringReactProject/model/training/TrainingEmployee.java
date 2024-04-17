package crm.springreactproject.SpringReactProject.model.training;


import jakarta.persistence.*;
import lombok.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Table(name="training_employee")
public class TrainingEmployee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
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
