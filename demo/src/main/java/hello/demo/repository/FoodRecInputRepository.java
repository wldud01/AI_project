package hello.demo.repository;

import hello.demo.domain.FoodRecInput;
import hello.demo.domain.Member;

import java.util.List;
import java.util.Optional;

public interface FoodRecInputRepository {
    // 컨텐츠 저장
    FoodRecInput save(FoodRecInput foodRecInput);

    // user_id 찾기
    Optional<FoodRecInput> findById(Long id);
    // user_name
    Optional<FoodRecInput> findByUserId(String userId);
    //user_mbti
    Optional<FoodRecInput> findByCategory(List<String> category);
    List<FoodRecInput> findByFoodInfo(String category);
    // 모든 유저
    List<FoodRecInput> findAll();

}