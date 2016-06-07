function createMutant(ev) {
  ev.preventDefault();
  var mutantName = ev.currentTarget.mutantName.value;
  $.post({
    url: mutantsUrl,
    data: {
      mutant: {
        mutant_name: mutantName,
        real_name: 'Not-So-Super ' + mutantName,
        power: 'Ajax!'
      }
    },
    success: addMutant
  });
}
