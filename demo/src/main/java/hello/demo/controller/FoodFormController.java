package hello.demo.controller;

import hello.demo.domain.Content;
import hello.demo.domain.FoodRecInput;
import hello.demo.domain.Member;
import hello.demo.service.FoodRecInputService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/spring")
public class FoodFormController {
    private final FoodRecInputService foodRecInputService;

    @Autowired
    public FoodFormController(FoodRecInputService foodRecInputService){
        this.foodRecInputService = foodRecInputService;
        System.out.println("memberService = " + foodRecInputService.getClass());
    }
    //food input json으로 받음 - 추후에 Data로 활용하기 위해 Data로 저장한다고 가정

    @PostMapping("/recommend/new")
    public String create(@RequestBody FoodForm form){
        //food 객체 생성
        FoodRecInput foodRecInput = new FoodRecInput();

        foodRecInput.setUserId(form.getUserId());
        foodRecInput.setCookedCategory(form.getCookedCategory());
        foodRecInput.setSelectedKcal(form.getSelectedKcal());
        foodRecInput.setSelectedCar(form.getSelectedCar());
        foodRecInput.setSelectedProtein(form.getSelectedProtein());
        foodRecInput.setSelectedFat(form.getSelectedFat());

        foodRecInputService.saveInput(foodRecInput);
        return "redirect:/";
    }

    //아마 사라질 URL food recommend는 flask쪽 서버가 처리
    @GetMapping("/recommend/result")
    @ResponseBody
    public ResponseEntity<List<FoodRecInput>>  FoodRecResult(Model model){
        List<FoodRecInput> foodRecInputs = foodRecInputService.findContent();
        return ResponseEntity.ok(foodRecInputs);
    }
}
