// 콜백 함수
let stick = false;
let firstScrollTop = 0;
let lastScrollTop = 0;

let callback = (event, observer) => {
    event.forEach(entry => {
      if (entry.isIntersecting) {
        // photocontainer가 뷰포트에 들어올 때 실행할 작업
        let erasingImage = document.querySelector('.photocontainer');
        let worldcontainer = document.querySelector('.innerworld')

        worldcontainer.style.top = "0"; // 요소를 상단에 고정
        worldcontainer.style.position = "sticky";
        console.log("photocontainer가 화면에 들어왔습니다!");
        stick = true;
        console.log(stick)
      } else {
        let erasingImage = document.querySelector('.photocontainer');
        let worldcontainer = document.querySelector('.innerworld')
        // photocontainer가 뷰포트에서 벗어났을 때 실행할 작업
        worldcontainer.style.position = "sticky";
        worldcontainer.style.bottom = "0";
        worldcontainer.style.backgroundColor = "black";
        stick = false;
        console.log("photocontainer가 화면에서 벗어났습니다!", stick);
      }
    });
  };


  window.addEventListener('scroll', function() {
    if (stick) {
      이미지();
    }
  });
  
  function 이미지() {
    firstScrollTop = window.scrollY; // 현재 스크롤 위치 저장
    lastScrollTop = firstScrollTop + 5000;
    let container2 = document.querySelector('#photocontainer2');
    let 스크롤가능높이 = 5000 - window.innerHeight;
    let insetTopReverse = ( firstScrollTop / (스크롤가능높이 + firstScrollTop) ) * 100
    let percentage = 100-( (5.88 *insetTopReverse) - 288.24);
    container2.style.clipPath = `inset( ${percentage}% 0 0 0)`;
    console.log(percentage);
  }

  
  // Intersection Observer 생성
  let options = {
    root: null, // 뷰포트를 기준으로 설정
    rootMargin: '0px', // root의 마진
    threshold: 0.6 // 요소의 50%가 보여질 때 감지

  };
  
  let observer = new IntersectionObserver(callback, options);
  
  // photocontainer 요소 관
  let target = document.querySelector('.photocontainer');
  observer.observe(target);
