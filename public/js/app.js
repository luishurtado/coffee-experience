$(function(){
  $(document).foundation();

  if (!localStorage.answers) localStorage.answers = JSON.stringify([]);

  $('div.step .start-experience').on('click', function(e){
    e.preventDefault();

    // get current answer and next step
    var step = $(this).parents('div.step');
    var nextStep = step.next();

    // animate transition
    step.fadeOut(200, function(){
      nextStep.fadeIn(200);
    });
  });

  $('div.step .answer').on('click', function(e){
    e.preventDefault();

    // get current answer and next step
    var answer = $(this);
    var step = answer.parents('div.step');

    if( step.hasClass('last-step') ) {
      FB.ui({
        method: 'feed',
        display: 'touch',
        link: 'http://www.combia.com.co',
        picture: 'http://res.cloudinary.com/hlm-business-inc/image/upload/v1375743725/LOGO-HACIENDA-HOTEL_aagk5l.png',
        name: 'Combia - Inspiración',
        caption: 'Descubre el alma del café',
        description: 'Acabo de vivir la mejor experiencia de mi vida en el corazón de la cultura cafetera',
      }, function(response){
        if( response != null && response.error_code == null ) {
          alert('Acabas de inspirar!');
        } else {
          alert('Inspira a tu familia y amigos a través de la vivencia del café');
        }
      });

    } else {
      var nextStep = step.next();

      // save the answer
      var answers = JSON.parse(localStorage["answers"]);
      answers.push(answer.attr('data-answer'));
      localStorage["answers"] = JSON.stringify(answers);

      // animate transition
      step.fadeOut(200, function(){
        nextStep.fadeIn(200);
      });
    }

  });

});
