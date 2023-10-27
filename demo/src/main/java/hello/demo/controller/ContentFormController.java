package hello.demo.controller;

import hello.demo.domain.Content;
import hello.demo.service.ContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/spring")
public class ContentFormController {

    private final ContentService contentService;

    @Autowired
    public ContentFormController(ContentService contentService){
        this.contentService = contentService;
    }

    // content  저장
    @PostMapping("/content/new")
    public String create(@RequestBody ContentForm form){
        // 게시글 객체 생성
        Content content = new Content();

        content.setLocation(form.getLocation());
        content.setAuthor(form.getAuthorId());
        content.setTitle(form.getTitle());
        content.setText(form.getText());
        content.setFileUrl(form.getFileUrl());
        content.setShareUrl(form.getShareUrl());
        content.setCategory(form.getCategory());
        content.setCreatedDate(form.getCreatedDate());
        content.setVoteCount(form.getVoteCount());

        contentService.saveContent(content);
        return "redirect:/";
    }
    // 모든 컨텐츠 목록 조회
    @GetMapping("/contents")
    public ResponseEntity<List<Content>> contents(){
        List<Content> contents = contentService.getAllContents();
        return ResponseEntity.ok(contents);
    }
    // 특정 카테고리의 컨텐츠 목록 조회
    // 특정 사용자(작성자)의 컨텐츠 목록 조회

}
