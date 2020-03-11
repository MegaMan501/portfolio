import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { faGithubSquare, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(private libray: FaIconLibrary) {
    libray.addIcons(faGithubSquare, faGithub);
  }
}
