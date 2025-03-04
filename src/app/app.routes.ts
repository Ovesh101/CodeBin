import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CreateBinComponent } from './components/create-bin/create-bin.component';
import { authGuard } from './auth.guard';
import { HomeComponent } from './components/home/home.component';
import { ViewSnippetComponent } from './components/view-snippet/view-snippet.component';

export const routes: Routes = [
{path:"login" , component:LoginComponent},
{path:"signup" , component:SignupComponent},
{path:"createBin" , component:CreateBinComponent , canActivate:[authGuard]},
{path : "" , component:HomeComponent},
{path : "snippet/:id" , component:ViewSnippetComponent},
{path : "about" , loadComponent:()=>import("./components/about/about.component").then(mod=>mod.AboutComponent)},
{path : "**" , component:NotFoundComponent}

];
