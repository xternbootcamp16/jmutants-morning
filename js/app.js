var mutantsUrl = 'https://mutant-school.herokuapp.com/api/v1/mutants';

$(document).on('click', 'a.delete', function(ev) {
  var li = $(ev.currentTarget).closest('li');
  var id = li.data('id');
  deleteMutant(id, li);
});

$('form').on('submit', createMutant);

$(function() {
  $.get({
    url: mutantsUrl,
    success: processMutants
  });
});
