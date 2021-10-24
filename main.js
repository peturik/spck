

let imgFind = 'http://1';
let nextImg;
let prevImg;

function gallery() {
  $('.modal').each(function(key) {
    let srcImg = $(this).attr('src');
    
    if (nextImg == undefined){
      if (imgFind == srcImg) {
        nextImg = $(this).next().attr('src');
      
        console.log(next.Img);
        return false;
      }
    }else if(nrxtImg == srcImg){
     // alert(this);
      nextImg = $(this).next().attr('src');
      console.log(nextImg);
      return false;
    }
  })
}

$('.gallery').click(gallery)




$('.view img').click(function() { 
  let src = $(this).attr('src'); 
  $('.popup img').attr('src',src); 
  $('.popup').fadeIn(); 
}); 

$('.close').click(function() { 
  $('.popup').fadeOut(); 
});



