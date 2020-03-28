package lab4.model;

import lab4.reps.PointRepository;
import lab4.reps.UserRepository;
import org.springframework.boot.CommandLineRunner;

public class DatabaseLoader implements CommandLineRunner {
    private final UserRepository userRepository;
    private final PointRepository pointRepository;

    public DatabaseLoader(UserRepository userRepository, PointRepository pointRepository) {
        this.userRepository = userRepository;
        this.pointRepository = pointRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        this.pointRepository.save(new Point(0,0,1));
    }
}
