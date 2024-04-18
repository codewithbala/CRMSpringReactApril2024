package crm.springreactproject.SpringReactProject.Repository.candidate;

import crm.springreactproject.SpringReactProject.model.candidate.CandidateDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CandidateRepo extends JpaRepository<CandidateDetails, Integer> {


}
