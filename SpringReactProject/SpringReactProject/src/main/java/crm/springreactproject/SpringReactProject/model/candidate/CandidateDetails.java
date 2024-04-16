package crm.springreactproject.SpringReactProject.model.candidate;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.*;

@Entity
@Table(name="candidate_details")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CandidateDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable=false)
    private String recruiterName;
    @Column(nullable=false)
    private Integer candidateEntry;
    @Column(nullable=false)
    private List<String> skillSet;
    @Column(nullable=false)
    private Integer batchNo;
    @Column(nullable=false)
    private String candidateStatus;
    @Column(nullable=false)
    private String firstName;
    @Column(nullable=false)
    private String middleName;
    @Column(nullable=false)
    private String lastName;
    @Column(nullable=false)
    private String emailId;
    @Column(nullable=false)
    private String phoneNumber;
    @Column(nullable=false)
    private String college;
    @Column(nullable=false)
    private String country;
    @Column(nullable=false)
    private String state;
    @Column(nullable=false)
    private String city;
    @Column(nullable=false)
    private List<String> experience;
    @Column(nullable=false)
    private String visaStatus;
    @Column(nullable=false)
    private String OPTStartDate;
    @Column(nullable=false)
    private String OPTEndDate;
    @Column(nullable=false)
    private String SSN;
    @Column(nullable=false)
    private String source;
    @Column(nullable=false)
    private Integer communicationSkill;
    @Column(nullable=false)
    private String resume;
    @Column(nullable=false)
    private String recruiterRemarks;




}
