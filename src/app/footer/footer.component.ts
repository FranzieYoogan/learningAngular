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
    spanCopyright.style.transition = '0.5s'



  }

  copyrightsEventOut() {

    const spanCopyright: any = document.getElementById('spanCopyright')
    const spanCopyright2: any = document.getElementById('spanCopyright')

  spanCopyright.classList.remove('spanCopyright')
  spanCopyright2.classList.add('spanCopyright2')



  }

}
