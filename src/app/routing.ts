import { Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { AdminComponent } from './admin/admin.component';
import { ActivateGuard } from './activate.guard';
import { DeactivateGuard } from './deactivate.guard';


export const routes: Routes =[

  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'post', component: PostComponent, canDeactivate:[DeactivateGuard]},
  {path:'admin', component: AdminComponent, canActivate:[ActivateGuard]}
]
