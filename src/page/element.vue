<template>
  <div>
    <el-table
      :data="tableData"
      :span-method="objectSpanMethod"
      row-key="id"
      border
      style="width: 100%; margin-top: 20px"
    >
      <el-table-column prop="id" label="ID" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="amount1" label="数值 1（元）"></el-table-column>
      <el-table-column prop="amount2" label="数值 2（元）"></el-table-column>
      <el-table-column prop="amount3" label="数值 3（元）"></el-table-column>
    </el-table>
    <el-calendar v-model="value"></el-calendar>
  </div>
</template>

<script>
import { Sortable, MultiDrag } from "sortablejs";

export default {
  name: "element",
  data() {
    return {
      tableData: [
        {
          id: "12987122",
          name: "王小虎",
          amount1: "234",
          amount2: "3.2",
          amount3: 10
        },
        {
          id: "12987123",
          name: "王小虎",
          amount1: "165",
          amount2: "4.43",
          amount3: 12
        },
        {
          id: "12987124",
          name: "王小虎",
          amount1: "324",
          amount2: "1.9",
          amount3: 9
        },
        {
          id: "12987125",
          name: "王小虎",
          amount1: "621",
          amount2: "2.2",
          amount3: 17
        },
        {
          id: "12987126",
          name: "王小虎",
          amount1: "539",
          amount2: "4.1",
          amount3: 15
        }
      ],
      value: new Date()
    };
  },
  mounted() {
    Sortable.mount(new MultiDrag()); //多个拖拽
    this.setSort();
  },
  methods: {
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    },
    //拖拽table中的表
    setSort() {
      let _that = this;
      const el = document.querySelectorAll(
        ".el-table__body-wrapper > table > tbody"
      )[0];
      Sortable.create(el, {
        ghostClass: "sortable-ghost",
        // selectedClass:'sortable-ghost',
        // multiDrag:true,
        setData: function(dataTransfer) {
          dataTransfer.setData("Text", "");
        },

        onEnd: evt => {
          console.log(evt);
          const targetRow = _that.tableData.splice(evt.oldIndex, 1)[0];
          _that.tableData.splice(evt.newIndex, 0, targetRow);
        }
      });
    }
  }
};
</script>

<style>
.sortable-ghost {
  opacity: 0.8;
  color: #fff !important;
  background: #42b983 !important;
}
</style>
