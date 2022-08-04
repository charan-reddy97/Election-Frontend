import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { CandidateComponent } from './candidate/candidate.component';
import { ChoiceComponent } from './choice/choice.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { VotingComponent } from './voting/voting.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'choice', component:ChoiceComponent,canActivate:[AuthGuard]},
  {path:'candidate',component:CandidateComponent,canActivate:[AdminGuard]},
  {path:'user',component:RegistrationComponent},
  {path:'vote',component:VotingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
