import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { CandidateComponent } from './candidate/candidate.component';
import { ChoiceComponent } from './choice/choice.component';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { ElectionsComponent } from './elections/elections.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResultComponent } from './result/result.component';
import { VotingComponent } from './voting/voting.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'choice', component:ChoiceComponent,canActivate:[AdminGuard]},
  {path:'candidate',component:CandidateComponent},
  {path:'user',component:RegistrationComponent},
  {path:'vote/:id',component:VotingComponent},
  {path:'elections',component:ElectionsComponent},
  {path:'poll',component:CreatePollComponent},
  {path:'results/:id',component:ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
