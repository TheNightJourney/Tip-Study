    // Journal Function
  
  function openPopup() {
    document.getElementById("popup").style.display = "block";
  }
  
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }
  
  function submitJournalEntry() {
    // Get the journal entry from the form
    var journalEntry = document.getElementById("journal-entry").value;

  // get the current date and time
  var date = new Date();
  var timestamp = date.toString();

  // save the journal entry to local storage
  localStorage.setItem(timestamp, journalEntry);
    
    // Send the journal entry to the server or save it locally
    
    closePopup();
  }

  function clearEntries() {
        localStorage.clear()}

  // Recall the Journal
  function recallEntries() {
    // get all of the keys in local storage
  var keys = Object.keys(localStorage);
  
  // loop through the keys and retrieve the corresponding journal entries
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var journalEntry = localStorage.getItem(key);

    // display the journal entry on the page
    var div = document.createElement('div');
    div.innerHTML = '<p><strong>' + key + '</strong>: ' + journalEntry + '</p>';
    document.body.appendChild(div);
  }
  }


    // Scroll Function

  window.onscroll = function() {myFunction()};
  
  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;


  // Star Function

  type="text/javascript"
  function star_function(){
      let counter = 750;
      let background = document.querySelector('.background');
      let i = 0;
      while (i < counter){
          let single_star = document.createElement("i");
          let a = Math.floor(Math.random() * window.innerWidth);
          let b = Math.floor(Math.random() * window.innerHeight);
          let time_taken = Math.random() * 10;
          let overall = Math.random() * 2;

          single_star.style.left = a + 'px';
          single_star.style.top = b + 'px';
          single_star.style.width = 1 + overall + 'px';
          single_star.style.height = 1 + overall + 'px';

          single_star.style.animationDuration = 5 + time_taken + 's';
          single_star.style.animationDelay = time_taken + 's';

          background.appendChild(single_star);
          i++;
      }       
   }
