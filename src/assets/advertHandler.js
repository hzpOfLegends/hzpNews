
export default {
    // 创建广告内容 (測試用)
    createAdvert(){
        let advertContent = document.createElement("div")
        advertContent.innerHTML = '<div style="width:100%;height:100px;line-height:100px;background:red;text-align:center;font-size:22px;color:#fff;margin-bottom:15px">廣告內容</div>'
        return advertContent
    },
    // 内文广告插入 （大於屏幕高度 插入）
    // params :  target目标DOM,advert广告Dom内容
    insertToContent(target,advert=this.createAdvert()){
        let vh = window.innerHeight  // 用戶當前窗口高度
        let offset = 0
        let ah = 100+15  //廣告dom高度 (先假設)
        insert(target,advert)
        function insert(targetDom,advertDom){
            if(targetDom.nodeType === 1){
                let doms = targetDom.children
                if(doms.length<1){
                    return;
                }
                for(let i=0;i<doms.length;i++){
                    if( (doms[i].offsetTop+doms[i].offsetHeight) > (offset+vh) && (doms[i].offsetTop+doms[i].offsetHeight)<(offset+ah+vh*2) ){
                        offset = (doms[i].offsetTop+doms[i].offsetHeight) + ah
                        targetDom.insertBefore(advertDom.cloneNode(true),doms[i].nextElementSibling)  //在下一個元素前插入
                        i++
                    }else if( (doms[i].offsetTop+doms[i].offsetHeight) >= (offset+ah+vh*2) ){
                        insert(doms[i],advertDom) //递归遍历（对于大于两个屏幕以上的元素）
                        // i--  
                    }
                }
            }else{
                // return console.log('參數錯誤');
            }
        }
    }

}