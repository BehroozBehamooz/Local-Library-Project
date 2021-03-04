// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.filter(book => !book.borrows[0].returned).length;
}

function getMostCommonGenres(books) {
  const groupedByGenres=books.reduce((acc,{genre}) => {
    let foundGenre=acc.find(obj => obj.name===genre);
    if (!foundGenre){
      foundGenre={name:genre,count:0};
      acc.push(foundGenre);
    }
    foundGenre.count++;
    return acc;
  },[]);

  return groupedByGenres.sort((obj1,obj2)=>obj2.count-obj1.count).slice(0,5);

  }

function getMostPopularBooks(books) {
  mostPopularBooks=books.reduce((acc,{title,borrows}) => {
    acc.push({name:title,count:borrows.length});
    return acc;
  },[]);

  return mostPopularBooks.sort((book1,book2) => book2.count-book1.count).slice(0,5);
}

function getMostPopularAuthors(books, authors) {
  
  mostPopularAuthors=books.reduce((acc,book)=>{
    const bookAuthor=authors.find(author => author.id===book.authorId);
    const authorFirstLastName=`${bookAuthor.name.first} ${bookAuthor.name.last}`;
    let foundAuthor=acc.find(authorCountObj => authorCountObj.name===authorFirstLastName );
    if (!foundAuthor) {
      foundAuthor={name:authorFirstLastName,count:0};
      acc.push(foundAuthor);
    }
    foundAuthor.count+=book.borrows.length;
    return acc;
  },[]);

  return mostPopularAuthors.sort((book1,book2)=>book2.count-book1.count).slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
