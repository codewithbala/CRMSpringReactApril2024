package crm.springreactproject.SpringReactProject.Service.candidate;

import crm.springreactproject.SpringReactProject.model.candidate.CandidateDetails;

import java.util.List;

public interface Candidate {
    List<CandidateDetails> fetchAllCandidate();
    CandidateDetails createNewCandidate(CandidateDetails candidateDetails);
     CandidateDetails fetchCandidateById(String candidateID);

}
