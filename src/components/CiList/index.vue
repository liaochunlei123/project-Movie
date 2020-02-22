<template>
  <div>
    <div class="cinema_body" v-for="item in cinemasList" :key="item.id">
      <ul>
        <li>
          <div>
            <span>{{item.nm}}</span>
            <span class="q">
              <span class="price">22.9</span> 元起
            </span>
          </div>
          <div class="address">
            <span>{{item.addr}}</span>
            <span>{{item.didtans}}</span>
          </div>
          <div class="card">
            <div v-for="(card,index) in item.tag" :key="index" :class="index | classCard" v-if="card===1">{{ index | formatCard }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "CiList",
  data(){
    return{
      cinemasList:[]
    }
  },

  mounted() {
    this.axios
      .get("/ajax/cinemaList")
      .then(res => {
        console.log(res.data.cinemas);
        this.cinemasList = res.data.cinemas
      })
      .catch(err => {
        console.error(err);
      });
  },

  filters:{
    formatCard(index){
      var card =[
        {index:'allowRefund', value:'退'},
        {index:'vipTag', value:'折扣卡'},
        {index:'snack', value:'小吃'},
        {index:'endorse', value:'改签'},
        {index:'sell', value:'巨幕厅'}
      ];
      for(var i=0;i<card.length;i++){
        if(card[i].index===index){
          return card[i].value;
        }
      }
      return '';
    },

    classCard(index){
      var card=[
        {index:'allowRefund', value:'bl'},
        {index:'vipTag', value:'or'},
        {index:'snack', value:'or'},
        {index:'endorse', value:'bl'},
        {index:'sell', value:'bl'}
      ];
      for(var i=0;i<card.length;i++){
        if(card[i].index===index){
          return card[i].value;
        }
      }
      return '';
    }
   

  }

};
</script>
<style scoped>
.cinema_body ul {
  padding: 20px;
}
.cinema_body li {
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 20px;
}
.cinema_body div {
  margin-bottom: 10px;
}
.cinema_body .q {
  font-size: 11px;
  color: #f03d37;
}
.cinema_body .price {
  font-size: 18px;
}
.cinema_body .address {
  font-size: 13px;
  color: #666;
}
.cinema_body .address span:nth-of-type(2) {
  float: right;
}
.cinema_body .card {
  display: flex;
}
.cinema_body .card div {
  padding: 0 3px;
  height: 15px;
  line-height: 15px;
  border-radius: 2px;
  color: #f90;
  border: 1px solid #f90;
  font-size: 13px;
  margin-right: 5px;
}
.cinema_body .card div.or {
  color: #f90;
  border: 1px solid #f90;
}
.cinema_body .card div.bl {
  color: #589daf;
  border: 1px solid #589daf;
}
</style>