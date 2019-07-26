/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

/**
 * - Only loads JavaScript if the HTML and CSS are loaded first
 */
window.addEventListener('DOMContentLoaded', () => {
    /**
     * @const {studentList} - Holds an array made of list items for student information
     * @const {itemsPerPage} - Contains displayed number of list items per page
     */
    const studentList = document.getElementsByClassName('student-item');
    const itemsPerPage = 10;
    const getHeadDIV = document.querySelector('.page-header');
    const studentNames = document.querySelectorAll('h3');
    const appendToList = document.querySelector('.student-list');
 
    /**
     * @function removeStudents - loop that turns the list items display to none
     */
    const removeStudents = () => {
        for (let i = 0; i < studentList.length; i ++) {
            studentList[i].style.display = 'none';
        }
    }

    /**
     * - Creates new HTML Element
     * @param {HTMLTag} name - Tag name to be assigned to the HTML element being created.
     * @param {Type} attribute - Type attribute to be assigned to the element
     * @param {Value} value - Value to be assigned to the type attribute.
     */
    const createNewElement = (name, attribute, value) => {
        const elementName = document.createElement(name);
        elementName[attribute] = value;
        return elementName;
    }

    /**
     * @function showPage - Create the `showPage` function to hide all of the items in the list except for the ten you want to show.
    * @param {Array} list - List of students passed into the function to be looped over.
    * @param {Number} page - Counter for the page number array to display number of items per page
    */
    const showPage = (list, page) => {
       const startIndex = (page * itemsPerPage) - itemsPerPage;
       const endIndex = page * itemsPerPage;
       let currentPage;
       removeStudents();
       for (let i = 0; i < list.length; i ++){
          currentPage = list[i];
          if (i >= startIndex && i < endIndex) {
             currentPage.style.display = 'block';
          }  
       }
    }

    /**
     * @function addNoResults - creates H2 element, appends it to the page then conceals it for later use when no results are found
     */
    
    const addNoResults = () => {
        const noResults = document.createElement('h2');
        appendToList.appendChild(noResults);
        noResults.textContent = 'Sorry we could not find that person... Try again.';
        noResults.id = 'no-results';
        noResults.style.display = 'none';
    }
    

    /**
     * @function createSearch - Add the search bar to the page 
     * - Create all of the elements and add them to the header
     * - Gives the elements tag names and type attributes
     */
    const createSearch = () => {
        const div = createNewElement('div', 'className', 'student-search');
        getHeadDIV.appendChild(div);
 
        const input = createNewElement('input', 'placeholder', 'Search for students...');
        div.appendChild(input);
 
        const button = createNewElement('button', 'textContent', 'Search');
        div.appendChild(button);
 
        // Onclick event for when the search button is clicked
        button.addEventListener('click', () => {
            const conceal = document.getElementById('no-results');
            const removeFooter = document.querySelector('div.pagination');
            conceal.style.display = 'none';
            removeStudents();
            let results = [];
            for (let i = 0; i < studentList.length; i ++) {
                if (studentNames[i].textContent.toLowerCase().includes(input.value.toLowerCase())) {
                    studentNames[i].style.display = 'block';
                    results.push(studentList[i]);
                }
            }

            if (results.length === 0) {
                conceal.style.display = 'block';
            }

            showPage(results,1);
            appendPageLinks(results);
            removeFooter.remove();
        });

        // Keyup event for when typing in the searchbar
        input.addEventListener('keyup', () => {
            const conceal = document.getElementById('no-results');
            const removeFooter = document.querySelector('div.pagination');
            conceal.style.display = 'none';
            removeStudents();
            let results = [];
            for (let i = 0; i < studentList.length; i ++) {
                if (studentNames[i].textContent.toLowerCase().includes(input.value.toLowerCase())) {
                    studentNames[i].style.display = 'block';
                    results.push(studentList[i]);
                }
            }

            if (results.length === 0) {
                conceal.style.display = 'block';
            }

            showPage(results,1);
            appendPageLinks(results);
            removeFooter.remove();
        });
 
 
     };



    /**
     * @function appendPageLinks - Creates and appends functioning pagination links.
     * @param {Array} list - Pass in the global array studentList
     */
    const appendPageLinks = (list) => {
       const numPages = ((list.length)/itemsPerPage);
       const endOfPage = document.querySelector('.page');
       const createDIV = document.createElement('div');
       const UL = document.createElement('ul');
       // Create div + ul element then append ul to div
       createDIV.className = 'pagination';
       endOfPage.appendChild(createDIV);
       createDIV.appendChild(UL);
       // Loop to build list elements and append to page
       for (let i = 0; i < numPages; i ++) {
 
          let LI = document.createElement('li');
          let Link = document.createElement('a');
 
          Link.textContent = (i + 1);
          Link.href = '#';
          
          if (Link.textContent === '1'){
              Link.className = 'active';
          }

          UL.appendChild(LI);
          LI.appendChild(Link);
       }
       // Get all the links and set their class name to active
       // add click event listener to page index footer with loop remove active class unless targeted as active
       UL.addEventListener('click', (e, index) => {
        const allLinks = document.querySelectorAll('a');
 
          for (let i = 0; i < allLinks.length; i ++) {
             allLinks[i].className = '';
          }
          const targetLink = e.target;
          targetLink.className = 'active';

          index = targetLink.textContent;
          showPage(studentList, parseInt(index));
 
       });
       
    };
 
    
    // Call the functions
    addNoResults();
    appendPageLinks(studentList);
    showPage(studentList,1);
    createSearch();
    
 });
 