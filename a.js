/**
 * Created by wb-zxs269841 on 2017/3/3.
 */
function a() {
    var d,s="今天的日期是：";
    d = new Date();
    s+= d.getFullYear() +"年";
    s+=d.getMonth()+1+ "月";
    s+=d.getDay()+"星期";
    return s
}
console.log(a());