package hello.demo.domain;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
public class Content {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private Long contentId;
    // 위치 Id
    @Column
    private String location;

    @Column
    private String authorId;
    @Column
    private LocalDateTime createdDate;
    @Column
    private String title;
    @Column
    private String text;
    @Column
    private String fileUrl;
    // 사용자가 입력하는 위치 url, 공유 방식\
    @Column
    private String shareUrl;
    @Column
    // 한식 양식 중식 일식
    private List<String> category;
    @Column
    // 좋아요 수
    private long voteCount;
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public long getContentId() {
        return contentId;
    }

    public void setContentId(long contentId) {
        this.contentId = contentId;
    }

    public String getLocationId() {
        return location;
    }

    public void setLocationId(String location) {
        this.location = location;
    }

    public String getAuthor() {
        return authorId;
    }

    public void setAuthor(String authorId) {
        this.authorId = authorId;
    }

    public LocalDateTime getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(LocalDateTime createdDate) {
        this.createdDate = createdDate;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getFileUrl() {
        return fileUrl;
    }

    public void setFileUrl(String fileUrl) {
        this.fileUrl = fileUrl;
    }


    public String getShareUrl() {
        return shareUrl;
    }

    public void setShareUrl(String shareUrl) {
        this.shareUrl = shareUrl;
    }

    public List<String> getCategory() {
        return category;
    }

    public void setCategory(List<String> category) {
        this.category = category;
    }

    public long getVoteCount() {
        return voteCount;
    }

    public void setVoteCount(long voteCount) {
        this.voteCount = voteCount;
    }

}
