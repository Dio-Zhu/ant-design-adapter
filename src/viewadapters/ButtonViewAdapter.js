import {ViewAdapter} from '../index-deps';
export default class ButtonViewAdapter extends ViewAdapter{

    //--------------生命周期方法--------------------
    //数据节点视图
    onDataView(options){
        var {tplNode,tplTree} = options;
        var nodeViews = [];
        //点击事件
        if(tplNode.uievents){
            nodeViews.push({
                uititle:'已绑定交互事件',
                uitype:'icon',
                type:'share-alt'
            })
        }
        //隐藏
        if(tplNode.visible==false){
            nodeViews.push({
                uititle:'被隐藏',
                uitype:'icon',
                type:'eye-o'
            })
        }
        return nodeViews;
    }
}