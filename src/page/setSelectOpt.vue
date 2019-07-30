<template>
    <div>
        <el-select v-model="value1"
                   @change="changeSelect('value1')"
                   placeholder="请选择">
            <el-option
                    v-for="item in disposeOptions1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>
        <el-select v-model="value2"
                   @change="changeSelect('value2')"
                   placeholder="请选择">
            <el-option
                    v-for="item in disposeOptions2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>
        <el-select v-model="value3"
                   @change="changeSelect('value3')"
                   multiple
                   placeholder="请选择">
            <el-option
                    v-for="item in disposeOptions3"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>

<script>
  export default {
    name: 'setSelectOpt',
    data () {
      return {
        value1: '',
        value2: '',
        value3: [],
        options1: [
          {
            value: '',
            label: ''
          }, {
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }],
        options2: [{
          value: '选项1',
          label: 'js'
        }, {
          value: '选项2',
          label: 'php'
        }, {
          value: '选项3',
          label: 'java'
        }, {
          value: '选项4',
          label: 'python'
        }, {
          value: '选项5',
          label: 'c'
        }],
        options3: [{
          value: '选项1',
          label: '数学'
        }, {
          value: '选项2',
          label: '语文'
        }, {
          value: '选项3',
          label: '英语'
        }, {
          value: '选项4',
          label: '物理'
        }, {
          value: '选项5',
          label: '化学'
        }],
      }
    },

    created () {

    },

    computed: {
      disposeOptions1 () {
        return this.getFinallyOptions('value1', this.options1)
      },

      disposeOptions2 () {
        return this.getFinallyOptions('value2', this.options2)
      },

      disposeOptions3 () {
        return this.getFinallyOptions('value3', this.options3)
      },
    },

    methods: {
      changeSelect (field) {
        if (!window.localStorage) {
          this.$message({
            type: 'warning',
            message: '浏览器不支持localStorage!'
          })
          return false
        }

        let storage = window.localStorage
        if (storage.getItem(field)) {
          if (this[field] === '') return false
          let map = new Map(JSON.parse(storage.getItem(field)))
          let date = new Date().getTime()

          if (Object.prototype.toString.call(this[field]) === '[object Array]') {
            map.set(this[field][this[field].length - 1], date)
          } else {
            map.set(this[field], date)
          }

          storage.setItem(field, JSON.stringify(map))
        } else {
          if (this[field] === '') return false
          let map = new Map()
          let date = new Date().getTime()

          if (Object.prototype.toString.call(this[field]) === '[object Array]') {
            map.set(this[field][this[field].length - 1], date)
          } else {
            map.set(this[field], date)
          }

          storage.setItem(field, JSON.stringify(map))
        }
      },

      getFinallyOptions (field, options) {
        if (!window.localStorage) {
          this.$message({
            type: 'warning',
            message: '浏览器不支持localStorage!'
          })
          return []
        }

        let storage = window.localStorage
        if (storage.getItem(field)) {
          let map = new Map(JSON.parse(storage.getItem(field)))

          let sortMap = this.mapSort(map)

          let sortOptions = []

          for (let key of sortMap.keys()) {
            options.forEach((item) => {
              if (key === item.value) {
                sortOptions.unshift(item)
              }
            })
          }

          options.forEach((item) => {
            if (!sortMap.get(item.value)) {
              if (item.value === '') {
                sortOptions.unshift(item)
              } else {
                sortOptions.push(item)
              }
            }
          })

          return sortOptions
        } else {
          return options
        }
      },

      mapSort (map) {
        let arrayObj = Array.from(map)
        arrayObj.sort(function (a, b) {
          return a[1] - b[1]
        })

        return new Map(arrayObj)
      }
    },
  }
</script>

<style scoped>

</style>
