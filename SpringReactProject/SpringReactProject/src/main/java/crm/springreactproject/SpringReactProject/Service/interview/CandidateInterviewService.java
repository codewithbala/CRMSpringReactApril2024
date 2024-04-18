package crm.springreactproject.SpringReactProject.Service.interview;

import crm.springreactproject.SpringReactProject.model.interview.CandidateInterview;

import java.util.List;
import java.util.Optional;

public interface CandidateInterviewService {
    CandidateInterview saveCandidateInterview(CandidateInterview candidateInterview);
    List<CandidateInterview> getAllCandidateInterviews();
    Optional<CandidateInterview> getCandidateInterviewById(Long id);
    void deleteCandidateInterview(Long id);
}
