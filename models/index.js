const User = require("./User")
const Tank = require("./Tank")
const Fish = require("./Fish")

User.hasMany(Tank,{
    onDelete:"CASCADE"
})
Tank.belongsTo(User)

Tank.hasMany(Fish,{
    onDelete:"CASCADE"
})
Fish.belongsTo(Tank)

module.exports = {
    User,
    Tank,
    Fish
}