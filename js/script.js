/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

/**
 * @const {studentList} 
 * - Holds an array made of list items for student information
 */
const studentList = document.getElementsByClassName('student-item');
// console.log(studentList);
const itemsPerPage = 10;



/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

/**
 * - Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.
 * @param {Array} list - List of students passed into the function to be looped over.
 * @param {Number} page - Counter for the page number array to display number of items per page
 */
function showPage (list, page) {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage;
   let listDisplay = [];
   let currentPage;
   

   for (let i = 0; i < list.length; i ++){
      currentPage = list[i];
      if (i >= startIndex && i < endIndex) {
         // console.log(studentDetails[i]);
         // list[i].appendChild(studentDetails[i]);
         listDisplay.push(currentPage);
         
         // console.log(currentPage);
      }
      
   }
   // console.log(listDisplay);
   return listDisplay;
}
showPage(studentList,2);

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

/**
 * Creates and appends functioning pagination links.
 * @param {Array} list 
 */
function appendPageLinks (list) {
   const arrLength = ((list.length) - 1);
   const numPages = ((list.length)/itemsPerPage);
   let endOfList;
   let parentElement;
   let buildToPage = '';
   const buildFooter = () => {
      const createDiv = document.createElement('div');
      const createUl = document.createElement('ul');
      createDiv.className = 'pagination';
      createDiv.appendChild(createUl);
      }

      for (let i = 0; i < arrLength; i ++){
         endOfList = list[i].lastElementChild;
         
      }
   parentElement = endOfList.parentElement;
   console.log(endOfList);
   console.log(parentElement);
}
appendPageLinks(studentList);



// Remember to delete the comments that came with this file, and replace them with your own code comments.