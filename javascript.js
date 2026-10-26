myLibrary=[];

function book(name,author,page,id){
    this.name=name;
    this.author=author;
    this.page=page;
    this.id=id;
}


const body=document.querySelector(".body");

const container=document.createElement("div");



function getAddBookButton(){


    container.classList.add("container");
    body.appendChild(container);
    const addBookContainer=document.createElement("div");
    container.appendChild(addBookContainer);
    addBookContainer.classList.add("addBookContainer");
    const addBookButton=document.createElement("button");
    addBookContainer.appendChild(addBookButton);
    addBookButton.textContent="Add Book to Library"

    getBookInformation(addBookButton,container);

}
getAddBookButton();


function getBookInformation(addBookButton,container){
    addBookButton.addEventListener("click",(e)=>{
        e.preventDefault();
        const bookField=document.createElement("form");
        bookField.classList.add("bookField");
        container.appendChild(bookField);

        //Book Name
        const bookLabel=document.createElement("label");
        bookField.appendChild(bookLabel);
        bookLabel.htmlFor="bookName";
        bookLabel.textContent="Book Name: "
        const bookName=document.createElement("input");
        bookName.type="text";
        bookName.className="bookName";
        bookName.name="Book Name"
        bookField.appendChild(bookName);

        //Author Name
        const authorLabel=document.createElement("label");
        bookField.appendChild(authorLabel);
        authorLabel.htmlFor="authorName";
        authorLabel.textContent="Author Name: "
        const authorName=document.createElement("input");
        authorName.type="text";
        authorName.className="authorName";
        authorName.name="Book Name"
        bookField.appendChild(authorName);

        //Page

        const pageLabel=document.createElement("label");
        bookField.appendChild(pageLabel);
        pageLabel.htmlFor="page";
        pageLabel.textContent="No of Page: "
        const page=document.createElement("input");
        page.type="number";
        page.className="page";
        page.name="page";
        bookField.appendChild(page);

        //Add Book Button
        const addBook=document.createElement("Button");
        addBook.textContent="Add Book";
        bookField.appendChild(addBook);

        bookInformation(bookField,bookName,authorName,page)
        




    })


}


function bookInformation(addBook,bookName,bookAuthor,totalPage){
    addBook.addEventListener("submit",(e)=>{
        e.preventDefault();
        const name=bookName.value;
        const author=bookAuthor.value;
        const pages=totalPage.value;
        const id=crypto.randomUUID();

        const book1=new book(name,author,pages,id);
        myLibrary.push(book1);
        bookShow();
        addBook.remove();
        

        
    })
}

const allBooks=document.createElement("div");

function bookShow(){
    const length=myLibrary.length;
    

   allBooks.classList.add("allBooks");
   
   allBooks.innerHTML="";
   
    
    for(let i=0;i<length;i++){
        container.appendChild(allBooks);
        
       const eachBook=document.createElement("div");
       eachBook.classList.add("eachBook");
        
        allBooks.appendChild(eachBook);
       
        const bookSpan=document.createElement("span")
        eachBook.appendChild(bookSpan);
        const authorSpan=document.createElement("span");
        eachBook.appendChild(authorSpan);
        const pageSpan=document.createElement("span");
        eachBook.appendChild(pageSpan);

        const dltButton=document.createElement("button");
        dltButton.textContent="Delete Book";
        eachBook.appendChild(dltButton);
        

        const booksTitle=myLibrary[i].name;
        const booksAuthor=myLibrary[i].author;
        const booksPage=myLibrary[i].page;
        const bookId=myLibrary[i].id;
        bookSpan.textContent=`Book Name:${booksTitle}`;
        authorSpan.textContent=`Author Name: ${booksAuthor}`;
        pageSpan.textContent=`Total page:${booksPage}`;
        dltLibrary(dltButton,bookId,eachBook);
    }
}


function dltLibrary(dltButton,currentId,eachBook){
    dltButton.addEventListener("click",()=>{
        const getCurrentIndex=myLibrary.findIndex((indBook)=>{
            return indBook.id===currentId;
        })

        if(getCurrentIndex!==-1){
            myLibrary.splice(getCurrentIndex,1);
        }
        eachBook.remove();
    })


}
