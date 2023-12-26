// 콜백 함수
let callback = (event, observer) => {
    event.forEach(entry => {
      if (entry.isIntersecting) {
        // photocontainer가 뷰포트에 들어올 때 실행할 작업
        let erasingImage = document.querySelector('.photocontainer');


        erasingImage.style.position = "sticky";
        console.log("photocontainer가 화면에 들어왔습니다!");
      }
    });
  };
  
  // Intersection Observer 생성
  let options = {
    root: null, // 뷰포트를 기준으로 설정
    rootMargin: '0px', // root의 마진
    threshold: 0.99 // 요소의 50%가 보여질 때 감지

  };
  
  let observer = new IntersectionObserver(callback, options);
  
  // photocontainer 요소 관
  let target = document.querySelector('.photocontainer');
  observer.observe(target);
  