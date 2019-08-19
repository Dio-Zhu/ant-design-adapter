import {MetaType,LogicUtils,PropAdapter} from '../index-deps';
export default class ButtonAdapter extends PropAdapter{

    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let baseMetas = super.onPageMetas(options);
        let {tplNode,tplTree} = options;
        let propMetas = [{
            name: 'type',
            label: '颜色',
            type: MetaType.Select,
            help:'按钮的填充颜色',
            props: {
                options:[{text:'灰色',value:'default'},{text:'蓝色',value:'primary'},{text:'绿色',value:'success'},{text:'红色',value:'error'},{text:'黄色',value:'warning'}]
            },
            defaultValue: 'default'
        },{
            name: 'size',
            label: '大小',
            type: MetaType.Select,
            props: {
                options:[{text:'默认',value:''},{text:'较小',value:'small'},{text:'较大',value:'large'}]
            },
            defaultValue: ''
        },{
            name: 'icon',
            label: '图标',
            type: MetaType.Icon,
            props: {},
            defaultValue: ''
        },{
            name: 'ghost',
            label: '透明',
            help:'按钮的内部是否填充颜色',
            type: MetaType.Bool,
            props: {},
            defaultValue: false
        },{
            name: 'visible',
            label: '显示',
            type: MetaType.Bool,
            props: {},
            defaultValue: true
        },{
            name: 'disabled',
            label: '禁用',
            type: MetaType.Bool,
            props: {},
            defaultValue: false
        }];
        return baseMetas.concat(propMetas);
    }
    // //配置页面的属性
    // onPageProps(options){
    //     return super.onPageProps(options);
    // }
    // //数据转换为值的适配
    // onDataToValue(options){
    //     return super.onDataToValue(options);
    // }
    //值转换为数据的适配
    onValueToData(options){
        super.onValueToData(options);
        let {formMeta,formData,tplNode,tplTree} = options;
        for(let i=0;i<formMeta.length;i++) {
            let meta = formMeta[i];
            if(!(meta.name in formData))continue;
            let value = formData[meta.name];
            switch (meta.name) {
                case "uititle":{
                    LogicUtils.isExistSet(tplNode,'children',value);
                    break;
                }
            }
        }
    }
    //当前数据被创建时的适配
    onCreateData(options){
        let {tplTree,tplNode,tplParentNode} = options;
        tplNode.children = tplNode.uititle;
    }
}