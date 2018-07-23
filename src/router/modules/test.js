export default{
    label:"测试",
    icon:"el-icon-menu",
    name:"test",
    pages:[
        {
            path:"/test/test_basic",
            label:"基础editor",
            component:()=>import("@/pages/test/Test_basic"),
            meta:{
                title:"test_basic",
            },
        },
        {
            path:"/test/test_enum",
            label:"枚举editor",
            component:()=>import("@/pages/test/Test_enum"),
        }
    ],

}