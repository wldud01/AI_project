package hello.demo.controller;

import hello.demo.domain.Member;

import java.util.List;

public class FoodForm {
    // user id
    private String userId;
    // 조리 방법 category
    private List<String> cookedCategory;
    // 사용자가 원하는 칼로리
    private String selectedKcal;
    // 사용자가 원하는 탄수화물 비율
    private  String selectedCar;
    // 사용자가 원하는 단백질 비율
    private String selectedProtein;
    // 지방 비율
    private String selectedFat;
    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getSelectedCar() {
        return selectedCar;
    }

    public void setSelectedCar(String selectedCar) {
        this.selectedCar = selectedCar;
    }

    public String getSelectedFat() {
        return selectedFat;
    }

    public void setSelectedFat(String selectedFat) {
        this.selectedFat = selectedFat;
    }

    public String getSelectedKcal() {
        return selectedKcal;
    }

    public void setSelectedKcal(String selectedKcal) {
        this.selectedKcal = selectedKcal;
    }

    public String getSelectedProtein() {
        return selectedProtein;
    }

    public void setSelectedProtein(String selectedProtein) {
        this.selectedProtein = selectedProtein;
    }


    public List<String> getCookedCategory() {
        return cookedCategory;
    }

    public void setCookedCategory(List<String> cookedCategory) {
        this.cookedCategory = cookedCategory;
    }
}
