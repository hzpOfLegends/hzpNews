export default {
  // 内文广告嵌入 （大於屏幕高度 嵌入）參數：傳入內容父容器
  insertToContent(target) {
      let vh = window.innerHeight  // 用戶當前窗口高度
      let offset = 0
      // 创建广告内容
      // <!-- In Article 這是內文部份 -->

      // advertContent.innerHTML = `<div style="width:100%;min-height:90px;line-height:100px;background:red;text-align:center;font-size:22px;color:#fff;margin-bottom:15px">廣告內容</div> `
      let ah = 90  //預設廣告dom高度
      insert(target, createAdvert())
      function insert(targetDom, advertDom, noParent) {  //noParent表示非始祖父元素
          console.log('HHHHHHHHHHHHHHHH');
          let count = 0
          if (targetDom.nodeType === 1) {
              let doms = targetDom.children
              if(!noParent){  //当始祖父节点总高度不足一屏
                  if( (targetDom.lastElementChild.offsetTop + targetDom.lastElementChild.offsetHeight)<(offset+vh) ){
                      targetDom.appendChild(advertDom.cloneNode(true)) //末尾嵌入 
                      console.log(count++,'不足一屏')
                      return
                  }
              }
              if (doms.length < 1) {
                  if (!noParent) return //排除了非始祖父元素
                  if (targetDom.offsetTop + targetDom.offsetHeight > (offset + vh)) {
                      offset = (targetDom.offsetTop + targetDom.offsetHeight)+ah
                      if (targetDom.nodeName === "IMG") {
                        targetDom.parentNode.parentNode.insertBefore(advertDom.cloneNode(true), targetDom.parentNode.nextElementSibling)  //由于img做了处理，因此在其父元素下面嵌入
                        console.log(count++,'IMG')
                      // i++
                      } else {
                        targetDom.appendChild(advertDom.cloneNode(true))  //作为子元素嵌入
                        console.log(count++,"length<1")
                      }
                      offset = (targetDom.offsetTop + targetDom.offsetHeight)+ah
                  }
                  return;
              }
              for (let i = 0; i < doms.length; i++) {
                  if ((doms[i].offsetTop + doms[i].offsetHeight) > (offset + vh) && (doms[i].offsetTop + doms[i].offsetHeight) < (offset + ah + vh * 2)) {
                      offset = (doms[i].offsetTop + doms[i].offsetHeight)+ah
                      if (i !== (doms.length - 1)) {
                          console.log(doms[i].nextElementSibling)
                          targetDom.insertBefore(advertDom.cloneNode(true), doms[i].nextElementSibling)  //不是最后一个元素，在下一個元素前嵌入
                          console.log(count++,"正常")
                      } else {
                          targetDom.parentNode.appendChild(advertDom.cloneNode(true))  // 最后一个元素，嵌入末尾
                          console.log(count++,"末尾插入")
                      }
                      // i++
                  } else if ((doms[i].offsetTop + doms[i].offsetHeight) >= (offset + ah + vh * 2)) {
                      insert(doms[i], advertDom, true) //递归遍历（对于大于两屏以上的元素） true参数表示非始祖父元素
                      // i--
                  }
              }
          } else {
              // return console.log('參數錯誤');
          }
      }
      //  创建广告
      function createAdvert(){
          let advertContainer = document.createElement("div")
          advertContainer.innerHTML = `
            <div style="width:100%;min-height:90px;line-height:100px;background:red;text-align:center;font-size:22px;color:#fff;margin-bottom:15px">
                <ins class="adsbygoogle"
                  style="display:block"
                  data-ad-client="ca-pub-0155854966618873"
                  data-ad-slot="9236758248"
                  data-ad-format="auto">
                </ins>
            </div>
            `
          let jsDom = document.createElement('script')
        //   jsDom.innerHTML = '(adsbygoogle = window.adsbygoogle || []).push({})'
          advertContainer.appendChild(jsDom)
          return advertContainer
      }
  },
  // 根據傳過來的數量
  createDiv(target) {
    return document.querySelectorAll(target)
  },
  // 側邊插入廣告
  insertToAside(target) {
     // 防止报错 有元素才进入
    if (target.length>=1) {
      let parent = target[0].parentNode
      let reg = /^\+?[1-9][0-9]*$/
      // if(parent.lastChild == target){
      //   let newVdvert = document.createElement("div")
      //   newVdvert.innerHTML='<div style="background:red;width: 300px;height: 250px;margin: 0 auto">廣告</div>'
      //   parent.insertBefore(newVdvert,target.nextSibling)
      // }
      // 如果元素大于或者等于3 才插入广告
      if (target.length >= 3) {
        for (let i = 0; i < target.length + 1; i++) {
          if (reg.test(i / 3)) {
            let newVdvert = document.createElement("div")
            newVdvert.setAttribute("class", "advertising")
            newVdvert.innerHTML = '<div style="background:red;width: 300px;height: 250px;margin: 20px auto;color: white">廣告</div>'
            let a = target[i - 1].nextSibling
            parent.insertBefore(newVdvert, a)
          }
        }
      } else {

      }
    }
  },
  // 监听 新数据回来 刷新 重新加载广告
    reloadAdvert(target){
      if (target.length >=1) {
        for (let i = target.length; i >= 0; i--) {
          let ele = target[i]
          $(ele).remove()
        }
      } else {
        $(target[0]).remove()
      }
    }



}
