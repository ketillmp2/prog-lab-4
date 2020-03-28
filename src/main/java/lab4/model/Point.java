package lab4.model;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import javax.persistence.*;
import javax.validation.constraints.Digits;

@EnableAutoConfiguration
@Entity
@Table(name = "points")
public class Point {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private float x, y, r;
    private boolean hit;

    @ManyToOne
    private User user;

    public Point() {
    }

    public Point(float x, float y, float r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.hit = calculate(x, y, r);
    }
    public Point(float x, float y, float r, boolean hit) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.hit = hit;
    }

    public boolean calculate(float x, float y, float r) {
        boolean hit, a2, a3, a4;
        a2 = ((x * x + y * y) <= (r * r)) && (x <= 0 && y >= 0);
        a3 = (x <= 0 && x >= -r && x <= 0 && y >= -r && y <= 0);
        a4 = (y >= (2*x-r)) && (x >= 0 && y <= 0);

        hit = a2 || a3 || a4;
        return hit;
    }

    public float getX() {
        return x;
    }

    public void setX(float x) {
        this.x = x;
    }

    public float getY() {
        return y;
    }

    public void setY(float y) {
        this.y = y;
    }

    public float getR() {
        return r;
    }

    public void setR(float r) {
        this.r = r;
    }

    public boolean isHit() {
        return hit;
    }

    public void setHit(boolean hit) {
        this.hit = hit;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "{\"id\":" + id +
                ",\" x\":" + x +
                ", \"y\":" + y +
                ", \"r\":" + r +
                ", \"hit\":\"" + hit + "\"}";
    }
}
