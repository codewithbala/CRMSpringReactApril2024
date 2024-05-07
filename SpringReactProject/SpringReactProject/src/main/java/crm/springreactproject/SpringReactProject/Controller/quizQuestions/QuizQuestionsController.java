package crm.springreactproject.SpringReactProject.Controller.quizQuestions;


import crm.springreactproject.SpringReactProject.Service.quizQuestions.QuizQuestionsService;
import crm.springreactproject.SpringReactProject.model.hr.HREmployee;
import crm.springreactproject.SpringReactProject.model.quizQuestions.QuizQuestions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/quiz")
@CrossOrigin(origins = "*")
public class QuizQuestionsController {

    @Autowired
    QuizQuestionsService quizQuestionsService;

    @GetMapping("/")
    public List<QuizQuestions> getAll(){
        return quizQuestionsService.getAll();
    }

    @GetMapping("/{id}")
    public QuizQuestions findById(@PathVariable Long id){
        return quizQuestionsService.findById(id);
    }

    @PostMapping("/create-quizQuestion")
    public List<QuizQuestions> createQuiz(@RequestBody QuizQuestions quizQuestions){
        quizQuestionsService.saveOrUpdate(quizQuestions);
        return quizQuestionsService.getAll();
    }

    @PutMapping("/update-quizQuestion/{id}")
    public QuizQuestions updateEmployee(@PathVariable Long id, @RequestBody QuizQuestions quizQuestions){
        quizQuestions.setQuizId(id);
        quizQuestionsService.saveOrUpdate(quizQuestions);
        return quizQuestionsService.findById(id);
    }

    @DeleteMapping("/delete-quizQuestion/{id}")
    public String delete(@PathVariable Long id){
        quizQuestionsService.deleteById(id);
        return "the employee with ID: "+id+" has been deleted";
    }

}
