import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissaoInicioComponent } from './admissao-inicio/admissao-inicio.component';

const routes: Routes = [
  {
    path:"admissao-inicio", component:AdmissaoInicioComponent
  },
  {
    path:"", component:AdmissaoInicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
