particlesJS("particles-js", {"particles":{"number":{"value":90,"density":{"enable":true,"value_area":4409.383167380188}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":true,"speed":1,"size_min":1,"sync":false}},"line_linked":{"enable":true,"distance":120,"color":"#ffffff","opacity":0.20517838682439088,"width":0.6313181133058181},"move":{"enable":true,"speed":2,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
   });

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
  // document.body.classList.toggle('dark');
  if(chk.checked){
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
  }
  if(!chk.checked){
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
  }
});

$('.main-section').scrollspy({ target: '#navbar' })

window.addEventListener('scroll', function(){
    console.log(window.scrollY, window.innerHeight);
    if(window.scrollY > window.innerHeight){
      document.getElementById('navbar').classList.add("fixed-top");
    } else {
      document.getElementById('navbar').classList.remove("fixed-top");
    }
  });