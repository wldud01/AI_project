package hello.demo.domain;

import jakarta.persistence.*;
@Entity
public class FoodRecInput {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String userId;
    @Column
    private String cookedCategory;
    @Column
    private String selectedKcal;
    @Column
    private  String selectedCar;
    @Column
    private String selectedProtein;
    @Column
    private String selectedFat;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
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

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getCookedCategory() {
        return cookedCategory;
    }

    public void setCookedCategory(String cookedCategory) {
        this.cookedCategory = cookedCategory;
    }
}
