        // get references to form and entries element
        const form = document.querySelector('#entry-form');
        const entriesElement = document.querySelector('#entries');
      
        // add event listener to form to handle submission
        form.addEventListener('submit', event => {
          // prevent form submission
          event.preventDefault();
      
          // get values of form fields
          const title = event.target.elements.title.value;
          const content = event.target.elements.content.value;
      
          // create new entry object
          const entry = { title, content };
      
          // add entry to entries
          const entries = JSON.parse(localStorage.getItem('entries')) || [];
          entries.push(entry);
          localStorage.setItem('entries', JSON.stringify(entries));
      
          // clear form fields
          form.reset();
      
          // display entries
          displayEntries();
        });
      
        // display entries
        const displayEntries = () => {
          // get entries from local storage
          const entries = JSON.parse(localStorage.getItem('entries')) || [];
      
          // clear entries element
          entriesElement.innerHTML = '';
      
          // loop through entries and create HTML for each one
          for (const entry of entries) {
            const { title, content } = entry;
            const entryHTML = `
              <div class="entry">
                <h3>${title}</h3>
                <p>${content}</p>
              </div>
            `;
            entriesElement.innerHTML += entryHTML;
          }
        }
      
        // display entries when page loads
        displayEntries();