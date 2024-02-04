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

clickThing = 0
  public dropDownEvent() {

    const spanValue: any = document.getElementById('spanCategories')
    const svgValue: any = document.getElementById('svgThing')

   
    spanValue.style.borderBottom = '1px solid orange'
    svgValue.style.visibility = 'hidden'
    spanValue.style.width = '0%'

    setTimeout(() => {
      spanValue.style.width = '100%'
  
    }, 50);
    spanValue.style.transition = '0.5s'
    
  }

  dropDownEvent2() {

    const spanValue: any = document.getElementById('spanCategories')
    const svgValue: any = document.getElementById('svgThing')
    this.clickThing ++
    console.log(this.clickThing)
    if(this.clickThing == 2) {
      this.clickThing = 0
      spanValue.style.borderBottom = '1px solid orange'
      svgValue.style.visibility = 'visible'
      spanValue.style.width = '100%'
  
      setTimeout(() => {
        spanValue.style.width = '0%'
        svgValue.style.visibility = 'visible'
      }, 50);
      spanValue.style.transition = '0.5s'

    } else {
      spanValue.style.borderBottom = '1px solid orange'
      svgValue.style.visibility = 'visible'
      spanValue.style.width = '0%'
  
      setTimeout(() => {
        spanValue.style.width = '100%'
    
      }, 50);
      spanValue.style.transition = '0.5s'

    }
 
    
  }

  dropDownEventCancel() {
    this.clickThing  = 0
    const spanValue: any = document.getElementById('spanCategories')
    const svgValue: any = document.getElementById('svgThing')



  
    spanValue.style.width = '0%'
    spanValue.style.transition = '0.5s'
    setTimeout(() => {
      spanValue.style.width = '100%'
      spanValue.style.borderBottom = '1px solid transparent'
      svgValue.style.visibility = 'visible'
    }, 50);



  
  }


  closeMenu() {

    const buttonClose: any = document.getElementById('bubbleChatContainer')
    const section: any = document.getElementById('contaner2Style')

    section.style.opacity = '1'

    buttonClose.style.visibility ='hidden'

    localStorage.setItem('clicked','clicked')

    return buttonClose
  }




  chuckTips():any {

      if(localStorage.getItem('clicked')) {



   
    var currentTime = new Date().toLocaleString()
    const bubbleChat:any =  document.getElementById('bubbleChatContainer')
    const span:any = document.getElementById('spanTime')
  console.log(currentTime)
   bubbleChat.style.visibility = 'visible'

   const section: any = document.getElementById('contaner2Style')

   section.style.opacity = '0.3'
   return span.innerHTML = currentTime.toString();
}

  }


ngOnInit(): void {

  const searchValue:any = document.getElementById('inputStyle')
searchValue.addEventListener('keypress', function (e: { key: string; }) {
    if (e.key === 'Enter') {
     const buttonSearch:any = document.getElementById('buttonSearch')

     buttonSearch.click()
    }
});

}

  getSearch() {



    let search: any = document.getElementById('inputStyle')
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
      
   
  


    

