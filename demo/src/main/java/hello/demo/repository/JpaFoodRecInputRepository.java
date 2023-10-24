package hello.demo.repository;

import hello.demo.domain.FoodRecInput;
import hello.demo.domain.Member;
import jakarta.persistence.EntityManager;

import java.util.List;
import java.util.Optional;


public class JpaFoodRecInputRepository implements FoodRecInputRepository {
    private final EntityManager em;

    public JpaFoodRecInputRepository(EntityManager em) {
        this.em = em;
    }

    @Override
    public FoodRecInput save(FoodRecInput foodRecInput) {
        em.persist(foodRecInput);
        return foodRecInput;
    }

    @Override
    public Optional<FoodRecInput> findById(Long id) {
        FoodRecInput foodRecInput = em.find(FoodRecInput.class, id);
        return Optional.ofNullable(foodRecInput);
    }

    @Override
    public Optional<FoodRecInput> findByUserId(String userId) {
        List<FoodRecInput> result = em.createQuery("select fr from FoodRecInput fr where fr.userId = :userId", FoodRecInput.class)
                .setParameter("userId", userId)
                .getResultList();
        return result.stream().findAny();
    }

    @Override
    public Optional<FoodRecInput> findByCategory(List<String> category) {
        List<FoodRecInput> result = em.createQuery("select fr from FoodRecInput fr where fr.cookedCategory IN :category", FoodRecInput.class)
                .setParameter("category", category)
                .getResultList();
        return result.stream().findAny();
    }

    @Override
    public List<FoodRecInput> findByFoodInfo(String category) {
        // Implement this method based on the structure of FoodRecInput entity and your requirements.
        // You need to query the database for FoodRecInput records that match the given category.
        // The exact implementation will depend on your entity's structure.
        // For example, if FoodInfo is a field in the entity, you can create a query that filters by FoodInfo.
        // You can modify the query to match your entity's structure.
        return em.createQuery("SELECT fr.selectedKcal, fr.selectedCar,fr.selectedProtein,fr.selectedFat FROM FoodRecInput fr", FoodRecInput.class)
                .setParameter("category", category)
                .getResultList();
    }

    @Override
    public List<FoodRecInput> findAll() {
        List<FoodRecInput> result = em.createQuery("select fr from FoodRecInput fr", FoodRecInput.class)
                .getResultList();
        return result;
    }
}
