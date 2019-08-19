import {MetaType, PropAdapter} from '../index-deps';
export default class ColAdapter extends PropAdapter{

    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let baseMetas = super.onPageMetas(options);
        let myMetas = [{
            name: 'span',
            label: '栅格占位',
            type: MetaType.Number,
            props: {
                min:0,
                max:24,
                enableSelect:false
            },
            defaultValue: null
        }];
        return baseMetas.concat(myMetas);
    }
    // //配置页面的属性
    // onPageProps(options){
    //     return super.onPageProps(options);
    // }
    // //数据转换为值的适配
    // onDataToValue(options){
    //     return super.onDataToValue(options);
    // }
    // //值转换为数据的适配
    // onValueToData(options){
    //      super.onValueToData(options);
    // }
}