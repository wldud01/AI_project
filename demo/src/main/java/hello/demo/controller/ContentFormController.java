package hello.demo.controller;

import hello.demo.domain.Content;
import hello.demo.service.ContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ContentFormController {

    private final ContentService contentService;

    @Autowired
    public ContentFormController(ContentService contentService){
        this.contentService = contentService;
    }

    // content  저장
    @PostMapping("/content/new")
    public String create(@RequestBody ContentForm form){
        Content content = new Content();
        content.setContentId(form.getContentId());
        content.setLocationId(form.getLocation());
        content.setAuthor(form.getAuthorId());
        content.setTitle(form.getTitle());
        content.setText(form.getText());
        content.setFileUrl(form.getFileUrl());
        content.setShareUrl(form.getShareUrl());
        content.setCategory(form.getCategory());
        content.setVoteCount(form.getVoteCount());

        contentService.saveContent(content);
        return "redirect:/";
    }
    // 모든 컨텐츠 목록 조회
    // 특정 카테고리의 컨텐츠 목록 조회
    // 특정 사용자(작성자)의 컨텐츠 목록 조회

}
