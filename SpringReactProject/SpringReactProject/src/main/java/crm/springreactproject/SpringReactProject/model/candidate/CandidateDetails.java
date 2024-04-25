package crm.springreactproject.SpringReactProject.model.candidate;

import jakarta.persistence.*;
import lombok.*;

import java.util.*;

@Entity
@Table(name="candidate_details")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CandidateDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;


    private String recruiterName;

    private Integer candidateEntry;

    private String skillSet;

    private Integer batchNo;

    private String candidateStatus;

    private String firstName;

    private String middleName;

    private String lastName;

    private String emailId;

    private String phoneNumber;

    private String college;

    private String country;

    private String state;

    private String city;

    private String experience;

    private String visaStatus;

    private String OPTStartDate;

    private String OPTEndDate;

    private String SSN;

    private String source;

    private Integer communicationSkill;

    @Column
    private String resume;

    private String recruiterRemarks;
    @Column(name="other_source")
    private String otherSource;
    @Column(name="referenceName")
    private String referenceName;
    @Column(name="other_skills")
    private String otherSkills;

}
