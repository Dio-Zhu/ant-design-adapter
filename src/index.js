import {UiLibrary, EventAdapter} from './index-deps';
import Defines from './Defines';
import ButtonAdapter from "./adapters/ButtonAdapter";
import RowAdapter from "./adapters/RowAdapter";
import ColAdapter from "./adapters/ColAdapter";
import ButtonViewAdapter from "./viewadapters/ButtonViewAdapter";


const {UiTypeDef, UiTitleDef, UiIconDef, UiDefaultDef} = Defines;
const uiObjects = {};
for (let key in UiTypeDef) {
    uiObjects[key] = uiObjects[key] || {};
    uiObjects[key].uitype = UiTypeDef[key]
}
for (let key in UiTitleDef) {
    uiObjects[key] = uiObjects[key] || {};
    uiObjects[key].uititile = UiTitleDef[key]
}
for (let key in UiIconDef) {
    uiObjects[key] = uiObjects[key] || {};
    uiObjects[key].uiicon = UiIconDef[key]
}
for (let key in UiDefaultDef) {
    uiObjects[key] = uiObjects[key] || {};
    uiObjects[key].uidefault = UiDefaultDef[key]
}
const myLibrary = new UiLibrary('ant-design-adapter');
//----------------组件定义------------------
for (let key in uiObjects) {
    let obj = uiObjects[key];
    myLibrary.addDefine(key, obj.uitype, obj.uititile, obj.uiicon, obj.uidefault);
}
//----------------属性适配--------------------
myLibrary.addPropAdapter(UiTypeDef.button, ButtonAdapter);
myLibrary.addPropAdapter(UiTypeDef.row, RowAdapter);
myLibrary.addPropAdapter(UiTypeDef.col, ColAdapter);
//------------事件适配---------------
myLibrary.addEventAdapter(UiTypeDef.button, EventAdapter);
//------------视图适配----------------
myLibrary.addViewAdapter(UiTypeDef.button, ButtonViewAdapter);
export default myLibrary;