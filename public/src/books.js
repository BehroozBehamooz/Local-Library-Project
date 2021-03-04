// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  return authors.find(author => author.id===id);
}

function findBookById(books, id) {
  return books.find(book => book.id===id);
}

function partitionBooksByBorrowedStatus(books) {
  
  const partitionedBooks=[[],[]];
  partitionedBooks[1]=books.filter(book => book.borrows[0].returned);
  partitionedBooks[0]=books.filter(book => !book.borrows[0].returned);
  return partitionedBooks;
  
/*
  const partitionedBooks=books.reduce((acc,book) => {
    const key=book.borrows[0].returned;
    console.log(book.id);
    console.log(key,typeof(key));
    if (!acc[key])
      acc[key]=[];
    acc[key].push(book);

  },{});
  return [partitionedBooks["true"],partitionedBooks["false"]];
*/

  /*
  for (let book of books){
    const index=book.borrows[0].returned ? 1 : 0;
    partitionedBooks[index].push(book); 
  }
  return partitionedBooks;
*/
  

 
}

function getBorrowersForBook(book, accounts) {
  /*
  const modifiedBorrows= book.borrows.reduce((acc,borrow) => {
    let accountObj=accounts.find(account => account.id===borrow.id);
    accountObj["returned"]=borrow.returned;
    return accountObj;
  },0);
  return modifiedBorrows.slice(0,10);
  */

  const modifiedBorrows= book.borrows.map(borrow => {
    let accountObj=accounts.find(account => account.id===borrow.id);
    accountObj["returned"]=borrow.returned;
    return accountObj;
  });
  return modifiedBorrows.slice(0,10);

}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
