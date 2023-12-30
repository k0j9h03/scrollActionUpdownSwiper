// 콜백 함수
let stick = false;
let firstScrollTop = 0;
let lastScrollTop = 0;

const worldcontainer = document.querySelector('.innerworld');
const photocontainer = document.querySelector('.photocontainer');
const photocontainer2 = document.querySelector('#photocontainer2');

const callback = (event, observer) => {
    event.forEach(entry => {
        entry.isIntersecting ? handlePhotoContainerVisible() : handlePhotoContainerNotVisible();
    });
};

const handlePhotoContainerVisible = () => {
    worldcontainer.style.position = "sticky";
    worldcontainer.style.top = "0"; // 요소를 상단에 고정
    stick = true;
}

const handlePhotoContainerNotVisible = () => {
    worldcontainer.style.position = "sticky";
    worldcontainer.style.bottom = "0";
    worldcontainer.style.backgroundColor = "black";
    stick = false;
}

const handleImage = () => {
    firstScrollTop = window.scrollY; // 현재 스크롤 위치 저장
    lastScrollTop = firstScrollTop + 5000;

    const scrollHeight = 5000 - window.innerHeight;
    const insetTopReverse = (firstScrollTop / (scrollHeight + firstScrollTop)) * 100
    const percentage = 100 - ((5.88 * insetTopReverse) - 280.24);

    photocontainer2.style.clipPath = `inset( ${percentage}% 0 0 0)`;
    console.log(percentage);
}

const handleScroll = () => {
    if (stick) {
        handleImage();
    }
}

// Handle Scroll 등록
window.addEventListener('scroll', handleScroll);

// Intersection Observer 생성
const options = {
    root: null, // 뷰포트를 기준으로 설정
    rootMargin: '0px', // root의 마진
    threshold: 0.6 // 요소의 50%가 보여질 때 감지
};
const observer = new IntersectionObserver(callback, options);
observer.observe(photocontainer);
