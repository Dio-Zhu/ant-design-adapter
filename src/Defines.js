/**
 * UI枚举定义
 */
//常用
var UiTypeDef = {};//定义uitype值,uitype标识元素类型
var UiTitleDef = {};//定义uititle值,uititle标识元素名称
var UiDefaultDef = {};//定义uidefault值,uidefault预置元素默认属性值
var UiIconDef = {};//定义uiicon值,uiicon为元素图标名称


UiTypeDef.button = 'Button';
UiTitleDef.button = '按钮';
UiIconDef.button = 'icon-anniu';

UiTypeDef.row = 'Row';
UiTitleDef.row = '24格布局';
UiIconDef.row = 'icon-zhagebuju';
UiTypeDef.col = 'Col';
UiTitleDef.col = '格子';


module.exports = {
    UiTypeDef,
    UiTitleDef,
    UiDefaultDef,
    UiIconDef
};
