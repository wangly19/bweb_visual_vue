import { Table } from 'view-design'
export default {
  name: 'fill-table',
  render(h) {
    // 传递prop
    const tableProps = {}
    for (let prop in Table.props) {
      tableProps[prop] = this[prop]
    }
    tableProps.height = this.tableHeight

    return h(Table, {
      props: tableProps,
      ref: 'table',
      // 传递事件
      on: this.$listeners,
      // 传递作用域插槽
      scopedSlots: this.$scopedSlots,
      // 传递插槽
      slot: this.$slot
    })
  },
  props: (() => {
    var props = {}
    Object.assign(props, Table.props, {
      height: {
        type: Number
      },
      /** 默认占满父容器 */
      fill: {
        type: Boolean,
        default: true
      }
    })
    return props
  })(),
  watch: {
    height: {
      handler() {
        this.tableHeight = this.height
      }
    },
    immediate: true
  },
  data() {
    // 自带属性值
    return {
      tableHeight: 0
    }
  },
  methods: {
    handleIViewTableResize(el) {
      this.tableHeight = el.offsetHeight
    },
    getTableRef() {
      return this.$refs.table
    }
  },
  mounted() {
    if (this.fill) {
      this.getTableRef().observer.listenTo(this.$el, this.handleIViewTableResize)
    }
    // 传递方法
    for (let method in Table.methods) {
      this[method] = (...args) => Table.methods[method].apply(this.getTableRef(), args)
    }
  },

  beforeDestroy() {
    if (this.fill) {
      this.getTableRef().observer.removeListener(this.$el, this.handleIViewTableResize)
    }
  }
}
