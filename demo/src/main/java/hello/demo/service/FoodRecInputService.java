package hello.demo.service;

import hello.demo.domain.Content;
import hello.demo.domain.FoodRecInput;
import hello.demo.repository.FoodRecInputRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public class FoodRecInputService {

    // 사용자가 선택한 음식 영양소 Repository
       private final FoodRecInputRepository foodRecInputRepository;

    // 사용자가 선택한 음식 영양소 Feature
    @Autowired
    public FoodRecInputService(FoodRecInputRepository foodRecInputRepository){
        this.foodRecInputRepository= foodRecInputRepository;
    }
    public List<String> saveInput(FoodRecInput foodRecInput){

            foodRecInputRepository.save(foodRecInput);
            return foodRecInput.getCookedCategory();
    }
    public List<FoodRecInput> getFoodByCategory(List<Integer> category) {
        return foodRecInputRepository.findByCategory(category);
    }
    // 전체 회원 조회
    public List<FoodRecInput> findContent(){
        return foodRecInputRepository.findAll();
    }

}
