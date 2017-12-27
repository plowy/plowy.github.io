$(document).ready(function(){
  $('.dropdown-open').each(function(){
    if (localStorage[this.id] === 'true') {
      this.checked = true;
    }
  })
  $('.dropdown-open').click(function() {
    localStorage.setItem(this.id, this.checked)
  })
})
