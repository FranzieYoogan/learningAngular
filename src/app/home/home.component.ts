import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  random = Math.floor(Math.random() * 10) + 1;
  dataSearch: any
  categories: any
  constructor (private http: HttpClient) {}
  Math: any;

  Constructor() {

      this.Math = Math;
  }








  closeMenu() {

    const buttonClose: any = document.getElementById('bubbleChatContainer')
    const section: any = document.getElementById('contaner2Style')
    const search: any = document.getElementById('inputStyle')
    section.style.opacity = '1'

    buttonClose.style.visibility ='hidden'

    search.style.border = '1px solid black'

    return buttonClose
  }

  closeMenu2() {

    const categoriesButton: any = document.getElementById('dropdownDefaultButton')
    const buttonBubbleChat2: any = document.getElementById('bubbleChatContainer2')
    const section: any = document.getElementById('contaner2Style')

    categoriesButton.style.borderBottom = '1px solid transparent'
    categoriesButton.style.width = '0%'
    categoriesButton.style.transition = '1s'
    buttonBubbleChat2.style.visibility = 'hidden'
    section.style.opacity ='1'

  }




  chuckTips():any {
    console.log(localStorage.getItem('value'))
      if(!localStorage.getItem('value')) {



   
    var currentTime = new Date().toLocaleString()
    const bubbleChat:any =  document.getElementById('bubbleChatContainer')
    const span:any = document.getElementById('spanTime')
  console.log(currentTime)
   bubbleChat.style.visibility = 'visible'

   const section: any = document.getElementById('contaner2Style')

   section.style.opacity = '0.3'
   return span.innerHTML = currentTime.toString()

} 

  }

  chuckTips2():any {

      

    const search: any = document.getElementById('inputStyle')
    const buttonBubbleChat2: any = document.getElementById('dropdownDefaultButton')
    const bubbleChat:any =  document.getElementById('bubbleChatContainer')
    var currentTime = new Date().toLocaleString()
    const bubbleChat2:any =  document.getElementById('bubbleChatContainer2')
    const span2:any = document.getElementById('spanTime2')


  console.log(currentTime)
   bubbleChat2.style.visibility = 'visible'

   const section: any = document.getElementById('contaner2Style')
   buttonBubbleChat2.style.borderBottom = '1px solid orange'
   search.style.border = '1px solid black'
   buttonBubbleChat2.style.borderRadius = '0px'
   buttonBubbleChat2.style.width = '100%'
   buttonBubbleChat2.style.transition = '1s'
   bubbleChat.style.visibility = 'hidden'
   section.style.opacity = '0.3'
   return span2.innerHTML = currentTime.toString()



  }


ngOnInit(): void {

  const searchValue:any = document.getElementById('inputStyle')
searchValue.addEventListener('keypress', function (e: { key: string; }) {
    if (e.key === 'Enter') {
     const buttonSearch:any = document.getElementById('buttonSearch')

   return  buttonSearch.click()
    }
});

}

  getSearch(): any {



    let search: any = document.getElementById('inputStyle')
    let text: any = document.getElementById('textId')
    const result = search.value

    if(result != 'animal' && result != 'career' && result != 'celebrity' && result != 'dev' && 
    result != 'explicit' && result != 'fashion' && result != 'food' && result != 'history' && 
    result != 'money' && result != 'movie' && result != 'music' &&  result != 'political' &&  
    result != 'religion' &&  result != 'science' && result != 'sport' && result != 'travel' ) {
    
      search.style.border = '2px solid red'





   
    var currentTime = new Date().toLocaleString()
    const bubbleChat:any =  document.getElementById('bubbleChatContainer')
    const span:any = document.getElementById('spanTime')
  console.log(currentTime)
   bubbleChat.style.visibility = 'visible'

   const section: any = document.getElementById('contaner2Style')

   section.style.opacity = '0.3'
   return span.innerHTML = currentTime.toString()


        
         } if (result == 'animal' || result == 'career' || result == 'celebrity' || result == 'dev' || 
         result == 'explicit' || result == 'fashion' || result == 'food' || result == 'history' || 
         result == 'money' || result == 'movie' || result == 'music' ||  result == 'political' ||  
         result == 'religion' ||  result == 'science' || result == 'sport' || result == 'travel' ) {


          search.style.border = '2px solid green'
     
      text.style.visibility = 'visible'
    

        
      
      this.http.get(`https://api.chucknorris.io/jokes/search?query=${result}`).subscribe((response) => {
      
      console.log(response);
      this.dataSearch = response
      
      setTimeout(() => {
        window.location.reload()
        return this.dataSearch
     
    
      }, 2000);


           
    
  
      });


 
 
    }

    }



        
         
  }
      
   
  


    

