/*
Init app
interact with DOM
interact with localstorage

 */

$(document).ready(function(){
  // this is where we jquery
  //var keyData = 'ourKey'; // going to need to make this dynamic?


  $('.btn-add').on('click', function(e){
    // console.log(e);
    var note = $('.input-key').val();
    var details = $('.input-value').val();
    // write to db
    localStorage.setItem(note, details);
    // read from db
    var displayText = note + ' | ' + localStorage.getItem(note);
    // <div class="display-data-item" data-keyValue="keyData">valueData</div>
    // if you use backticks ` you can use ${templateLiterals}
    // $('.container-data').html('<div class="display-data-item" data-keyValue="'+ keyData +'">'+ keyData + "\n\t" + valueData+'</div>');
    // $('.container-data').append('<div class="display-data-item" data-keyValue="'+ note +'">'+ note + '<div class="close">' + '   ' + details + '     X </div>' + '</div>');
    // $('.container-data').append('<div class="display-data-item">' + '<input type="checkbox">' + note + '<div class="close">' + '   ' + details + 'X </div>' + '</div>');
    if (note === "") {
      $('.container-data').append(`<div><pre class="close"> ${details}         X </pre></div>`)
    } else {
    $('.container-data').append(`<div class="display-data-item"><input type="checkbox" class="hidden"> <label class="checkbox-container"> <span class="check"></span> <span class="text">${note}</span>  </label><pre class="close"> ${details}         X </pre></div>`);
    }
    $('.input-key').val('');
    $('.input-value').val('');
  });

  $('.trial').on('click', function(e){
    // console.log(e);
    var note = $('.input-key').val();
    var details = $('.input-value').val();
    localStorage.setItem(note, details);
    var displayText = note + ' | ' + localStorage.getItem(note);
    if (note === "" & details === "") {
      return ""
    }
    if (note === "") {
      $('.container-data').append(`<div><pre class="close"> ${details}         X </pre></div>`)
    } else {
    $('.container-data').append(`<div class="display-data-item"><input type="checkbox" class="hidden"> <span class="text">${note}</span> <pre class="close"> ${details}         X </pre></div>`);
    }
    $('.input-key').val('');
    $('.input-value').val('');
  });


  // update db
    // need to expand when  more than 1 item is added

  // delete item
  // $('.container-data').on('click', '.display-data-item', function(e){
  //   //console.log(e.currentTarget.dataset.keyvalue);
  //   var keyData = e.currentTarget.dataset.keyvalue;
  //   localStorage.removeItem(keyData);
  //   $('.container-data').text('');
  // });

  $('.container-data').on('dblclick', '.close', function(){
    $(this).parent().remove();
  });

  // delete all?
  $('.btn-clear').click(function(){
    localStorage.clear();
    $('.container-data').text('');
  });

}); 