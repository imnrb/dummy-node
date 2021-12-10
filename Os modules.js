const os=require('os')
const user=os.userInfo()
console.log(user);
console.log(`system uptime is ${os.uptime} seconds`);
const current={
    name:os.type(),
    release:os.release(),
    totalmemo:os.totalmem(),
    freememo:os.freemem(),
}
console.log(current);