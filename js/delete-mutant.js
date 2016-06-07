function deleteMutant(id, li){
  $.ajax({
    url: mutantsUrl + '/' + id,
    method: 'delete',
    success: function(){
      if (li) {
          li.remove();
      }
    }
  });
};
