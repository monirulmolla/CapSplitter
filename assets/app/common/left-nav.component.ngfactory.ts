/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './left-nav.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../auth/auth.service';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '../friend/friend-list.component';
import * as import12 from '../friend/friend-list.component.ngfactory';
import * as import13 from '../friend/friend.service';
import * as import14 from '../errors/error.service';
var renderType_LeftNavComponent_Host:import0.RenderComponentType = (null as any);
class _View_LeftNavComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _LeftNavComponent_0_4:import3.LeftNavComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_LeftNavComponent_Host0,renderType_LeftNavComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('app-left-nav',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_LeftNavComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._LeftNavComponent_0_4 = new import3.LeftNavComponent(this.parentInjector.get(import8.AuthService));
    this._appEl_0.initComponent(this._LeftNavComponent_0_4,[],compView_0);
    compView_0.create(this._LeftNavComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.LeftNavComponent) && (0 === requestNodeIndex))) { return this._LeftNavComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_LeftNavComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_LeftNavComponent_Host === (null as any))) { (renderType_LeftNavComponent_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,[],{})); }
  return new _View_LeftNavComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const LeftNavComponentNgFactory:import10.ComponentFactory<import3.LeftNavComponent> = new import10.ComponentFactory<import3.LeftNavComponent>('app-left-nav',viewFactory_LeftNavComponent_Host0,import3.LeftNavComponent);
const styles_LeftNavComponent:any[] = [];
var renderType_LeftNavComponent:import0.RenderComponentType = (null as any);
class _View_LeftNavComponent0 extends import1.AppView<import3.LeftNavComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  _el_9:any;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  _el_13:any;
  _text_14:any;
  _text_15:any;
  _el_16:any;
  _el_17:any;
  _text_18:any;
  _text_19:any;
  _el_20:any;
  _text_21:any;
  _el_22:any;
  /*private*/ _appEl_22:import2.AppElement;
  _FriendListComponent_22_4:import11.FriendListComponent;
  _text_23:any;
  _text_24:any;
  _el_25:any;
  _el_26:any;
  _text_27:any;
  _text_28:any;
  _text_29:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_LeftNavComponent0,renderType_LeftNavComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','col-md-12w');
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ul',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','no-bullets');
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'li',(null as any));
    this._el_5 = this.renderer.createElement(this._el_4,'div',(null as any));
    this.renderer.setElementAttribute(this._el_5,'class','header-div');
    this._text_6 = this.renderer.createText(this._el_5,'Dashboard',(null as any));
    this._text_7 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_8 = this.renderer.createElement(this._el_2,'li',(null as any));
    this._el_9 = this.renderer.createElement(this._el_8,'div',(null as any));
    this.renderer.setElementAttribute(this._el_9,'class','header-div');
    this._text_10 = this.renderer.createText(this._el_9,'Recent Activities',(null as any));
    this._text_11 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_12 = this.renderer.createElement(this._el_2,'li',(null as any));
    this._el_13 = this.renderer.createElement(this._el_12,'div',(null as any));
    this.renderer.setElementAttribute(this._el_13,'class','header-div');
    this._text_14 = this.renderer.createText(this._el_13,'All Expenses',(null as any));
    this._text_15 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_16 = this.renderer.createElement(this._el_2,'li',(null as any));
    this._el_17 = this.renderer.createElement(this._el_16,'div',(null as any));
    this.renderer.setElementAttribute(this._el_17,'class','header-div');
    this._text_18 = this.renderer.createText(this._el_17,'Groups',(null as any));
    this._text_19 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_20 = this.renderer.createElement(this._el_2,'li',(null as any));
    this._text_21 = this.renderer.createText(this._el_20,'\n            ',(null as any));
    this._el_22 = this.renderer.createElement(this._el_20,'friend-list-component',(null as any));
    this._appEl_22 = new import2.AppElement(22,20,this,this._el_22);
    var compView_22:any = import12.viewFactory_FriendListComponent0(this.viewUtils,this.injector(22),this._appEl_22);
    this._FriendListComponent_22_4 = new import11.FriendListComponent(this.parentInjector.get(import13.FriendService),this.parentInjector.get(import14.ErrorService),this.parentInjector.get(import8.AuthService));
    this._appEl_22.initComponent(this._FriendListComponent_22_4,[],compView_22);
    compView_22.create(this._FriendListComponent_22_4,[],(null as any));
    this._text_23 = this.renderer.createText(this._el_20,'\n        ',(null as any));
    this._text_24 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_25 = this.renderer.createElement(this._el_2,'li',(null as any));
    this._el_26 = this.renderer.createElement(this._el_25,'div',(null as any));
    this.renderer.setElementAttribute(this._el_26,'class','header-div');
    this._text_27 = this.renderer.createText(this._el_26,'Invite Friends',(null as any));
    this._text_28 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_29 = this.renderer.createText(this._el_0,'\n',(null as any));
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._el_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._el_12,
      this._el_13,
      this._text_14,
      this._text_15,
      this._el_16,
      this._el_17,
      this._text_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._text_24,
      this._el_25,
      this._el_26,
      this._text_27,
      this._text_28,
      this._text_29
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.FriendListComponent) && (22 === requestNodeIndex))) { return this._FriendListComponent_22_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._FriendListComponent_22_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_LeftNavComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.LeftNavComponent> {
  if ((renderType_LeftNavComponent === (null as any))) { (renderType_LeftNavComponent = viewUtils.createRenderComponentType('E:/ACADGILD/case study/splitter-angular2/assets/app/common/left-nav.component.html',0,import9.ViewEncapsulation.None,styles_LeftNavComponent,{})); }
  return new _View_LeftNavComponent0(viewUtils,parentInjector,declarationEl);
}