
export default {
    // params :  target目标DOM,advert广告Dom内容
    // 大於屏幕高度 插入
    insertToContent(target,advert){
        let vh = window.innerHeight
        let offset = 0
        let ah = 100  //廣告dom高度
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
                        insert(doms[i],advertDom)
                        // i--  
                    }

                }
            }else{
                // return console.log('參數錯誤');
            }
        }
    }
}