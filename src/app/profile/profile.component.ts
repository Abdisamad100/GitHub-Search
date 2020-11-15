import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service';
import { User } from '../user';
import { Repos } from '../repos';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
// export class ProfileComponent implements OnInit {
//    profile:'any[]';

//   constructor(private profileservice:ProfileService) { 
//     this.profileservice.getProfileInfo().subscribe(profile =>{
//       console.log(profile); 

      
//     })
//   }

//   ngOnInit(): void {
//   }

// }
export class ProfileComponent implements OnInit {
  profile =[];
  repos:Repos;
  profiles: User;

  constructor(private ProfileService: ProfileService) { 
    this.profiles=new User('','','','',0,0,0)
  }

  findProfile(user){
    this.ProfileService.getProfileInfo(user).subscribe(profile => {
      this.profiles = profile;
    });
    this.ProfileService.getProfileRepos(user).subscribe(repos =>{
      this.repos = repos;
    })
  }

  ngOnInit(): void {
    this.findProfile('abdisamad100');
  }

}

