import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segments',
  templateUrl: './segments.page.html',
  styleUrls: ['./segments.page.scss'],
})
export class SegmentsPage implements OnInit {
categoria:any;
texto:any;
imagem:any;
teste: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  segmentChanged(ev: any) {
    this.categoria=ev.detail.value;
    console.log(this.categoria);
    console.log('Segment changed', ev);
    
    if(this.categoria=="friends"){
      this.teste = true;
      this.imagem="mes2.jpg";
    }

    if(this.categoria=="enemies"){
      this.teste = true;
      this.imagem="ist.jpg";
    }

    if(this.categoria=="mimie"){
      this.teste = true;
      this.imagem="jer.jpg";
    }
  }

}
