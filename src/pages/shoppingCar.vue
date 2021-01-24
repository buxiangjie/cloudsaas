<template>
  <div>
    <el-table :data="tableData" stripe>
      <el-table-column prop="name" label="书籍名称" width="120"></el-table-column>
      <el-table-column prop="saleDate" label="出版时间" width="120"></el-table-column>
      <el-table-column prop="price" label="价格" width="120">
        <template slot-scope="scope">
          {{ scope.row.price | getFinalPrice }}
        </template>
      </el-table-column>
      <el-table-column prop="count" label="购买数量" width="127">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="reduce(scope.$index)">-</el-button>
          {{ scope.row.counts }}
          <el-button type="primary" size="mini" @click="scope.row.counts++">+</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="120">
        <template slot-scope="scope">
          <el-button type="primary" @click="delBook(scope.$index)">移除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <span v-show="tableData.length>0">总价为:{{ countPrice | getFinalPrice }}</span>
    <Confirm ref="good"></Confirm>
    <el-button @click="child">iii</el-button>
    <slo v-slot="slo">
      <span v-for="it in slo.item">{{it}}---</span>
    </slo>
  </div>
</template>

<script>
import Confirm from "../components/confirm";
import slo from "../components/slo";

export default {
  name: "shoppingCar",
  components: {
    Confirm,
    slo
  },
  data() {
    return {
      'tableData': [
        {
          'name': '《算法导论》',
          'saleDate': '2006-9',
          'price': 85.33,
          'counts': 1
        },
        {
          'name': '《UNIX》',
          'saleDate': '2006-2',
          'price': 59.00,
          'counts': 1
        },
        {
          'name': '《编程珠玑》',
          'saleDate': '2008-10',
          'price': 39.00,
          'counts': 1
        },
        {
          'name': '《代码大全》',
          'saleDate': '2006-3',
          'price': 128.00,
          'counts': 1
        }
      ]
    }
  },
  methods: {
    delBook(rowIndex) {
      this.tableData.splice(rowIndex, 1);
    },
    reduce(rowIndex) {
      if (this.tableData[rowIndex].counts === 1) {
        this.tableData.splice(rowIndex, 1);
      } else {
        this.tableData[rowIndex].counts--;
      }
    },
    child(){
      console.log(this.$refs.good.dd);
    }
  },
  filters: {
    getFinalPrice(price) {
      return "￥" + price.toFixed(2)
    }
  },
  computed: {
    countPrice() {
      let sum = 0.00;
      for (let book in this.tableData) {
        sum += this.tableData[book].counts * this.tableData[book].price;
      }
      return sum
    }
  }
}
</script>
<style scoped>

</style>
