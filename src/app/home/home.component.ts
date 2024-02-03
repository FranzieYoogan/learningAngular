import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, retry } from 'rxjs';
import { Value } from '../value.string';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {



      newData: any
 

      constructor(private http: HttpClient) {}

     

            getData(){
    
                const text:any = document.getElementById('textId')

                text.style.visibility = 'visible'
           

              this.http.get("https://api.chucknorris.io/jokes/random").subscribe((response) => {
     
              console.log(response);
              this.newData = response
            
            
              });

              return this.newData
           
          }

         
          
       

          
            
       
        
         
      
      
   
  }


    

