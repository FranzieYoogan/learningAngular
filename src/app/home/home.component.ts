import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  random = Math.floor(Math.random() * 3) + 1;

  dataSearch: any
  dataCategories: any
  constructor (private http: HttpClient) {}
  Math: any;

  Constructor() {

      this.Math = Math;
  }






  


  closeMenu() {

    const buttonClose: any = document.getElementById('bubbleChatContainer')
    const section: any = document.getElementById('contaner2Style')
    const search: any = document.getElementById('inputStyle')
    const inputStyle:any = document.getElementById('inputStyle')
    section.style.opacity = '1'

    inputStyle.style.cursor = 'text'
    inputStyle.style.border = '1px solid black'
    inputStyle.disabled = false
    
    buttonClose.style.visibility ='hidden'

    search.style.border = '1px solid black'

    return buttonClose
  }

  closeMenu2() {
    const inputStyle:any = document.getElementById('inputStyle')
    const categoriesButton: any = document.getElementById('dropdownDefaultButton')
    const buttonBubbleChat2: any = document.getElementById('bubbleChatContainer2')
    const section: any = document.getElementById('contaner2Style')


    inputStyle.style.cursor = 'text'
    inputStyle.style.border = '1px solid black'
    inputStyle.disabled = false


    categoriesButton.style.borderBottom = '1px solid transparent'
    categoriesButton.style.width = '0%'
    categoriesButton.style.transition = '1s'
    buttonBubbleChat2.style.visibility = 'hidden'
    section.style.opacity ='1'

  }




  chuckTips():any {
  
   



   
    var currentTime = new Date().toLocaleString()

    const bubbleChat:any =  document.getElementById('bubbleChatContainer')
    const span:any = document.getElementById('spanTime')
  console.log(currentTime)
   bubbleChat.style.visibility = 'visible'


   const section: any = document.getElementById('contaner2Style')

   section.style.opacity = '0.3'
   return span.innerHTML = currentTime.toString()



  }






  chuckTips2():any {


    const spanResultCategories:any = document.getElementById('spanResultCategories')
    const spanResultCategories2:any = document.getElementById('spanResultCategories2')
    const spanResultCategories3:any = document.getElementById('spanResultCategories3')
    const spanResultCategories4:any = document.getElementById('spanResultCategories4')

      this.http.get(`https://api.chucknorris.io/jokes/categories`).subscribe((response) => {



      
      console.log(response);
   const result =   this.dataCategories = response
    console.log("yaaaay", result.toString().substring(0,5))
      spanResultCategories.innerHTML = this.dataCategories.toString().toUpperCase().substring(0,37)
      spanResultCategories2.innerHTML =this.dataCategories.toString().toUpperCase().substring(37,70)
      spanResultCategories3.innerHTML = this.dataCategories.toString().toUpperCase().substring(70,103)
      spanResultCategories4.innerHTML = this.dataCategories.toString().toUpperCase().substring(103,115)
  
  
    })
    

 
 
    
    

 


    const search: any = document.getElementById('inputStyle')
    const buttonBubbleChat2: any = document.getElementById('dropdownDefaultButton')
    const bubbleChat:any =  document.getElementById('bubbleChatContainer')
    var currentTime = new Date().toLocaleString()
    const bubbleChat2:any =  document.getElementById('bubbleChatContainer2')
    const span2:any = document.getElementById('spanTime2')
    const inputStyle:any = document.getElementById('inputStyle')
    const categoriesResult:any = document.getElementById('categoriesResult')

  console.log(currentTime)
   bubbleChat2.style.visibility = 'visible'

   const section: any = document.getElementById('contaner2Style')


   inputStyle.style.cursor = 'not-allowed'
   inputStyle.disabled = true



   buttonBubbleChat2.style.borderBottom = '1px solid orange'
   search.style.border = '1px solid black'
   buttonBubbleChat2.style.borderRadius = '0px'
   buttonBubbleChat2.style.width = '100%'
   buttonBubbleChat2.style.transition = '1s'
   bubbleChat.style.visibility = 'hidden'
   section.style.opacity = '0.3'
   return    span2.innerHTML = currentTime.toString()



  }


  @HostListener('window:load')
onLoad() {
  const titleMenu: any = document.getElementById('titleMenu')
  const logoEvent: any = document.getElementById('logoEvent')
  const dropDownMain:any = document.getElementById('dropDownMainMenuStyle')

  titleMenu.position ='relative'
  titleMenu.style.right = '-1px'
  titleMenu.style.opacity = '1'
  titleMenu.style.transition = '0.5s'
  logoEvent.style.opacity = '1'
  logoEvent.style.width = '50px'
  dropDownMain.style.opacity = '1'
  dropDownMain.style.transition = '0.5s'

setTimeout(() => {
  logoEvent.style.height = 'auto'
}, 60);
  logoEvent.style.transition = '0.5s'
}



