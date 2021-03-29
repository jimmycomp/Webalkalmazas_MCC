let currentPhoto = 0;
let imagesData = [
    {photo: 'images/1.jpg',
    title: 'Város a felhőben',
    description: 'Torony is látszik!'},
    {photo: 'images/2.jpg',
    title: 'Hőlégballon',
    description: 'Hőlégballon a levegőben!'},
    {photo: 'images/3.jpg',
    title: 'Vörös égbolt',
    description: 'Fa a vörös égbolt színeiben!'},
    {photo: 'images/4.jpg',
    title: 'Lepkék',
    description: 'Lepkék a kékben!'},
    {photo: 'images/5.jpg',
    title: 'Érdekes fények',
    description: 'Érdekes fények az égen!'},
    {photo: 'images/6.jpg',
    title: 'Művelési terület',
    description: 'Művelési terület a hegyekben!'},
    {photo: 'images/7.jpg',
    title: 'Patak',
    description: 'Patak ősszel!'},
    {photo: 'images/8.jpg',
    title: 'Öböl',
    description: 'Öböl a tengerparton!'},
];


let loadPhoto= (photoNumber) => {
    $('#photo').attr('src',imagesData[photoNumber].photo);
    $('#photo-title').text(imagesData[photoNumber].title);
    $('#photo-description').text(imagesData[photoNumber].description);
    let pozi = $(`.thumbnail[data-number="${photoNumber}"]`).offset(); 
    let kontenerhely = $("#container").offset();
    let hpozi=pozi.left-kontenerhely.left-3+$(`.thumbnail[data-number="${photoNumber}"]`).width()/2;
    $(".arrow-up").css("left",`${hpozi}px`);
}

$(document).ready(() => {
    loadPhoto(currentPhoto);
});

$('#jobb').click(() => {
    if (currentPhoto<imagesData.length-1) {
            currentPhoto++;         
    }
    else { 
        currentPhoto=0;
    }
    loadPhoto(currentPhoto);
  })

  $('#bal').click(() => {
    if (currentPhoto>0) {
            currentPhoto--;
    }
    else { 
        currentPhoto=imagesData.length-1;
    }
    loadPhoto(currentPhoto);
  })

imagesData.forEach((item,index) => {
        $('.kepek').append(`<div class="thumbnail" data-number="${index}">
                    <img src="${item.photo}" data-number="${index}" alt="${item.title}"> 
                    </div>`)  
        $(".thumbnail").click((event) => {
           currentPhoto=parseInt($(event.target).attr("data-number"));
           loadPhoto(currentPhoto);
        });            
  });

imagesData.forEach((item,index) => {
    $('.szoveg').append(`<div class="title" data-number="${index}">${item.title}</div>`);
});

$( ".thumbnail").on( "mouseenter mouseleave", function( event ) {
    let melyik = this.getAttribute("data-number");
    let kephely = $(this).offset();
    let kontenerhely = $("#container").offset();
    let hely=kephely.left-kontenerhely.left;
    $(".szoveg").css('left',`${hely}px`);
    $(`.title[data-number="${melyik}"]`).toggleClass("active");
  });