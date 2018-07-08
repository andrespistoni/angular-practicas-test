import { Component, OnInit } from '@angular/core';
import { saveAs as importedSaveAs } from 'file-saver';
import { Html } from './html';

@Component({
  selector: 'app-create-html-file',
  templateUrl: './create-html-file.component.html',
  styleUrls: ['./create-html-file.component.css']
})
export class CreateHtmlFileComponent implements OnInit {

  header: string;
  footer: string;
  dataHtml = new Html;

  questions: string;
  sinonimos: string;
  title: string;


  html: string;
  full_html: string;

  fileName: String;

  constructor() {
    this.header = '<!DOCTYPE html><html>';
    this.footer = '</body></html>';

   }

   prepareHtml() {
    this.full_html = `
                      ${this.header}
                      <meta name="sinonimos" content="${this.sinonimos || ''}">
                      <meta name="questions" content="${this.questions || ''}">
                      <body>
                      <title>${this.title}</title>
                      ${this.html}
                      ${this.footer}
                     `;
   }

   download() {
    this.prepareHtml();
    const blob = new Blob([this.full_html], {type: 'text/plain;charset=utf-8'});
    importedSaveAs(blob, this.fileName);

   }
  ngOnInit() {
  }

}
