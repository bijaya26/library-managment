let myLibrary=[];



 function book(name,author,page,bookId){
    this.name=name;
    this.author=author;
    this.page=page;
    this.bookId=bookId;

 }

 function displayContent(array, container,nameSpan,bookName,authorSpan,bookWriter,pageSpan,totalPage){
   for(let i=0;i<myLibrary.length;i++){
      const bookDisplay=document.createElement("div");
      container.appendChild(bookDisplay);
      nameSpan.textContent=`Book Name: ${bookName}`;
      authorSpan.textContent=`Author Name: ${bookWriter}`;
      pageSpan.textContent=`No of Pages:${totalPage}`;

      bookDisplay.appendChild(nameSpan);
      bookDisplay.appendChild(authorSpan);
      bookDisplay.appendChild(pageSpan);
      
   }
   
 }




const container = document.querySelector(".container");

let bookDetails=document.querySelector(".book-details")
 function addBookToLibrary(){

    const addBook=document.querySelector(".books");
    addBook.addEventListener("click",(e)=>{
      

      //books name:
      let eachBook=document.createElement("form");
      bookDetails.appendChild(eachBook);

      const label=document.createElement("label");
      label.htmlFor="bookName";
      label.textContent="Book name*: ";
      const input=document.createElement("input");
      input.required=true;
      input.type="text";
      input.id="bookName";
      input.placeholder="Enter Book Name";
      eachBook.appendChild(label);
      eachBook.appendChild(input);
      const nameSpan=document.createElement("span")
      eachBook.appendChild(nameSpan);
      

      //Author
      const authorLabel=document.createElement("label")
      const authorSpan=document.createElement("span");
      authorLabel.htmlFor="Author";
      authorLabel.textContent="Author Name: ";
      let authorName=document.createElement("input");
      authorName.required=true;
      authorName.type="text";
      authorName.id="authorName";
      authorName.placeholder="Enter Author Name:"
      eachBook.appendChild(authorLabel);
      eachBook.appendChild(authorName);

      //pages

      const pagesLabel=document.createElement("label")
      pagesLabel.htmlFor="page";
      const pageSpan=document.createElement("span")
      pagesLabel.textContent="No of page: ";
      const pages=document.createElement("input");
      pages.required=true;
      pages.type="number";
      pages.id="authorName";
      pages.placeholder="Enter Author Name:"
      eachBook.appendChild(pagesLabel);
      eachBook.appendChild(pages);
      
      //Add Book button
      const submit =document.createElement("button");

      submit.type="submit";
      submit.textContent="Add Book";
      eachBook.appendChild(submit);

      //Add Book Listener

      eachBook.addEventListener("submit",(e)=>{
         e.preventDefault();
         const bookName=input.value;
         const bookWriter=authorName.value;
         const totalPage=pages.value;
         const bookId=crypto.randomUUID();
         eachBook.remove();
         
         

         //Book Display Container crete:

         const bookDisplay=document.createElement("div");

         container.appendChild(bookDisplay);
         //Text content added:

         nameSpan.textContent=`Book Name: ${bookName}`;
         authorSpan.textContent=`Author Name: ${bookWriter}`;
         pageSpan.textContent=`No of Pages:${totalPage}`;
         //span appended to display
         bookDisplay.appendChild(nameSpan);
         bookDisplay.appendChild(authorSpan);
         bookDisplay.appendChild(pageSpan);

         const book1=new book(bookName,bookWriter,totalPage,bookId);


         myLibrary.push(book1);

         displayContent(myLibrary)
         

         


         
            })








    })


 }


 addBookToLibrary();






