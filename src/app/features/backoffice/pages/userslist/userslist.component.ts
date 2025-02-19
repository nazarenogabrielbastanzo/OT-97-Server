import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getUserList, searchUsers } from 'src/app/core/redux/actions/user.actions';
import { UserListState } from 'src/app/core/redux/reducers/userReducer.reducer';
import { getUser } from 'src/app/core/redux/selectors/user.selector';
import { User } from 'src/app/features/models/User';
import Swal from 'sweetalert2';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { UsersService } from 'src/app/features/services/users/users.service';

interface List {
  name: string;                                       
  email: string;
  id: number; 
}

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent implements OnInit {
  loader:boolean=true;
  totalCount:number = 15;
  userList$: Observable<User[] | null> ;

  searchForm: FormGroup = this.fb.group({
    searchUser: ['']
  });
  
  
  constructor(
    private store:Store<UserListState>,
    private router: Router,
    private usersSvc: UsersService,
    private fb: FormBuilder
  ) { 
    this.userList$ = this.store.pipe(select(getUser));
    this.userList$.subscribe( r => {
      if(r){
        this.loader = false;
      }
    })
  }

  ngOnInit(){    

    this.store.dispatch(getUserList())
    setTimeout(()=>{
      this.loader = false;
    },2000);

    this.searchForm.valueChanges
    .pipe(
      debounceTime(1000)
    )
    .subscribe( data => {      
      
      if(data.searchUser.length >= 2){        
        
        this.store.dispatch(searchUsers({user: data.searchUser}));
        
      } else {
        
        this.store.dispatch(getUserList());
      }
    })
    
  }

  haveErrorsInputForm(input: string, type: string) {
    return Boolean(
      this.searchForm.get(input)?.hasError(type) && this.searchForm.get(input)?.touched
    );
  }

  search(){ 

    let searchText = this.searchForm.controls['searchUser'].value;

    if(searchText.length >= 2){
        
        
      this.store.dispatch(searchUsers({user: searchText}));
      
    } else {
      
      this.store.dispatch(getUserList());
    }
  }

  editUser(id: number | undefined) {
    this.router.navigate(['/users', id]);
  }

  deleteUser(id: number | undefined) {
    this.usersSvc.deleteUserById(id)
      .subscribe((resp: any) => {
        
        Swal.fire({
          icon: 'success',
          title: '¡Éxito!',
          text: resp.message,
          showConfirmButton: true
        });

        // TODO: Update userList$
        
      },
      (error: any) => {
        // TODO: Handle errors
      },
      () => { });
  }
    
} 
 



