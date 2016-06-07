var mutantsUrl = 'https://mutant-school.herokuapp.com/api/v1/mutants';

$(document).on('click', 'a.delete', function(ev) {
  var li = $(ev.currentTarget).closest('li');
  var id = li.data('id');
  deleteMutant(id, li);
});

$(document).on('click', 'a.edit', function(ev) {
  var li = $(ev.currentTarget).closest('li');
  var id = li.data('id');
  var mutantName = li.find('.mutant-name').text();
  var form = $('form#edit_mutant').get(0);
  $(form.mutantName).val(mutantName);
  $(form.mutantId).val(id);
});

$('form#new_mutant').on('submit', createMutant);
$('form#edit_mutant').on('submit', updateMutant);

$(function() {
  $.get({
    url: mutantsUrl,
    success: processMutants
  });
});
