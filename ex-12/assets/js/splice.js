/**
 * * The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
 */

const teamSeven = ['Naruto', 'Sasuke', 'Sakura', 'Kakashi'];

/* (index position, How many element would be deleted after index position, Element that will be introduced) */
teamSeven.splice(1, 0, 'Sai')

console.log(teamSeven)