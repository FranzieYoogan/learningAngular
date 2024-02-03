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

  constructor (private http: HttpClient) {}
  Math: any;

  Constructor() {

      this.Math = Math;
  }





  getSearch() {

    let search: any = document.getElementById('default-search')
    let text: any = document.getElementById('textId')
    if(search.value == '') {
      search.style.border = '2px solid red'
      setTimeout(() => {
        window.location.reload()
     
     
    
      }, 2000);
        
         }

    if(search.value != "") {


  
       const result = search.value
      text.style.visibility = 'visible'
    
      if(!result) {
        console.log('sheesh')
        search.style.border = '2px solid red'
        search.style.background = 'red'
      } else {
        
      }
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
      
   
  


    

