var mutantsUrl = 'https://mutant-school.herokuapp.com/api/v1/mutants';

function processMutants(mutants) {
  $.each(mutants, function(i, mutant) {
    addMutant(mutant);
  });
}

function addMutant(mutant) {
  $('#mutantList').append('<li>' + mutant.mutant_name + '</li>');
}

$.get({
  url: mutantsUrl,
  success: processMutants
});
