import { Component } from '@angular/core';
import { Site }    from './site';
 
@Component({
  moduleId: module.id,
  selector: 'site-form',
  templateUrl: 'site-form.component.html'
})
export class SiteFormComponent {
  urls = ['www.runoob.com', 'www.google.com',
            'www.taobao.com', 'www.facebook.com'];
  model = new Site(1, '菜鸟教程', this.urls[0], 10000);
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: 完成后移除
  get diagnostic() { return JSON.stringify(this.model); }
}