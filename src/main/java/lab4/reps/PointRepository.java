package lab4.reps;

import lab4.model.Point;
import lab4.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface PointRepository extends CrudRepository<Point, Integer> {
    Collection<Point> getPointsByUser(User user);
}
