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

    private String tenthDayEvaluation;

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


    /* Missing fields from US Staffing CRM 2024.xls file (Training tab)
    * Brought in from CandidateInterview model */
//    private String interviewFeedback; have
//    private String candidatureStatus; have
//    private String tenthDayEvaluation;
//    private String trainingCompletionFeedback;
//    private String finalResume;
//    private String bdRemarksFeedback; have
}
