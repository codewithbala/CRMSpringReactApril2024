package crm.springreactproject.SpringReactProject.Service.candidate;

import crm.springreactproject.SpringReactProject.Repository.candidate.CandidateRepo;
import crm.springreactproject.SpringReactProject.model.candidate.CandidateDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CandidateImpl implements Candidate{
    @Autowired
    CandidateRepo candidateRepo;
    @Override
    public List<CandidateDetails> fetchAllCandidate() {
        return candidateRepo.findAll();
    }

    @Override
    public CandidateDetails createNewCandidate(CandidateDetails candidateDetails) {
        return candidateRepo.save(candidateDetails);
    }

    @Override
    public CandidateDetails fetchCandidateById(String candidateID) {
        return candidateRepo.findById(candidateID)
                .orElseThrow(()->new RuntimeException("candidate is not found"));
    }

}
