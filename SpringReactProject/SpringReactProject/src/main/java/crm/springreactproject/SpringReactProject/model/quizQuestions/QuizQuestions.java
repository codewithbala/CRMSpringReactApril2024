package crm.springreactproject.SpringReactProject.model.quizQuestions;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class QuizQuestions {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long quizId;

    @Column
    String topic;

    @Column
    String question;

    @Column
    String answer;

    @Column
    String fake1;

    @Column
    String fake2;

    @Column
    String fake3;




}
