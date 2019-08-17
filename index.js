//Create a function to allow the user to enter additional items to purchase by entering text and hitting "Return" or clicking the "Add item" button
$(function() {
    //Target the form submission to add an event
    $('#js-shopping-list-form').submit(function(event) {
        //Add a method to prevent the page from reloading after an item is added
        event.preventDefault();
        //Create a variable to hold the value of the entered item
        const newItem = $('#shopping-list-entry').val();
        //Set the value as a string
        $('#shopping-list-entry').val('');
        //Target the shopping list and use the .append() method to add the newItem to the shopping list
        $('.shopping-list').append(
            //Use template literals ie. backticks to create a new HTML <li> 
            `<li>
              <span class="shopping-item">${newItem}</span>
              <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                  <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                  <span class="button-label">delete</span>
                </button>
              </div>
            </li>`
        );
    });
});

//After clicking on a button 'Delete', delete the item from the list
$(function() {
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
      $(this).closest('li').remove();
    })
})

//After clicking on a button 'Check', check and uncheck items on the list
$(function() {
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  })
})