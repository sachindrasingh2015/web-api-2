import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookService } from './book.service';
import { HttpClientModule } from '@angular/common/http';
import { TestData } from './TestData';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostComponent } from './post/post.component';
import { AdminComponent } from './admin/admin.component';
import { ActivateGuard } from './activate.guard';
import { HomeComponent } from './home/home.component';
import { routes } from './routing';
import { DeactivateGuard } from './deactivate.guard';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    AdminComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(TestData)
  ],
  providers: [BookService,ActivateGuard,DeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
