import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  print(elementId: string) {
    const content = document.getElementById(elementId);
    const win = window.open('', '', 'width=900');
    win?.document.write(content?.innerHTML || '');
    win?.print();
    win?.close();
  }

}