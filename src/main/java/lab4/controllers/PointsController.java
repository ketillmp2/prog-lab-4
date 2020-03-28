package lab4.controllers;

import lab4.LabUserPrincipal;
import lab4.model.Point;
import lab4.reps.PointRepository;
import lab4.reps.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Collection;

@RestController
@RequestMapping("/points")
public class PointsController {

    private final PointRepository pointRepository;
    private final UserRepository userRepository;

    PointsController(PointRepository pointRepository, UserRepository userRepository) {
        this.pointRepository = pointRepository;
        this.userRepository = userRepository;
    }
    @GetMapping
    public Collection<Point> all(Principal user) {
        Collection<Point> points = pointRepository.getPointsByUser(userRepository.findByUsername(user.getName()));
        ArrayDeque<Point> reversePoints = new ArrayDeque<>();
        for (Point point : points) {
            reversePoints.addFirst(point);
        }
        return reversePoints;
    }

    @GetMapping("recalculate")
    public Collection<Point> recalculateAll(Float r, Principal user){
        ArrayList<Point> recalc = new ArrayList<Point>();
        Collection<Point> points = pointRepository.getPointsByUser(userRepository.findByUsername(user.getName()));
        for (Point p : points) {
            Point point = new Point(p.getX(), p.getY(), r);
            recalc.add(point);
        }
        return recalc;
    }

    @PostMapping
    public Point newPoint(@RequestBody Point point, Principal user) {
        Point point1 = new Point(point.getX(), point.getY(), point.getR());
        point1.setUser(userRepository.findByUsername(user.getName()));
        pointRepository.save(point1);
        return point1;
    }
}
