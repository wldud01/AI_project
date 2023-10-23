package hello.demo.repository;

import hello.demo.domain.Content;
import hello.demo.domain.FoodRecInput;
import hello.demo.domain.Member;

import java.util.List;
import java.util.Optional;

public interface ContentRepository {

    // 컨텐츠 저장
    Content save(Content content);

    // ID로 컨텐츠 찾기
    Optional<Content> findById(Long id);

    // 특정 사용자(작성자)의 컨텐츠 목록 가져오기
    List<Content> findByAuthorId(Member authorId);
    // 특정 지역의 컨텐츠 목록 가져오기
    List<Content> findByLocation(String locationId);

    // 특정 카테고리의 컨텐츠 목록 가져오기
    List<Content> findByCategory(List<String> category);

    // 모든 컨텐츠 목록 가져오기
    List<Content> findAll();

    // 모든 컨텐츠 목록 삭제하기
    void deleteContent(Long contentId);

    // 컨텐츠의 vote count 업데이트
    void updateVoteCount(Long contentId, long voteCount);
}