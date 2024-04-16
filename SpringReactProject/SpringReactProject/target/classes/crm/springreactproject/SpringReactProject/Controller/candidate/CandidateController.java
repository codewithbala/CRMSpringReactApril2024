package crm.springreactproject.SpringReactProject.Controller.candidate;



import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import crm.springreactproject.SpringReactProject.model.candidate.CandidateDetails;
import crm.springreactproject.SpringReactProject.Service.candidate.Candidate;
import java.util.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;


@RestController
@RequestMapping("/candidates")
public class CandidateController {

    @Autowired
    private Candidate candidateService;


    @GetMapping
    public List<CandidateDetails> getAllCandidates() {
        return candidateService.fetchAllCandidate();
    }


    @GetMapping("/{candidateId}")
    public CandidateDetails getCandidateById(@PathVariable Integer candidateId) {
        return candidateService.fetchCandidateById(candidateId);
    }

    @PostMapping
    public CandidateDetails createCandidate(@RequestBody CandidateDetails candidateDetails) {
        return candidateService.createNewCandidate(candidateDetails);
    }


    @DeleteMapping("/{candidateId}")
    public ResponseEntity<String> deleteCandidate(@PathVariable Integer candidateId, CandidateDetails candidateDetails) {
        candidateService.deleteCandidate(candidateId, candidateDetails);
        return ResponseEntity.ok("Deleted Successfully");
    }

    @PutMapping("/{candidateId}")
    public CandidateDetails updateCandidate(@PathVariable Integer candidateId, @RequestBody CandidateDetails candidateDetails) {
        return candidateService.updateCandidate(candidateId, candidateDetails);


    }

}
