import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { PlayerService } from '../player/player.service'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: LoginPageComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [LoginPageComponent],
  providers: [PlayerService]
})
export class UserModule { }
