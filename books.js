 
  
 
const Show_Books =()=>{
   
    setTimeout(async()=>{
          const req = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${userdata}:keyes&AIzaSyAx77nEfTm5MEbI9SfOtxU_P7TxgHThiFY`)
          const result = await req.json()

          const Data = result.items

       Data.map((Data)=>{
            //   console.log(Data.volumeInfo.publisher)
             const bookName=Data.volumeInfo.title
             const publisher=Data.volumeInfo.publisher
             const pages =Data.volumeInfo.pageCount
             const rating =Data.volumeInfo.averageRating
             const Country = Data.saleInfo.country
             const Ebook =Data.saleInfo.isEbook 
            
            //  Show data in Our UI 
            const Display =document.getElementById('demo')  //Target that element and return the cards

             return Display.innerHTML+=`
             <div class="col-12 col-md-4 col-lg-3 p-4">
             <div class="card">
               <div class="card-header">
                 <h5>${bookName}</h5>
                 <div class="row">
                 <p class='col-6 col-md-6'>-${publisher}</p>
                 <p class='col-6 col-md-6'> pages: ${pages}</p>
                 </div>
               </div>
               <div class="card-body">
                 <div class="row">
                   <div class="col-6 col-md-6">
                     <h6>country:  ${Country}</h6>
                     <h6>Rating:<span id='rating'> ${ rating}</span></h6> 
                   </div>
                   <div class="col-6 col-md-6">
                     <h6>Ebook: <span id='ebook'> ${Ebook} </span></h6>
                      
                   </div>
                 </div>
               </div>
             </div>
           </div>
             `

          })
       
    })

}
Show_Books()


// ---------------------------------------------------------------------------

const Search =()=>{
    const userdata =document.getElementById('userdata').value
     
    setTimeout(async()=>{
       
        try {
            
            const req = await fetch(`https://www.googleapis.com/books/v1/volumes?=${userdata}:keyes&AIzaSyAx77nEfTm5MEbI9SfOtxU_P7TxgHThiFY`)
             
       if (!req.ok) {
           throw Error.req(status)
       }
       else{
        document.getElementById('demo').style.display="none"
        // User Field Empty 
        document.getElementById('userdata').value=""
         
            const result = await req.json()
           const Data =result.items
    
         Data.map((Data)=>{
              //   console.log(Data.volumeInfo.publisher)
               const bookName=Data.volumeInfo.title
               const publisher=Data.volumeInfo.publisher
               const pages =Data.volumeInfo.pageCount
               const rating =Data.volumeInfo.averageRating
               const Country = Data.saleInfo.country
               const Ebook =Data.saleInfo.isEbook 
              
              //  Show data in Our UI 
              const Display =document.getElementById('showdata')  //Target that element and return the cards
    
               return Display.innerHTML+=`
               <div class="col-md-3 p-4">
               <div class="card ">
                 <div class="card-header">
                   <h5>${bookName}</h5>
                   <div class="row">
                   <p class='col-md-6'>-${publisher}</p>
                   <p class='col-md-6'> pages: ${pages}</p>
                   </div>
                 </div>
                 <div class="card-body">
                   <div class="row">
                     <div class="col-md-6">
                       <h6>country:  ${Country}</h6>
                       <h6>Rating:<span id='rating'> ${ rating}</span></h6> 
                     </div>
                     <div class="col-md-6">
                       <h6>Ebook: <span id='ebook'> ${Ebook} </span></h6>
                        
                     </div>
                   </div>
                 </div>
               </div>
             </div>
               `
    
            })
        }
    } catch (error) {
            console.log(error)
        }
  })
      
}