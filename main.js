'use strict';

$(function(){
  // グローバルナビのハンバーガーメニュー
  $('.menu-btn').on('click', function(){
    if($('#header').hasClass('open')){
      $('#header').removeClass('open');
    }
    else {
      $('#header').addClass('open');
    }
  });

  $('#mask').on('click', function(){
    $('#header').removeClass('open');
  });

  $('.global-menu').on('click', function(){
    $('#header').removeClass('open');
  });

  // キービジュアルのホバー切替
  $('.key-thumbs img').on('mouseover', function(){
    let img_src = $(this).attr("src");
    if($('#keyvisual img').attr("src") != img_src){
      $('#keyvisual img').fadeOut(500, function(){
        $("#keyvisual img").attr({src:img_src});
        $("#keyvisual img").fadeIn(500);
      })
    }
  })

  // QandAページのアコーディオンメニュー
  $('.qa-contents h3').on('click', function(){
    $(this).next().slideToggle();
    $(this).toggleClass('open');
  });

});

// ジャンプアップボタンの出現(JS)
window.onload = function(){
  let animation = function(){
    let pageTop = document.getElementById('top-btn');
    let rect = pageTop.getBoundingClientRect();
    let scrollTop = rect.top + window.pageYOffset;

    if(scrollTop > 800){
      pageTop.classList.add('show');
    }else{
      pageTop.classList.remove('show');
    }
    }
    window.addEventListener('scroll', animation);
  }