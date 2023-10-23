package hello.demo.controller;

import hello.demo.domain.Member;

public class FoodForm {
    private String userName;
    private String cookedCategory;
    private String selectedKcal;
    private  String selectedCar;
    private String selectedProtein;
    private String selectedFat;
    public String getUserName() {
        return userName;
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


    public String getCookedCategory() {
        return cookedCategory;
    }

    public void setCookedCategory(String cookedCategory) {
        this.cookedCategory = cookedCategory;
    }
}
