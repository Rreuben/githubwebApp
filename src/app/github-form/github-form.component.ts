import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-github-form',
  templateUrl: './github-form.component.html',
  styleUrls: ['./github-form.component.css']
})
export class GithubFormComponent implements OnInit {

  profile : any[] ;
  repos : any[] ;
  username : string ;

  constructor( private profileService : ProfileService ) { }

  findProfile() {
  	this.profileService.updateProfile( this.username );
  	this.profileService.getProfileInfo().subscribe(profile => {
  		console.log(profile);
  		this.profile = profile;
  	});

  	this.profileService.getProfileRepos().subscribe(repos => {
  		console.log(repos);
  		this.repos = repos;
  	}) ; 	
  }

  ngOnInit() {
  }

}
