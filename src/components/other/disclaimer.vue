<template>
<div class="disclaimer">
    <div class="tab">
        <div class="view">
            <span class="back-btn" @click="$router.go(-1)"><i class="el-icon-arrow-left" style="font-weight:700"></i> 返回</span>
        </div>
    </div>
    <div class="main">
        <h2>重要聲明</h2>
        <p>本站所有文章由會員即時發表，本站對所有文章的真實性、完整性及立場等，不負任何法律責任。所有文章內容只代表發文者個人意見，並非本網站之立場，用戶不應信賴內容，並應自行判斷內容之真實性。發文者擁有在 OopsDaily 張貼的文章。</p>
        <p>由於本站是受到「即時發表」運作方式所規限，故不能完全監察所有即時文章，如有不適當或對於文章出處有疑慮，請聯絡我們告知，我們將在最短時間內進行撤除。本站有權刪除任何留言及拒絕任何人士發文，同時亦有不刪除文章的權利。</p>
    </div>
</div>
</template>
<script>
export default {
  
}
</script>
<style lang="less">
.disclaimer {
    .tab {
        width:100%;
        background-color: #1b53a0;
        .view {
        height:48px;
        max-width:1180px;
        margin:0 auto;
        display: flex;
        align-items:center;
            .back-btn {
                font-size:15px;
                color:#fff;
                cursor:pointer;
                padding:5px;
                // padding-left:0;
            }
        }
    }
    .main {
        max-width:1180px;
        margin:12px auto;
        padding:5%;
        padding-top:2%;
        text-align:left;
        background-color: #fff;
        margin-top:12px;
        min-height:666px;
        // border-top:3px solid #1b54a0;
        // border-radius:3px;
        h2 {
            text-align:center;
            font-size:27px;
            margin-bottom:33px;
            font-weight:600;
        }
        h3 {
            font-size:20px;
            margin-top:30px;
            font-weight:600;
        }
        p {
            font-size:16px;
        }
    }
}
</style>


