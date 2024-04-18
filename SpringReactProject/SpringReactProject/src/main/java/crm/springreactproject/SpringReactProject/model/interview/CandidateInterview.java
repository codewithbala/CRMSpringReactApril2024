package crm.springreactproject.SpringReactProject.model.interview;


import crm.springreactproject.SpringReactProject.model.candidate.CandidateDetails;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.util.Date;
@Data
@Entity
@Table(name = "candidate_interview")
public class CandidateInterview {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "interview_date")
    @Temporal(TemporalType.TIMESTAMP)
    private Date interviewDate;

    @Column(name = "trainer_name")
    @NotBlank(message = "Trainer name cannot be blank")
    private String trainerName;

    @Column(name = "interview_feedback", length = 2000)
    @Size(max = 2000, message = "Interview feedback must be less than 300 words")
    private String interviewFeedback;

    @OneToOne
    @JoinColumn(name = "candidate_details_id", referencedColumnName = "id")
    private CandidateDetails candidateDetails;

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
    @Temporal(TemporalType.DATE)
    private Date candidateBatchStartDate;

}
