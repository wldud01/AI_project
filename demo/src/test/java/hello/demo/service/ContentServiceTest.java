package hello.demo.service;

import hello.demo.domain.Content;
import hello.demo.repository.ContentRepository;
import hello.demo.repository.JpaContentRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class ContentServiceTest {
    @Autowired
    ContentService contentService;
    @Test
    void saveContent() {
        Content content = new Content();
        content.setLocation("서울특별시");
        content.setAuthor("spring");
        content.setTitle("form.getTitle()");
        content.setText("form.getText()");
        content.setFileUrl("form.getFileUrl()");
        content.setShareUrl("form.getShareUrl()");
        content.setCreatedDate("2023-10-24");
        List<String> category = new ArrayList<String>();
        category.add("hello");
        category.add("world");
        content.setCategory(category);
        content.setVoteCount(0);

        contentService.saveContent(content);
    }

    @Test
    void getContentsByUserId() {
    }

    @Test
    void getContentsByLocation() {
    }

    @Test
    void getContentsByCategory() {
    }

    @Test
    public List<Content> getAllContents() {
        Content content = new Content();
        content.setLocation("서울특별시");
        content.setAuthor("spring");
        content.setTitle("form.getTitle()");
        content.setText("form.getText()");
        content.setFileUrl("form.getFileUrl()");
        content.setShareUrl("form.getShareUrl()");
        content.setCreatedDate("2023-10-24");
        List<String> category = new ArrayList<String>();
        category.add("hello");
        category.add("world");
        content.setCategory(category);
        content.setVoteCount(0);
        System.out.println(contentService.getAllContents());
        return contentService.getAllContents();
    }
    @Test
    void deleteContents() {
    }

    @Test
    void updateVoteCount() {
    }
}