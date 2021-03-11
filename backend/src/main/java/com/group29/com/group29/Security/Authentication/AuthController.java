package com.group29.com.group29.Security.Authentication;

import com.group29.com.group29.Role.ERole;
import com.group29.com.group29.Role.Role;
import com.group29.com.group29.User.User;
import com.group29.com.group29.Dto.Request.LoginRequest;
import com.group29.com.group29.Dto.Request.SignupRequest;
import com.group29.com.group29.Dto.Response.JwtResponse;
import com.group29.com.group29.Dto.Response.MessageResponse;
import com.group29.com.group29.Role.RoleRepository;
import com.group29.com.group29.User.UserRepository;
import com.group29.com.group29.Security.Jwt.JwtUtils;
import com.group29.com.group29.Security.Services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        //authenticate username & password

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        //updating SecurityContext with Auth object
        SecurityContextHolder.getContext().setAuthentication(authentication);

        //generate jwt
        String jwt = jwtUtils.generateJwtToken(authentication);

        //get UserDetails from Auth object
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());

        //response: JWT + UserDetails
        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getEmail(),
                roles));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        //checks if username exists
        if (userRepository.existsByUsername(signUpRequest.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username is already taken!"));
        }
        //checks if email exists
        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        // create new user's account
        User user = new User(signUpRequest.getUsername(),
                signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword()));

        Set<String> stringRoles = signUpRequest.getRole();
        Set<Role> roles = new HashSet<>();

        if (stringRoles == null) {
            Role volunteerRole = roleRepository.findByName(ERole.ROLE_VOLUNTEER)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(volunteerRole);
        } else {
            stringRoles.forEach(role -> {
                switch (role) {
                    case "organisation":
                        Role orgRole = roleRepository.findByName(ERole.ROLE_ORGANISATION)
                                .orElseThrow(() -> new RuntimeException("Error: ORG Role is not found."));
                        roles.add(orgRole);

                        break;
                    case "admin":
                        Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
                                .orElseThrow(() -> new RuntimeException("Error: AD Role is not found."));
                        roles.add(adminRole);

                        break;

                    default:
                        Role volunteerRole = roleRepository.findByName(ERole.ROLE_VOLUNTEER)
                                .orElseThrow(() -> new RuntimeException("Error: VOL Role is not found."));
                        roles.add(volunteerRole);
                }
            });
        }

        //saves user to database
        user.setRoles(roles);
        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("Account created successfully!"));
    }
}