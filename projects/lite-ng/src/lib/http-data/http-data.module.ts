import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LiteNgHttpRepositoryFactoryService } from './http-repository-factory.service';
import { LiteNgLoadingModalModule } from '../loading-modal/loading-modal.module';
import { LiteNgToastModule } from '../toast/toast.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    LiteNgLoadingModalModule,
    LiteNgToastModule
  ],
  providers: [
    LiteNgHttpRepositoryFactoryService
  ]
})
export class LiteNgHttpDataModule { }
