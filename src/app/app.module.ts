import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ReminderComponent } from './reminder/reminder.component';
import { AddReminderComponent } from './add-reminder/add-reminder.component';
import { ReminderListComponent } from './reminder-list/reminder-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ReminderComponent,
    AddReminderComponent,
    ReminderListComponent,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
