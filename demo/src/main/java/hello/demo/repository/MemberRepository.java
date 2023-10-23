package hello.demo.repository;

import hello.demo.domain.Member;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

// member repository의 인터페이스 작성

public interface MemberRepository {
    // 회원 저장
    Member save(Member member);

    // user_id 찾기
    Optional<Member> findById(long id);
    // user_name
    Optional<Member> findByName(String name);
    //user_mbti
    Optional<Member> findByMbti(String mbti);
    // 모든 유저
    List<Member> findAll();
}
