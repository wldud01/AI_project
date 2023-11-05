package hello.demo.repository;
import hello.demo.domain.Content;
import hello.demo.domain.Member;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

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
        if (category == null || category.isEmpty()) {
            // 선택된 카테고리가 없으면 빈 목록을 반환
            return Collections.emptyList();
        }
        String jpql = "SELECT c FROM Content c Where  ";

        for (int i = 0; i < category.size(); i++) {
            if (i > 0) {
                jpql += " OR";
            }
            jpql += " c.category LIKE :category" + i;
        }
        TypedQuery<Content> query = em.createQuery(jpql, Content.class);
        for (int i = 0; i < category.size(); i++) {
            query.setParameter("category" + i, "%" + category.get(i) + "%");
        }

        return query.getResultList();
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
