function processMutants(mutants) {
  $.each(mutants, function(i, mutant) {
    addMutant(mutant);
  });
}

function addMutant(mutant) {
  var li = $('li.template')
    .clone()
    .removeClass('template')
    .attr('data-id', mutant.id);

  li.find('.mutant-name')
    .html(mutant.mutant_name);

  $('#mutantList').append(li);
}
