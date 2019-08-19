//标识唯一ID
var _uuid = 0;
var Utils = {
    //生成一个唯一ID序列数
    uuid: function () {
        return Date.now() + '_' + _uuid++;
    }
    //给指定节点追加一个子节点，nid未指定则自动生成一个唯一nid
    , appendNode: function (pnode, node) {
        if (!pnode || !node) return;
        pnode.children = Array.isArray(pnode.children) ? pnode.children : [];
        if (!node.nid) node.nid = 'nid_' + Utils.uuid();//注意：生成"nid"属性
        pnode.children.push(node);
    }
    //递归遍历树数据，其中参数tree为数组
    , loopTreeData: function (tree, callback) {
        let _this = this;
        (tree || []).forEach(function (item, index, arr) {
            if (item && Array.isArray(item.children)) {
                _this.loopTreeData(item.children, callback)
            }
            callback(item, index, arr);
        });
    }
    //依据nid查找当前节点的父节点
    , findParentNode: function (tree, nodeId) {
        if (!tree || !nodeId) return;
        let pNode = null;
        this.loopTreeData(Array.isArray(tree) ? tree : [tree], function (item) {
            //找到第一个父级节点就不再匹配
            if (pNode == null && item && Array.isArray(item.children)) {
                let isParent = (item.children || []).some(function (child) {
                    return child.nid === nodeId;//注意：匹配"nid"属性
                });
                if (isParent) pNode = item;
            }
        });
        return pNode;
    }
    //查找树节点下指定uikey的节点
    , findByUiKey: function (nodes, uikey) {
        var results = this.findWithPropName(nodes, 'uikey', uikey, true, true);
        return results.length > 0 ? results[0] : null;
    }
    /**
     * 查找树节点下指定节点属性值匹配的节点
     * @param nodes {array} 子节点集合
     * @param propName {string} 属性名
     * @param propValue {*} 属性值
     * @param loop{boolean} 默认：true，是否递归遍历子集合
     * @param only{boolean} 默认：true，是否匹配到第一个就终止
     * @param childPropName{boolean} 默认：children，子节点集合的属性名
     */
    , findWithPropName: function findWithPropName(nodes, propName, propValue, loop, only, childPropName) {
        var _results = [];
        var _nodes = Array.isArray(nodes) ? nodes : [];
        var _childPropName = childPropName ? childPropName : 'children';
        for (var i = 0; i < _nodes.length; i++) {
            var node = _nodes[i];
            if (typeof(node) !== 'object') continue;
            if (node[propName] && node[propName] == propValue) {
                _results.push(node);
                if (only == undefined || only == true) break;
            }
            if (loop != false && node[_childPropName] && node[_childPropName].length > 0) {
                var currResults = this.findWithPropName(node[_childPropName], propName, propValue, loop, only, _childPropName);
                if (currResults != null) {
                    _results = _results.concat(currResults);
                }
            }
        }
        return _results;
    }
};
module.exports = Utils;