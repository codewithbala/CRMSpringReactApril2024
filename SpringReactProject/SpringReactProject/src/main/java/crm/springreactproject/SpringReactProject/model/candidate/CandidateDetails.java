package crm.springreactproject.SpringReactProject.model.candidate;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.*;

@Entity
@Table(name="candidate_detail")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@SecondaryTable(name="candidate_business_view", pkJoinColumns = @PrimaryKeyJoinColumn(name = "svna_eid"))
public class CandidateDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String recruiterName;

    private String snvaEid;

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

    private String tenthDayEvaluation;

    private String tenthDayEvaluationOther;

    private String secondOpinionOther;

    private String trainingCompletionFeedback;

    private String finalResume;

    @Column(name="other_source")
    private String otherSource;
    @Column(name="referenceName")
    private String referenceName;
    @Column(name="other_skills")
    private String otherSkills;

    @Column(name = "interview_date")

    private String interviewDate;

    @Column(name = "trainer_name")
    @NotBlank(message = "Trainer name cannot be blank")
    private String trainerName;

    @Column(name = "interview_feedback", length = 2000)
    @Size(max = 2000, message = "Interview feedback must be less than 300 words")
    private String interviewFeedback;



    @Column(name = "candidature_status")
    @NotBlank(message = "Candidature status cannot be blank")
    private String candidatureStatus;

    @Column(name = "bd_remarks_feedback")
    private String bdRemarksFeedback;

    @Column(name = "loi_sent")
    private Boolean loiSent;

    @Column(name = "loi_accepted")
    private Boolean loiAccepted;

    @Column(name = "joined_batch")
    private Boolean joinedBatch;

    @Column(name = "candidate_batch_start_date")

    private String candidateBatchStartDate;




    // for candidate view for business

    @Column(table = "candidate_business_view")
    String positionTitle;

    @Column(table = "candidate_business_view")
    String candidateName;

    @Column(table = "candidate_business_view")
    String skillSetForBusinessView;

    @Column(table = "candidate_business_view")
    String batchNoForBusinessView;


    @Column(table = "candidate_business_view")
    String vendorPoc;

    @Column(table = "candidate_business_view")
    String endClientName;

    @Column(table = "candidate_business_view")
    String location;

    @Column(table = "candidate_business_view")
    Float billRate;

    @Column(table = "candidate_business_view")
    String submissionStatus;

    @Column(table = "candidate_business_view")
    String businessInterviewDate;

    @Column(table = "candidate_business_view")
    String interviewTime;

    @Column(table = "candidate_business_view")
    String interviewResult;

    @Column(table = "candidate_business_view")
    String BusinessInterviewFeedback;

    @Column(table = "candidate_business_view")
    String projectStartDate;

    @Column(table = "candidate_business_view")
    String projectEndDate;


    @Column(table = "candidate_business_view")
    String remarks;

    @Column(table = "candidate_business_view")
    String vendorTier;

    @Column(table = "candidate_business_view")
    String vendorName;

    @Column(table = "candidate_business_view")
    String vendorSPOC;

    @Column(table = "candidate_business_view")
    String vendorEmail;

    @Column(table = "candidate_business_view")
    String vendorContactNo;

    @Column(table = "candidate_business_view")
    String vendorLocation;



    /* Missing fields from US Staffing CRM 2024.xls file (Training tab)
    * Brought in from CandidateInterview model */
//    private String interviewFeedback; have
//    private String candidatureStatus; have
//    private String tenthDayEvaluation;
//    private String trainingCompletionFeedback;
//    private String finalResume;
//    private String bdRemarksFeedback; have
}
