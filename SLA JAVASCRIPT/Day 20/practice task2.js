const book = {
    title:"Heartbeat",
    author:"vj",
    page:23,
}
console.log(book);

book.describe = function() {
    console.log('Title: ${thid.title} , Author: ${this.author} , Page: ${thid.page}');
};
book.describe();