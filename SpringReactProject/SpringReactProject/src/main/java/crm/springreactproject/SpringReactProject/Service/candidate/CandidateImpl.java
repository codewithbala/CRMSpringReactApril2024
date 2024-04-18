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
    public CandidateDetails fetchCandidateById(Integer candidateID) {
        return candidateRepo.findById(candidateID)
                .orElseThrow(()->new RuntimeException("candidate is not found"));
    }

    @Override
    public void deleteCandidate(Integer candidateID, CandidateDetails candidateDetails) {
        Optional<CandidateDetails> existingCandidateOptional = candidateRepo.findById(candidateID);
      if (existingCandidateOptional.isEmpty()) {
          throw new RuntimeException("Candidate not found with ID: " + candidateID);
        }

          candidateRepo.deleteById(candidateID);
          System.out.print("Candidate with the ID of " + candidateID + " is deleted successfully");


    }



    @Override
    public CandidateDetails updateCandidate(Integer candidateId, CandidateDetails candidateDetails) {
        Optional<CandidateDetails> existingCandidateOptional = candidateRepo.findById(candidateId);
        if (existingCandidateOptional.isEmpty()) {
            throw new RuntimeException("Candidate not found with ID: " + candidateId);
        }
        CandidateDetails existingCandidate = existingCandidateOptional.get();
        existingCandidate.setRecruiterName(candidateDetails.getRecruiterName());
        existingCandidate.setCandidateEntry(candidateDetails.getCandidateEntry());
        existingCandidate.setSkillSet(candidateDetails.getSkillSet());
        existingCandidate.setBatchNo(candidateDetails.getBatchNo());
        existingCandidate.setCandidateStatus(candidateDetails.getCandidateStatus());
        existingCandidate.setFirstName(candidateDetails.getFirstName());
        existingCandidate.setMiddleName(candidateDetails.getMiddleName());
        existingCandidate.setLastName(candidateDetails.getLastName());
        existingCandidate.setEmailId(candidateDetails.getEmailId());
        existingCandidate.setPhoneNumber(candidateDetails.getPhoneNumber());
        existingCandidate.setCollege(candidateDetails.getCollege());
        existingCandidate.setCountry(candidateDetails.getCountry());
        existingCandidate.setState(candidateDetails.getState());
        existingCandidate.setCity(candidateDetails.getCity());
        existingCandidate.setExperience(candidateDetails.getExperience());
        existingCandidate.setVisaStatus(candidateDetails.getVisaStatus());
        existingCandidate.setOPTStartDate(candidateDetails.getOPTStartDate());
        existingCandidate.setOPTEndDate(candidateDetails.getOPTEndDate());
        existingCandidate.setSSN(candidateDetails.getSSN());
        existingCandidate.setSource(candidateDetails.getSource());
        existingCandidate.setCommunicationSkill(candidateDetails.getCommunicationSkill());
        existingCandidate.setResume(candidateDetails.getResume());
        existingCandidate.setRecruiterRemarks(candidateDetails.getRecruiterRemarks());
        existingCandidate.setOtherSource(candidateDetails.getOtherSource());
        existingCandidate.setReferenceName(candidateDetails.getReferenceName());
        existingCandidate.setOtherSkills(candidateDetails.getOtherSkills());


        existingCandidate.setCity(candidateDetails.getCity());


        return candidateRepo.save(existingCandidate);
    }

}
