<template>
  <div class="row">
    <div class="col-12">
      <div class="earnings_table">
        <h4>最近收益</h4>
        <div class="line">
          <div class="small_line"></div>
        </div>
        <div class="earnings_table_content">
          <b-table striped hover :items="items" :fields="fields"></b-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "recent_earnings",
    data() {
      return {
        fields: ['isActive', 'last_name', 'age','first_name','last_name'],
        items: [
          {isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald'},
          {isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw'},
          {isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson'},
          {isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney'}
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  .row {
    border: 1px solid #e5e5e5;
    .col-12 {
      .earnings_table {
        padding: 1.25rem 1.5625rem 3.5rem;
        background: white;
        h4 {
          font-size: 14px;
          text-align: left;
          font-weight: 600;
        }
        .line {
          border-bottom: 4px solid #eeeeee;
          position: relative;
          border-radius: 3px;
          .small_line {
            width: 4.125rem;
            border-bottom: 4px solid #0954a2;
            position: absolute;
            left: 0;
            bottom: -4px;
          }
        }
        .earnings_table_content {
          margin-top: 1.25rem;
        }
      }

    }
  }
</style>
