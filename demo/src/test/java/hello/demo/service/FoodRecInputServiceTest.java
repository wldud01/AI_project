package hello.demo.service;

import hello.demo.domain.FoodRecInput;
import hello.demo.domain.Member;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
class FoodRecInputServiceTest {
    @Autowired
    FoodRecInputService foodRecInputService;

    // before each 동작하기 전에 실행하는 각각  메소드 생성

    @Test
    void saveInput() {
        Member member = new Member();
        member.setName("spring");
        //given
        FoodRecInput foodRecInput = new FoodRecInput();
        foodRecInput.setUserId(member.getName());
        foodRecInput.setCookedCategory("한식");
        foodRecInput.setSelectedKcal("1000");
        foodRecInput.setSelectedCar("12");
        foodRecInput.setSelectedProtein("5");
        foodRecInput.setSelectedFat("8");


        //when

        //then

    }
}