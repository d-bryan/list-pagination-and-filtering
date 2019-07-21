# Techdegree Unit-02 List Pagination and Filtering Project

## Assignment:

Tasked with using common web development techniques know as "pagination" to enhance the usability of a webpage.

Start with an HTML file that has 54 student names, photos and email addresses. Will use progressive enhancement JavaScript to display 10 names at a time and add a navigation system -- a series of links at the bottom of the page will let the user click through other student entries 10 at a time.
Ensure that the page will display the names, photos and email addresses even if JavaScript is disabled.
Pagination solution needs to work with any number of students not just the supplied list of 54, must be flexible.

## Grading Requirements:

My goal is to land an exceeds expectations grade for this project, to which the requirements are listed by each grading ruberic below.

## No snippets, plugins or libraries:

### Meets Expectations (Exceeds Expectations N/A):

Project contains only plain "vanilla" JavaScript and doesn't rely on jQuery, some other library, or any code snippets or plugins.

## Progressive enhancement & unobtrusive JavaScript:

### Meets Expectations:

No inline JavaScript. All JS is linked from an external file.
Uses unobtrusive JavaScript to append markup for the pagination links. So none of the pagination link's markup is added into the HTML. A step by step series of examples that tell you how to get a development env running.

### Exceeds Expectations:

Use unobtrusive JavaScript to append HTML for a search bar.

## Pagination Links:

### Meets Expectations

Pagination links are created. If there are 44 students, 5 links should be generated, if there’s 66 students, 7 links should be generated. Etc.

### Exceeds Expectations

Pagination links display based on how many search results are returned. For example: if 10 or fewer results are returned, 0 or 1 pagination links are displayed. If 22 search results are returned, 3 pagination links are displayed.

## Paging:

### Meets Expectations:

The first 10 students are shown when the page loads, and each pagination link displays the correct students.
Clicking on “1” in the pagination links should show students 1 to 10. Clicking “2” shows 11 to 20. Clicking “5” shows students 41 to 50, and so on.

### Exceeds Expectations:

When a search yields 0 results, a message is displayed on the page, informing the user that no results have been found.

## Code Comments:

### Meets Expectations (Exceeds Expectations N/A)

Code comments have been added explaining how the functions work.

## Extra Credit:

### Add search component:

Dynamically create and append a search bar. Avoid making any changes in the index.html file. You can reference the examples/example-exceeds.html file, lines 16-19, to see an example of the markup you'll create.

### Add functionality to the search component:

When the "Search" button is clicked, the list is filtered by student name for those that include the search value. For example, if the name Phillip is typed into the box, list all items with a name that includes Phillip. If the letter S is typed in, all items with an S in the name will show.

### Paginate search results:

Display pagination links based on how many search results are returned. For example: if 10 or fewer results are returned, 0 or 1 pagination links are displayed. If 22 search results are returned, 3 pagination links are displayed.

### Handle no results returned:

If no matches are found by the search, include a message in the HTML to tell the user there are no matches.
