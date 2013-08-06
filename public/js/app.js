$(function(){
  $(document).foundation();

  if (!localStorage.answers) localStorage.answers = JSON.stringify([]);

  $('.fb-share').on('click', function(e){
    e.preventDefault();

    FB.ui({
      method: 'feed',
      display: 'touch',
      link: 'http://www.combia.com.co',
      picture: 'http://res.cloudinary.com/hlm-business-inc/image/upload/c_scale,h_200/v1375757246/combia_noiba6.jpg',
      name: 'Combia - Inspiración',
      caption: 'Descubre el alma del café',
      description: 'Acabo de vivir la mejor experiencia de mi vida en el corazón de la cultura cafetera',
    }, function(response){
      if( response != null && response.error_code == null ) {
        console.log('Acabas de inspirar!');
      } else {
        console.log('Inspira a tu familia y amigos a través de la vivencia del café');
      }
    });
  });

  $('div.step .answer').on('click', function(e){
    e.preventDefault();

    // get current answer and next step
    var answer = $(this);
    var step = answer.parents('div.step');

    var nextStep = step.next();

    // save the answer
    var answerData = answer.attr('data-answer');

    if( answerData != '' ) {
      var answers = JSON.parse(localStorage["answers"]);
      answers.push(answerData);
      localStorage["answers"] = JSON.stringify(answers);
    }

    // animate transition
    step.fadeOut(200, function(){
      nextStep.fadeIn(200);
    });
  });

});
