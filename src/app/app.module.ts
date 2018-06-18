import { BrowserModule } from '@angular/platform-browser' ;
import { NgModule } from '@angular/core' ;
import { NgbModule } from '@ng-bootstrap/ng-bootstrap' ;
import { HttpModule } from '@angular/http' ;
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component' ;
import { GithubComponent } from './github/github.component' ;
import { GithubFormComponent } from './github-form/github-form.component' ;
import { GithubProfileComponent } from './github-profile/github-profile.component' ;
import { GithubLandingPageComponent } from './github-landing-page/github-landing-page.component' ;
import { ProfileService } from './services/profile.service' ;

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    GithubFormComponent,
    GithubProfileComponent,
    GithubLandingPageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpModule,
    FormsModule
  ],
  providers: [ ProfileService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
