//newletter 슬라이드
const letter = new Swiper('.letter',{
    slidesPerView:4,
    spaceBetween:49,
    slidesPerGroup:1,
    autoplay:{delay:2000},
    loop:true,
    navigation:{
        nextEl:'.slide_btn .next',
        prevEl:'.slide_btn .prev',
    },
})