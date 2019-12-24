 <template>
   <div>
     <Table border :columns="columns1" :data="data1"></Table>
   </div>
 </template>
 <script>
   export default {
     name: 'machine',
     data() {
       return {
         columns1: [{
             title: '节点',
             key: 'name'
           },
           {
             title: '所属范围',
             key: 'age'
           },
           {
             title: '警告',
             key: 'address'
           },
           {
             title: '机器/型号',
             key: 'address'
           },
           {
             title: '管理',
             key: 'address'
           }
         ],
         data1: [{
             name: 'John Brown',
             age: 18,
             address: 'New York No. 1 Lake Park',
             date: '2016-10-03'
           },
           {
             name: 'Jim Green',
             age: 24,
             address: 'London No. 1 Lake Park',
             date: '2016-10-01'
           },
           {
             name: 'Joe Black',
             age: 30,
             address: 'Sydney No. 1 Lake Park',
             date: '2016-10-02'
           },
           {
             name: 'Jon Snow',
             age: 26,
             address: 'Ottawa No. 2 Lake Park',
             date: '2016-10-04'
           }
         ]
       }
     }
   }
 </script>
