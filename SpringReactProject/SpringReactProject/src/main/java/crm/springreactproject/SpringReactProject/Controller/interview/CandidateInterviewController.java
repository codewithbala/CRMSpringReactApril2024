package crm.springreactproject.SpringReactProject.Controller.interview;

import crm.springreactproject.SpringReactProject.Service.interview.CandidateInterviewService;
import crm.springreactproject.SpringReactProject.Service.interview.CandidateInterviewServiceImpl;
import crm.springreactproject.SpringReactProject.model.interview.CandidateInterview;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api/v1/candidateInterviews")
public class CandidateInterviewController {
    @Autowired
    private CandidateInterviewService candidateInterviewService;

    @PostMapping("/")
    public CandidateInterview createCandidateInterview(@RequestBody CandidateInterview candidateInterview) {
        return candidateInterviewService.saveCandidateInterview(candidateInterview);
    }

    @GetMapping("/")
    public List<CandidateInterview> getAllCandidateInterviews() {
        return candidateInterviewService.getAllCandidateInterviews();
    }

    // Retrieve a single candidate interview by ID
    @GetMapping("/{id}")
    public ResponseEntity<CandidateInterview> getCandidateInterviewById(@PathVariable Long id) {
        try {
            CandidateInterview interview=  candidateInterviewService.getCandidateInterviewById(id).get();
            return ResponseEntity.ok(interview);
        }catch (NoSuchElementException e){
            return ResponseEntity.notFound().build();
        }


    }

    @PutMapping("/{id}")
    public ResponseEntity<CandidateInterview> updateCandidateInterview(@PathVariable Long id,
                                                                       @RequestBody CandidateInterview candidateInterviewDetails) {
        return candidateInterviewService.getCandidateInterviewById(id)
                .map(interviewCand ->{
                    interviewCand.setBdRemarksFeedback(interviewCand.getBdRemarksFeedback());
                    interviewCand.setCandidateBatchStartDate(interviewCand.getCandidateBatchStartDate());
                    interviewCand.setCandidatureStatus(interviewCand.getCandidatureStatus());
                    interviewCand.setInterviewDate(interviewCand.getInterviewDate());
                    interviewCand.setInterviewFeedback(interviewCand.getInterviewFeedback());
                    interviewCand.setJoinedBatch(interviewCand.getJoinedBatch());
                    interviewCand.setLoiAccepted(interviewCand.getLoiAccepted());
                    interviewCand.setLoiSent(interviewCand.getLoiSent());
                    interviewCand.setTrainerName(interviewCand.getTrainerName());
                    CandidateInterview updateInterview = candidateInterviewService.saveCandidateInterview(interviewCand);
                    return ResponseEntity.ok(updateInterview);
                }).orElseThrow();

    }
}