ngOnInit(): void {

  const searchValue:any = document.getElementById('inputStyle')
  const searchValue2:any = document.getElementById('inputStyle2')

  const bubbleChat:any =  document.getElementById('bubbleChatContainer')





    searchValue.addEventListener('keypress', function (e: { key: string; }) {
      if (e.key === 'Enter') {
        if(searchValue.value) {
       const buttonSearch:any = document.getElementById('buttonSearch')
        searchValue.style.cursor ='not-allowed'
        searchValue.disabled = true
        searchValue.style.border = '2px solid green'
        searchValue.style.transition = '0s'
       buttonSearch.click()
    }  else {
      bubbleChat.style.visibility ='visible'
      searchValue.style.border = '2px solid red'



    }
  } 
});

  searchValue2.addEventListener('keypress', function (e: { key: string; }) {
  if (e.key === 'Enter') {
    const buttonSearch2:any = document.getElementById('buttonSearch2')
     searchValue2.style.cursor ='not-allowed'
     searchValue2.disabled = true

buttonSearch2.click()

  } else {
    bubbleChat.style.visibility ='visible'
    searchValue2.style.border = '2px solid red'


  }

    });



    }
  



eventMenuIcon2() {

  const closeMenu2Icon: any = document.getElementById('closeMenu2Icon')

  closeMenu2Icon.src = '/assets/img/icons/close.png'

}

eventMenuIcon2Out() {
  const closeMenu2IconOut: any = document.getElementById('closeMenu2Icon')

  closeMenu2IconOut.src = '/assets/img/icons/close2.png'

}

  getSearch(): any {



    let search: any = document.getElementById('inputStyle')
    let text: any = document.getElementById('textId')
    let result = search.value.toLowerCase()



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


   

        
      
      this.http.get(`https://api.chucknorris.io/jokes/search?query=${result}`).subscribe((response) => {
      
      console.log(response);
      this.dataSearch = response
      search.style.border = '2px solid green'
     
      text.style.visibility = 'visible'
      text.innerHTML = this.dataSearch.result[this.random].value
      setTimeout(() => {
        window.location.reload()
        return this.dataSearch
     
    
      }, 4000);


           
    
  
      });


 
 
    }

    }


    dataSearch2: any


    getSearch2():any {



   const search2: any = document.getElementById('inputStyle2')
    const text2: any = document.getElementById('textId')
   const result2 = search2.value.toLowerCase()


    if(result2 != 'animal' && result2 != 'career' && result2 != 'celebrity' && result2 != 'dev' && 
    result2 != 'explicit' && result2 != 'fashion' && result2 != 'food' && result2 != 'history' && 
    result2 != 'money' && result2 != 'movie' && result2 != 'music' &&  result2 != 'political' &&  
    result2 != 'religion' &&  result2 != 'science' && result2 != 'sport' && result2 != 'travel' ) {
    
      search2.style.border = '2px solid red'





   
    var currentTime = new Date().toLocaleString()
    const bubbleChat:any =  document.getElementById('bubbleChatContainer')
    const span:any = document.getElementById('spanTime')
  console.log(currentTime)
   bubbleChat.style.visibility = 'visible'

   const section: any = document.getElementById('contaner2Style')

   section.style.opacity = '0.3'
   return span.innerHTML = currentTime.toString()


        
         } if (result2 == 'animal' || result2 == 'career' || result2 == 'celebrity' || result2 == 'dev' || 
         result2 == 'explicit' || result2 == 'fashion' || result2 == 'food' || result2 == 'history' || 
         result2 == 'money' || result2 == 'movie' || result2 == 'music' ||  result2 == 'political' ||  
         result2 == 'religion' ||  result2 == 'science' || result2 == 'sport' || result2 == 'travel' ) {


          search2.style.border = '2px solid green'
     
   
    

        
      
      this.http.get(`https://api.chucknorris.io/jokes/search?query=${result2}`).subscribe((response2) => {
      
      console.log(response2);
      this.dataSearch2 = response2
      console.log(this.dataSearch2.result[this.random].value)
      text2.style.visibility = 'visible'
      text2.innerHTML = this.dataSearch2.result[this.random].value
      setTimeout(() => {
        window.location.reload()
        return this.dataSearch2
     
    
      }, 4000);


           
    
  
      });


 
 
    }

    }



        
         
  }
      
   
  


    