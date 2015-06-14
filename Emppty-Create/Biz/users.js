/**
 * Created by Administrator on 2015/6/14.
 */
var list=[
    {
    id:1,
    name:'admin',
    password:'admin'
},{
    id:2,
    name:'test',
    password:'test'
}
];

var users= {
    user: list,
    getuser: function (a,b) {
        var uname = false;
        for (i = 0; i < this.user.length; i++) {
            if (this.user[i].name.trim() == a.trim() && this.user[i].password.trim() ){
                uname = true;
                break;
            }
        }
        return uname;
    }
}
exports.users=users;