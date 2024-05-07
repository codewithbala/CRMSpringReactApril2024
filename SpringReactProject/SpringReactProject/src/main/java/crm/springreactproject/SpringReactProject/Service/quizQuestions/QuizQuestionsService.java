package crm.springreactproject.SpringReactProject.Service.quizQuestions;

import crm.springreactproject.SpringReactProject.model.quizQuestions.QuizQuestions;

import java.util.List;

public interface QuizQuestionsService {

    public List<QuizQuestions> getAll();

    public QuizQuestions findById(Long id);

    public void saveOrUpdate(QuizQuestions question);

    public void deleteById(Long id);

}
