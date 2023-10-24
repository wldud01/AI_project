package hello.demo.repository;
import hello.demo.domain.Content;
import hello.demo.domain.Member;
import jakarta.persistence.EntityManager;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public class JpaContentRepository implements ContentRepository {

    private final EntityManager em;

    public JpaContentRepository(EntityManager em) {
        this.em = em;
    }

    // content 저장 기능
    @Override
    public Content save(Content content) {
        em.persist(content);
        return content;
    }
    // content ID로 컨텐츠 찾기
    @Override
    public Optional<Content> findById(Long id) {
        return Optional.ofNullable(em.find(Content.class, id));
    }
    // 특정 사용자(작성자)의 컨텐츠 목록 가져오기
    @Override
    public List<Content> findByAuthorId(Member authorId) {
        return em.createQuery("SELECT c FROM Content c WHERE c.authorId = :authorId", Content.class)
                .setParameter("authorId", authorId)
                .getResultList();
    }
    // 특정 지역의 컨텐츠 목록 가져오기
    @Override
    public List<Content> findByLocation(String location) {
        return em.createQuery("SELECT c FROM Content c WHERE c.location = :location", Content.class)
                .setParameter("location", location)
                .getResultList();
    }
    // 특정 카테고리의 컨텐츠 목록 가져오기
    @Override
    public List<Content> findByCategory(List<String> category) {
        return em.createQuery("SELECT c FROM Content c WHERE c.category IN :categories", Content.class)
                .setParameter("category", category)
                .getResultList();
    }
    // 모든 컨텐츠 목록 가져오기
    @Override
    public List<Content> findAll() {
        return em.createQuery("SELECT c FROM Content c", Content.class)
                .getResultList();
    }
    // 모든 컨텐츠 목록 삭제하기
    @Override
    public void deleteContent(Long contentId) {
        em.createQuery("DELETE FROM Content c WHERE c.id = :contentId")
                .setParameter("contentId", contentId)
                .executeUpdate();
    }
    // 컨텐츠의 vote count 업데이트
    @Override
    public void updateVoteCount(Long contentId, long voteCount) {
        Content content = em.find(Content.class, contentId);
        content.setVoteCount(voteCount);
    }
}
