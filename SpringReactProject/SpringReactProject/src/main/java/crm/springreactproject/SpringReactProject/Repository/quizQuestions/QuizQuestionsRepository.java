package crm.springreactproject.SpringReactProject.Repository.quizQuestions;


import crm.springreactproject.SpringReactProject.model.quizQuestions.QuizQuestions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuizQuestionsRepository extends JpaRepository<QuizQuestions, Long> {
}
