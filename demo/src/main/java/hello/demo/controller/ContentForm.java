package hello.demo.controller;

import jakarta.persistence.Lob;
import org.apache.tomcat.util.codec.binary.Base64;

import java.util.List;

public class ContentForm {

   // private Long contentId;
    // 위치 Id
    private String location;
    private String authorId;


    private String  data;
    private String title;
    private String text;
    // 사용자가 입력하는 위치 url, 공유 방식
    private String shareUrl;
    // 한식 양식 중식 일식
    private List<String> category;
    private String createdDate;
    // 좋아요 수
    private long voteCount;

    public void setCreatedDate(String createdDate) {
        this.createdDate = createdDate;
    }

    public String getCreatedDate() {
        return createdDate;
    }

//    public void setContentId(long contentId) {
//        this.contentId = contentId;
//    }
//
//    public Long getContentId() {
//        return contentId;
//    }

    public void setData(String data) {
        this.data = data;
    }

    public String getData() {
        return  data;
    }

    public String getAuthorId() {
        return authorId;
    }

    public void setAuthorId(String authorId) {
        this.authorId = authorId;
    }

    public List<String> getCategory() {
        return category;
    }

    public void setCategory(List<String> category) {
        this.category = category;
    }


    public void setLocation(String location) {
        this.location = location;
    }

    public String getLocation() {
        return location;
    }

    public String getShareUrl() {
        return shareUrl;
    }



    public void setShareUrl(String shareUrl) {
        this.shareUrl = shareUrl;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public long getVoteCount() {
        return voteCount;
    }

    public void setVoteCount(long voteCount) {
        this.voteCount = voteCount;
    }
}
