import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  copyrightsEvent() {

    const spanCopyright: any = document.getElementById('spanCopyright')

    spanCopyright.classList.add('spanCopyright')




  }

  copyrightsEventOut() {

    const spanCopyright: any = document.getElementById('spanCopyright')

    spanCopyright.classList.remove('spanCopyright')

    


  }

}
