package crm.springreactproject.SpringReactProject.Service.quizQuestions;

import crm.springreactproject.SpringReactProject.Repository.quizQuestions.QuizQuestionsRepository;
import crm.springreactproject.SpringReactProject.model.quizQuestions.QuizQuestions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class QuizQuestionsServiceImpl implements QuizQuestionsService{
    @Autowired
    QuizQuestionsRepository quizQuestionsRepository;
    @Override
    public List<QuizQuestions> getAll() {
        return quizQuestionsRepository.findAll();
    }

    @Override
    public QuizQuestions findById(Long id) {
        return quizQuestionsRepository.findById(id).get();
    }

    @Override
    public void saveOrUpdate(QuizQuestions question) {
        quizQuestionsRepository.save(question);
    }

    @Override
    public void deleteById(Long id) {
        quizQuestionsRepository.deleteById(id);
    }
}
