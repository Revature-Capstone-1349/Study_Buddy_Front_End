import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import { LoginComponent } from "./Components/login/login.component";
import { RegisterComponent } from "./Components/register/register.component";
import { ErrorPageComponent } from "./Pages/error-page/error-page.component";
import { HomePageComponent } from "./Pages/home-page/home-page.component";


const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomePageComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: ErrorPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    
})

export class AppRoutingModule{}
