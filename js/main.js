
let gnbArrow = document.querySelectorAll('.total_gnb div ul li i.fa-solid');

let toggle = document.querySelector('.toggle_btn');
let xmark = document.querySelector('.fa-xmark')

toggle.addEventListener('click', function(){
 let totalGnb = document.getElementById('gnb');
 totalGnb.classList.add('total_on');
})

xmark.addEventListener('click', function() {
 let total_gnb = document.getElementById('gnb');
 total_gnb.classList.remove('total_on');
})

 for(let i = 0; i < gnbArrow.length; i++) {
  gnbArrow[i].addEventListener('click', function(e) {
   let otherArrow = document.querySelector('.arrow_r');

   if(otherArrow != null) {
    if(otherArrow == e.target) {
     this.classList.remove('arrow_r');
    } else {
     otherArrow.classList.remove('arrow_r');
     this.classList.add('arrow_r');
    }
   } else {
    this.classList.add('arrow_r');
   }
   
  })}

  let tabList = document.querySelectorAll('#showroom ul li');
  let tabItem = document.querySelectorAll('#showroom ul li .tab_item');
  
  for(let i = 0; i<tabList.length; i++) {
    tabList[i].querySelector('.tab_btn').addEventListener('click', function(e) {
      e.preventDefault();
      for(let j = 0; j < tabList.length; j++) {
        tabList[j].classList.remove('on');
      } 
      this.parentNode.classList.add('on');
    })
  }

  $(function() {

   let subM = $('.total_gnb div ul li');

   subM.click(function() {
    $(this).find('.hide').slideToggle();
    $(this).find('i').addClass('arrow_r');
    $(this).siblings().find('i').removeClass('arrow_r');
   
    let hi = $(this).siblings().find('.hide');
    hi.slideUp();
   })

   $('.gnb ul li:nth-child(2)').click(function(){
    $(this).find('.hide').slideToggle();
   })

   $('main').click(function(){
    $('.gnb ul li:nth-child(2) .hide').slideUp();
   })

  $('.top_btn').click(function() {
    $('html, body').animate({scrollTop:'0px'}, 700);
  });


  })
