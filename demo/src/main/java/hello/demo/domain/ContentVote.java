package hello.demo.domain;

import jakarta.persistence.*;

@Entity
public class ContentVote {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "contentId")
    private Content contentId;
    @Column
    private String voteUser;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Content getContentId() {
        return contentId;
    }

    public void setContentId(Content contentId) {
        this.contentId = contentId;
    }

    public String getVoteUser() {
        return voteUser;
    }

    public void setVoteUser(String voteUser) {
        this.voteUser = voteUser;
    }
}
