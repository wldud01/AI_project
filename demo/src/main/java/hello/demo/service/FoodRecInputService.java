package hello.demo.service;

import hello.demo.domain.FoodRecInput;
import hello.demo.domain.Member;
import hello.demo.repository.FoodRecInputRepository;
import hello.demo.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional
public class FoodRecInputService {

   private FoodRecInputRepository foodRecInputRepository;

    @Autowired
    public FoodRecInputService(FoodRecInputRepository foodRecInputRepository){
        this.foodRecInputRepository= foodRecInputRepository;
    }
    // 회원 가입하면 id만 반한한다


    public String saveInput(FoodRecInput foodRecInput){

            foodRecInputRepository.save(foodRecInput);
            return foodRecInput.getCookedCategory();


    }
    // 전체 회원 조회
    public List<FoodRecInput> findContent(){
        return foodRecInputRepository.findAll();
    }

}
