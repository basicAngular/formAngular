import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myGroup: FormGroup;
  

  ngOnInit(){
      this.myGroup = new FormGroup({
      itemName: new FormControl(),
      price: new FormControl(),
      language: new FormControl()
    });
  }

  title = 'app';
  langs: string[] = ['English', 'French', 'German']
}
