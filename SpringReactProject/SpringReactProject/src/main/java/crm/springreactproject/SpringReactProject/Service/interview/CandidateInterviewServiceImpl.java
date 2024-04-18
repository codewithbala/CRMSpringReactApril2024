package crm.springreactproject.SpringReactProject.Service.interview;

import crm.springreactproject.SpringReactProject.Repository.interview.CandidateInterviewRepo;
import crm.springreactproject.SpringReactProject.model.interview.CandidateInterview;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CandidateInterviewServiceImpl implements CandidateInterviewService{
    @Autowired
    private CandidateInterviewRepo candidateInterviewRepo;

    @Override
    public CandidateInterview saveCandidateInterview(CandidateInterview candidateInterview) {
        return candidateInterviewRepo.save(candidateInterview);
    }

    @Override
    public List<CandidateInterview> getAllCandidateInterviews() {
        return candidateInterviewRepo.findAll();
    }

    @Override
    public Optional<CandidateInterview> getCandidateInterviewById(Long id) {
        return candidateInterviewRepo.findById(id);
    }
    @Override
    public void deleteCandidateInterview(Long id) {
     candidateInterviewRepo.deleteById(id);
    }
}
