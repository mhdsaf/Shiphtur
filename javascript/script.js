$('#year').text(new Date().getFullYear());
$('.carousel').carousel({
    interval: 3000,
    keyboard: true,
    pause: 'hover',
    wrap: true
});