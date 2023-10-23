package hello.demo.service;

import hello.demo.domain.Member;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.assertThrows;

@SpringBootTest
@Transactional
public class MemberServiceIntegrationTest {

   // @Autowired  MemoryMemberRepository memberRepository ;
    @Autowired MemberService memberService;

    // before each 동작하기 전에 실행하는 각각  메소드 생성

    @Test
    void join() {
        //given
        Member member = new Member();
        member.setName("hello1");

        //when
        Long saveId = memberService.join(member);
        //then
        Member one =  memberService.findOne(saveId).get();
        Assertions.assertEquals(member.getName(), one.getName());

    }
    @Test
    public void duplicate_member(){
        Member member1 = new Member();
        member1.setName("spring");
        Member member2 = new Member();
        member2.setName("spring");


        memberService.join(member1);
        IllegalStateException e = assertThrows(IllegalStateException.class, ()-> memberService.join(member2));
        Assertions.assertEquals(e.getMessage(), "이미 존재하는 회원입니다");

    }
    @Test
    void findMembers() {
    }

    @Test
    void findOne() {
    }
}