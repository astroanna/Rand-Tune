import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MenubarComponent } from './menubar/menubar.component';
import { NewsongComponent } from './newsong/newsong.component';

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'newsong', component: NewsongComponent }
];

export const routing = RouterModule.forRoot(routes);