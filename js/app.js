var mutantsUrl = 'https://mutant-school.herokuapp.com/api/v1/mutants';

$(function() {
  $.get({
    url: mutantsUrl,
    success: processMutants
  });
});
