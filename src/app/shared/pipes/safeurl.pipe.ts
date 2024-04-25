import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({
  name: 'safeurl',
  standalone: true
})
export class SafeurlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url: string) {
    console.log(`I am safe ${url}`)
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
