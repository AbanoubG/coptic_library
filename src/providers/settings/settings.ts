import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class SettingsProvider {

    private theme: BehaviorSubject<String>;
    // private theme: BehaviorSubject<string> = new BehaviorSubject<string>("");

    constructor() {
        this.theme = new BehaviorSubject('light-theme');
        // this.theme = new Rx.Subject();
    }

    setActiveTheme(val) {
        this.theme.next(val);
    }

    getActiveTheme() {
        return this.theme.asObservable();
    }
}
