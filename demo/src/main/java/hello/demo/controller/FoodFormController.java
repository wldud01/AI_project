package hello.demo.controller;

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
@RequestMapping("/api")
public class FoodFormController {
    private final FoodRecInputService foodRecInputService;

    @Autowired
    public FoodFormController(FoodRecInputService foodRecInputService){
        this.foodRecInputService = foodRecInputService;
        System.out.println("memberService = " + foodRecInputService.getClass());
    }
    //food input json으로 받음 - 저장만 일단 해둠
    @PostMapping("/recommend/new")
    public String create(@RequestBody FoodForm form){
        FoodRecInput foodRecInput = new FoodRecInput();
        foodRecInput.setUserId(form.getUserName());
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
