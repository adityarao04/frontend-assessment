





(function tabHandler() {


    const setLoading = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Loading complete");
            }, 2000); // 2 seconds timeout
        });
    };
   
    const addEventListners = () => {
          // JavaScript for tab switching
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');
    tabs.forEach((item) => {
        console.log(item.textContent); // logs "Item 1", "Item 2", "Item 3"
    });

    tabs.forEach(tab => {
        tab.addEventListener('click',() => {
            // Remove active class from all tabs and content sections
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));
            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            document.getElementById('tab-loading').style = 'display: block'
            
            setLoading().then((message) => {
                contents.forEach(content => content.classList.remove('active'));
                document.getElementById('tab-loading').style = 'display: none'
                document.getElementById(tab.getAttribute('data-tab')).classList.add('active');
            });

           
        });
    });

    // Set the first tab and content as active by default
    tabs[0].classList.add('active');
    contents[0].classList.add('active');
    }




    addEventListners()



})()


const dialog = document.querySelector("dialog");
const showButton = document.getElementById("openModal");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});


function closeDialog(){
    dialog.close();
}

// Add an event listener for the Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeDialog();
    }
});




