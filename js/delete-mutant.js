function deleteMutant(id) {
  $.ajax({
    url: mutantsUrl + '/' + id,
    method: 'delete',
    success: function() {
      alert('BUHLEETED');
    }
  });
};
