import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
sampleForm!:FormGroup;

constructor(private fb:FormBuilder){

}

ngOnInit(){
  this.formIntilization()
}

formIntilization(){
  this.sampleForm=this.fb.group({
    'firstName':[''],
    'lastName':['']

  })
}

submit(){
  const data={
    FirstName:this.sampleForm.value['firstName'],
    LastName:this.sampleForm.value['lastName'],
  }
  console.log(data)
}

  
  }



