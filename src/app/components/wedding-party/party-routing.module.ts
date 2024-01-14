import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeddingPartyComponent } from './wedding-party.component';

const routes: Routes = [
  {
  path: '',
  component: WeddingPartyComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartyRoutingModule { }
