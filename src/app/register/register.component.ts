import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addStudent } from '../students.store/student.action';
import { user } from '../user.model'
import {v4 as uuid4} from 'uuid'
import { addTeacher } from '../teachers.store/teacher.action';
import { Router } from '@angular/router';
import { routes } from '../app.routes';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
 
  registerForm=new FormGroup(
    {
      name:new FormControl(' ',Validators.required),
      role:new FormControl('')
    }
  )
  constructor(private store:Store,private router:Router){
    console.log('navin')
  }
  handleSubmit(){
   
    const User:user={
      id:uuid4(),
      name:this.registerForm.value.name||'',
      role:this.registerForm.value.role||''

      
    }
    if(this.registerForm.value.role==='student'){
     
      this.store.dispatch(addStudent({student:User}))
      this.router.navigate(['./students'])
    
    }
    else{
     
      this.store.dispatch(addTeacher({teacher:User}))
      this.router.navigate(['./teachers'])
    }
   
  }
 

}
