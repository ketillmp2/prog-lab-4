package lab4.model;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import javax.persistence.*;
import javax.validation.constraints.Size;

@EnableAutoConfiguration
@Entity
@Table(name = "users")
public class User {
    @Id @Column(nullable = false, unique = true)
    private String username;
    private String password;
    public String getUsername() {
        return username;
    }

    public void setUsername(String login) {
        this.username = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public User() {
    }
    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }
}
