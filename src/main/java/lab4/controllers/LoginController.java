package lab4.controllers;

import lab4.LabUserPrincipal;
import lab4.model.User;
import lab4.reps.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
    private final UserRepository userRepository;

    @Autowired
    private final AuthenticationManager authenticationManager;

    @Autowired
    private final PasswordEncoder passwordEncoder;

    public LoginController(UserRepository userRepository, AuthenticationManager authenticationManager, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.authenticationManager = authenticationManager;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User requestUser) {
        String username = requestUser.getUsername();
        String password = requestUser.getPassword();
        try {
            if (userRepository.findByUsername(username) == null) {
                User user = new User(username, passwordEncoder.encode(password));
                userRepository.save(user);
            }
            UsernamePasswordAuthenticationToken authReq = new UsernamePasswordAuthenticationToken(username, password);
            Authentication auth = authenticationManager.authenticate(authReq);
            SecurityContext sc = SecurityContextHolder.getContext();
            sc.setAuthentication(auth);
            HttpHeaders headers = new HttpHeaders();
            headers.add("Location", "/main");
            return new ResponseEntity<>(headers, HttpStatus.FOUND);
        }

        catch (AuthenticationException e) {
            return new ResponseEntity<>(("Invalid."), HttpStatus.UNAUTHORIZED);
        }
    }

    @PostMapping("/logout")
    public void logout(LabUserPrincipal user) {

    }
}
