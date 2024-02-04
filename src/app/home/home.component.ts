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

    section.style.opacity = '1'

    buttonClose.style.visibility ='hidden'

    return buttonClose
  }




  chuckTips():any {


    var currentTime = new Date().toLocaleString()
    const bubbleChat:any =  document.getElementById('bubbleChatContainer')
    const span:any = document.getElementById('spanTime')
  console.log(currentTime)
   bubbleChat.style.visibility = 'visible'

   const section: any = document.getElementById('contaner2Style')

   section.style.opacity = '0.3'
   return span.innerHTML = currentTime.toString();
}



  getSearch() {



    let search: any = document.getElementById('default-search')
    let text: any = document.getElementById('textId')
    const result = search.value

    if(result != 'animal' && result != 'career' && result != 'celebrity' && result != 'dev' && 
    result != 'explicit' && result != 'fashion' && result != 'food' && result != 'history' && 
    result != 'money' && result != 'movie' && result != 'music' &&  result != 'political' &&  
    result != 'religion' &&  result != 'science' && result != 'sport' && result != 'travel' ) {
    
      search.style.border = '2px solid red'
      setTimeout(() => {
        window.location.reload()
     
     
    
      }, 2000);
        
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
      
   
  


    

