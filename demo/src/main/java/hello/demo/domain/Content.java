package hello.demo.domain;
import jakarta.persistence.*;

import java.util.Arrays;
import java.util.List;

// DB Entity table 자동 생성
@Entity
public class Content {

    //기본키 ID 자동 생성
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    // 위치
    @Column
    private String location;

    // 글을 쓴 User Id, 추후에 Member과 Join을 고려해보자
    @Column
    private String authorId;

    // 글 생성 일자
    @Column
    private String createdDate;

    // 글 제목
    @Column
    private String title;
    // 설명글 내용
    @Column
    private String text;

    // 업로드한 사진 URL
    @Column
    private String data;

    // 사용자가 입력하는 위치 url, 공유 방식
    @Column
    private String shareUrl;

    // 한식 양식 중식 일식등 category List String 저장
    @Column
    private String category;
    // 좋아요 수
    @Column
    private long voteCount;

    /*
     Lombock annotation으로 Getter Setter을 쓰면 더욱 간단하지만 일단 순수
     Java 코드 구현 방식으로 진행을 먼저 하고 불필요한 코드를 줄여나간다.
    */
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getAuthor() {
        return authorId;
    }

    public void setAuthor(String authorId) {
        this.authorId = authorId;
    }

    public String getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(String createdDate) {
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

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }


    public String getShareUrl() {
        return shareUrl;
    }

    public void setShareUrl(String shareUrl) {
        this.shareUrl = shareUrl;
    }

    public void setCategory(List<String> category) {
        this.category = String.join(",", category);
    }

    public List<String> getCategory() {
        return Arrays.asList(category.split(","));
    }

    public long getVoteCount() {
        return voteCount;
    }

    public void setVoteCount(long voteCount) {
        this.voteCount = voteCount;
    }

}
