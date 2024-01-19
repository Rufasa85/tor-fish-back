const sequelize = require("../config/connection.js");
const {User,Tank,Fish} = require("../models")

const seedMe = async()=>{
    await sequelize.sync({force:true});
    const userData = [
        {
            email:"joe@joe.joe",
            password:"password"
        },
        {
            email:'cats@joe.joe',
            password:"meowmeow"
        }
    ];
    const userSeeds = await User.bulkCreate(userData,{
        individualHooks:true
    })
    console.table(userSeeds.map(usr=>usr.toJSON()));
    console.log('==============================')
    const tankData = [
        {
            name:"first tank",
            UserId:1
        },
        {
            name:'salty like tears',
            UserId:1
        }
    ];
    const tankSeeds = await Tank.bulkCreate(tankData)
    console.table(tankSeeds.map(tank=>tank.toJSON()));
    console.log('==============================')
    const fishData = [
        {
            name:"Frank",
            color:"#c0ffee",
            length:200,
            TankId:2
        },
        {
            name:'Francis',
            color:"#bada55",
            length:400,
            TankId:2
        }
    ];
    const fishSeeds = await Fish.bulkCreate(fishData)
    console.table(fishSeeds.map(fish=>fish.toJSON()));
    console.log('==============================')
    process.exit(0)
}

seedMe();
