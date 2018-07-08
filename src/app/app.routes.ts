import { Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
// import { FontaTestComponent } from './fonta-test/fonta-test.component';
// import { CrearQuestionComponent } from './crear-question/crear-question.component';
import { HomeComponent } from './home/home.component';
import { CreateHtmlFileComponent } from './create-html-file/create-html-file.component';
import { ToDoComponent } from './to-do/to-do.component';


export const AppRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: '#', component: NotFoundComponent },
  { path: 'html', component: CreateHtmlFileComponent },
  { path: 'todo', component: ToDoComponent },
  // { path: 'question/crear', component: CrearQuestionComponent },
  { path: '**', component: NotFoundComponent }
];
