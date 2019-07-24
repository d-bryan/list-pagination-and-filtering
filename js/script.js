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

   /**
    * - Create the `showPage` function to hide all of the items in the 
      list except for the ten you want to show.
   * @param {Array} list - List of students passed into the function to be looped over.
   * @param {Number} page - Counter for the page number array to display number of items per page
   */
   const showPage = (list, page) => {
      const startIndex = (page * itemsPerPage) - itemsPerPage;
      const endIndex = page * itemsPerPage;
      let currentPage;
      
      for (let i = 0; i < list.length; i ++){
         currentPage = list[i];
         currentPage.style.display = 'none';
         if (i >= startIndex && i < endIndex) {
            currentPage.style.display = 'block';
         }  
      }
   }
   

   /**
    * Creates and appends functioning pagination links.
    * @param {Array} list - Pass in the global array studentList
    */
   const appendPageLinks = (list) => {
      // const arrLength = ((list.length) - 1);
      const numPages = ((list.length)/itemsPerPage);
      const endOfPage = document.querySelector('.page');
      
      const createDIV = document.createElement('div');
      const UL = document.createElement('ul');
      
      createDIV.className = 'pagination';
      endOfPage.appendChild(createDIV);
      createDIV.appendChild(UL);

      for (let i = 0; i < numPages; i ++) {

         let LI = document.createElement('li');
         let Link = document.createElement('a');

         Link.textContent = (i + 1);
         Link.href = '#';

         UL.appendChild(LI);
         LI.appendChild(Link);
      }

      const allLinks = document.querySelectorAll('a');
      allLinks[0].className = 'active';

      showPage(studentList,1);

      UL.addEventListener('click', (e, index) => {

         for (let i = 0; i < allLinks.length; i ++) {
            allLinks[i].className = '';
         }

         e.target.className = 'active';

         index = e.target.textContent;
         showPage(studentList, index);

      });
      
   }
   appendPageLinks(studentList);


});
