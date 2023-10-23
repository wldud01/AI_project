package hello.demo.controller;

public class MemberForm {
    // Controller 에서 MemberForm 객체를 찾아서 key이름과 같은 변수에 값을 넣어줌
    private String name;
    private String userId;
    private String email;
    private String createdDate;
    private String mbti;
    private String gender;

    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name = name;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserId() {
        return userId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMbti() {
        return mbti;
    }

    public void setMbti(String mbti) {
        this.mbti = mbti;
    }

    public String getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(String createdDate) {
        this.createdDate = createdDate;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }
}
