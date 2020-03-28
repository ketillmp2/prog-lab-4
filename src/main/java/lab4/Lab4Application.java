package lab4;

import lab4.model.Point;
import lab4.model.User;
import lab4.reps.PointRepository;
import lab4.reps.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Lab4Application {

    public static void main(String[] args) {
        SpringApplication.run(Lab4Application.class, args);
    }

  /*  @Bean
    CommandLineRunner initDatabase(UserRepository repository){
        return args -> repository.save(new User("Max", "Kirill"));
    } */

}
