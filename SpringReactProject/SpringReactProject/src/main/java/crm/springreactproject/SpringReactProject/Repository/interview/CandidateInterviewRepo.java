package crm.springreactproject.SpringReactProject.Repository.interview;

import crm.springreactproject.SpringReactProject.model.interview.CandidateInterview;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CandidateInterviewRepo extends JpaRepository<CandidateInterview, Long> {
}
