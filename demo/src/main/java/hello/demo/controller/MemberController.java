package hello.demo.controller;

import hello.demo.domain.Member;
import hello.demo.service.MemberService;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.websocket.server.PathParam;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;
import java.util.SimpleTimeZone;

@RestController
@RequestMapping("/api")
public class MemberController {
    // 선언을 하고 생성자로 만들어서 사용하면 된다
    private MemberService memberService;

    @Autowired
    public MemberController(MemberService memberService){
        this.memberService = memberService;
        System.out.println("memberService = " + memberService.getClass());
    }
    // member 등록
    @GetMapping("/members/new")
    public String createForm(){
        return "members/createMemberForm";
    }
    @PostMapping("/members/new")
    public String create(MemberForm form){
        Member member = new Member();
        member.setName(form.getName());
        member.setEmail(form.getEmail());
        member.setGender(form.getGender());
        member.setMbti(form.getMbti());
        member.setUserId(form.getUserId());
        member.setCreatedDate(form.getCreatedDate());

        memberService.join(member);
        return "redirect:/";
    }
    @GetMapping("/members")
    public ResponseEntity<List<Member>> members(Model model){
        List<Member> members = memberService.findMembers();
        return ResponseEntity.ok(members);
    }
    @GetMapping("/member/")
    public ResponseEntity<Optional<Member>> member(@RequestParam("id") Long id){
        Optional<Member> member = memberService.findOne(id);
        return ResponseEntity.ok(member);
    }

}
