function updateMutant(ev) {
  ev.preventDefault();
  var f = ev.currentTarget;
  var mutantName = f.mutantName.value;
  var id = f.mutantId.value;
  $.ajax({
    url: mutantsUrl + '/' + id,
    method: 'put',
    data: {
      mutant: {
        mutant_name: mutantName,
        real_name: 'Not-So-Super ' + mutantName,
        power: 'Ajax!'
      }
    },
    success: function(mutant) {
      var li = $('li[data-id="' + mutant.id + '"]');
      var span = li.find('.mutant-name');
      span.text(mutant.mutant_name);
    }
  });
};
