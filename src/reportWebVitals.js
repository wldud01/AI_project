const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
// 앱의 퍼포먼스 시간들을 분석하여 객체 형태롤 보여주는 것이 목적
/**
 * CLS
 *  시각적인 안정성에 대한 지표
 *  세션 기간이라는 하나 이상의 레이아웃 이동이 이뤄지는 경우에 의해 점수
 *  0.1이하는 good
 *  0.25이상이면 bad
 * FID
 *  다음 액션이 가능하게 되는 시간
 *  JS 기반의 컨트롤을 사용할 때 요청받는 액션의 처리를 보류하는 시간
 *  구글에서 페이지 로드 중 발생하는 입력 작업 불가능 시간의 합계인 TBT를 통해 측정
 *  100ms 이하면 good
 *  300ms 이상이면 bad
 * FCP
 *  페이지가 로드되기 시작한 시점부터 컨텐츠의 일부가 화면에 렌더링 시작한 시점까지의 시간
 *  1.8초 이하이면 good
 *  3.0초 이상이면 bad
 * LCP
 *  웹페이지 로딩 속도
 *  HTML의 모든 요소가 랜더링 완료까지 걸리는 시간
 *  2.5초 이하일 경우 good
 *  4초이상일 경우 bad
 * TTFB
 *  요청 시간과 그에 해당하는 자원의 첫바이트가 도달하는 시간을 의미
 *  800ms 이하면 good
 *  1800ms 이상이면 bad
 */
