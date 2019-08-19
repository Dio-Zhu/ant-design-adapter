import {PropAdapter} from '../index-deps';
import Utils from "../Utils";
import {UiTitleDef, UiTypeDef} from "../Defines";
export default class RowAdapter extends PropAdapter{

    //--------------生命周期方法--------------------
    // //配置页面的元数据
    // onPageMetas(options){
    //     return super.onPageMetas(options);
    // }
    //配置页面的属性
    onPageProps(options){
        return {
            "buttons": [{
                text: '添加格子',
                onClick: function (e,options) {
                    let {tplNode,tplTree} = options;
                    let value = 1+tplNode.children?tplNode.children.length:0;
                    Utils.appendNode(tplNode,{
                        uitype:UiTypeDef.col,
                        uititle:UiTitleDef.col+value
                    });
                    return true;
                }
            }]
        }
        return RowPage(options);
    }
    // //数据转换为值的适配
    // onDataToValue(options){
    //     return super.onDataToValue(options);
    // }
    // //值转换为数据的适配
    // onValueToData(options){
    //      super.onValueToData(options);
    // }
}