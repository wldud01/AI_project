package hello.demo.domain;

import jakarta.persistence.*;
// User Entity
@Entity
public class Member {
    // 임의의 값 anno - pk generatedvalue identity type 은 DB가 자동 생성
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column
    private String userId;
    @Column
    private String name;
    @Column
    private String email;
    @Column
    private String createdDate;
    @Column
    private String mbti;
    @Column
    private String gender;



    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
    public String getUserId(){
        return userId;
    }
    public void setUserId(String userId){
        this.userId = userId;
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail(){return email;}
    public void setEmail(String email){this.email =email;}


    public String getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(String createdDate) {
        this.createdDate = createdDate;
    }

    public String getMbti(){return mbti;}
    public void setMbti(String mbti) {this.mbti = mbti;}
    public String getGender(){
        return gender;
    }
    public void setGender(String gender){
        this.gender = gender;
    }



}
