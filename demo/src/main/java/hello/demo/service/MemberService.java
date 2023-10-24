package hello.demo.service;

import hello.demo.domain.Member;
import hello.demo.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional
public class MemberService {

    private MemberRepository memberRepository;

    @Autowired
    public MemberService(MemberRepository memberRepository){
        this.memberRepository= memberRepository;
    }
    // 회원 가입하면 id만 반한한다

    private void validateDuplicatedMember(Member member){
        //중복 회원은 있으면 안된다
        memberRepository.findByName(member.getName())
                .ifPresent(m -> {
                    throw new IllegalStateException("이미 존재하는 회원입니다");
                });
    }
    public long join(Member member){
        long start = System.currentTimeMillis();
        try{
            validateDuplicatedMember(member);
            memberRepository.save(member);
            return member.getId();
        } finally {
            long finish = System.currentTimeMillis();
            long timeMs = finish - start;
            System.out.println("Join" + timeMs+"ms");
        }

    }
    // 전체 회원 조회
    public List<Member> findMembers(){
        return memberRepository.findAll();
    }

    public Optional<Member> findOne(long memberId){
        return memberRepository.findById(memberId);
    }
}
