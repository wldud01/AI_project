package hello.demo;



import hello.demo.aop.TimeTraceAop;
import hello.demo.repository.*;
import hello.demo.service.ContentService;
import hello.demo.service.FoodRecInputService;
import hello.demo.service.MemberService;
import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;


import java.util.Arrays;

@Configuration
public class SpringConfig {


    private final EntityManager em;

    @Autowired
    public SpringConfig(EntityManager em){
        this.em = em;
    }
    // Member repository DI
    @Bean
    public MemberService memberService(){
        return new MemberService(memberRepository());
    }

    @Bean
    public MemberRepository memberRepository(){
        // return new MemoryMemberRepository();
        //return new JdbcTemplateMemberRepository(dataSource);
        return new JpaMemberRepository(em);
    }
    // Food input value repository DI
    @Bean
    public FoodRecInputService foodRecInputService(){
        return new FoodRecInputService(foodRecInputRepository());
    }

    @Bean
    public FoodRecInputRepository foodRecInputRepository(){
        // return new MemoryMemberRepository();
        //return new JdbcTemplateMemberRepository(dataSource);
        return new JpaFoodRecInputRepository(em);
    }
    // Contents repository DI
    @Bean
    public ContentService contentService(){
        return new ContentService(contentRepository());
    }

    @Bean
    public ContentRepository contentRepository(){
        // return new MemoryMemberRepository();
        //return new JdbcTemplateMemberRepository(dataSource);
        return new JpaContentRepository(em);
    }
    // time trace Aop
    @Bean
    public TimeTraceAop timeTraceAop(){
        return  new TimeTraceAop();
    }

    //Swagger API 문서
    @Bean
    public OpenAPI openAPI() {
        return new OpenAPI()
                .components(new Components())
                .info(apiInfo());
    }

    private Info apiInfo() {
        return new Info()
                .title("Springdoc 테스트")
                .description("Springdoc을 사용한 Swagger UI 테스트")
                .version("1.0.0");
    }

    // CORS 문제 해결
    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(Arrays.asList("http://localhost:3000"));
        config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS", "PATCH"));
        config.setAllowCredentials(true);
        config.addAllowedHeader("*");
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}
