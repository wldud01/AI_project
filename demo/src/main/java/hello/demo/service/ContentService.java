package hello.demo.service;

import hello.demo.domain.Content;
import hello.demo.domain.Member;
import hello.demo.repository.ContentRepository;

import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public class ContentService {

    private final ContentRepository contentRepository;

    public ContentService(ContentRepository contentRepository) {
        this.contentRepository = contentRepository;
    }

    // 컨텐츠 저장
    public Content saveContent(Content content) {
        return contentRepository.save(content);
    }
    // 특정 사용자(작성자)의 컨텐츠 목록 가져오기
    public List<Content> getContentsByUserId(String userId) {
        Member author = new Member();
        author.setUserId(userId);
        return contentRepository.findByAuthorId(author);
    }
    // 특정 지역의 컨텐츠 목록 가져오기
    public List<Content> getContentsByLocation(String locationId) {
        return contentRepository.findByLocation(locationId);
    }
    // 특정 카테고리의 컨텐츠 목록 가져오기
    public List<Content> getContentsByCategory(List<String> category) {
        return contentRepository.findByCategory(category);
    }
    // 모든 컨텐츠 목록 가져오기
    public List<Content> getAllContents() {
        return contentRepository.findAll();
    }

    // 모든 컨텐츠 목록 삭제하기 content id가 list로 넘어오면 하나씩 루프를 돌며 삭제
    public void deleteContents(List<Long> contentIds) {
        for (Long contentId : contentIds) {
            contentRepository.deleteContent(contentId);
        }
    }

    //content id에 해당하는 vote가 올라가면 count 되기.
    public void updateVoteCount(Long contentId, long voteCount) {
        contentRepository.updateVoteCount(contentId, voteCount);
    }
}