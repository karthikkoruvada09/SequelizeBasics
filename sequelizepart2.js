const Sequelize=require('sequelize');


const sequelize=new Sequelize('crud','karthik','rapid@123',{
    host:'localhost',
    dialect : 'mysql'
  });

sequelize.sync();

const Model1=Sequelize.Model;
const Model2=Sequelize.Model;
const Model3=Sequelize.Model;

class User extends Model1 {}
User.init({ name: Sequelize.STRING }, { sequelize, modelName: 'user',freezeTableName:true,timestamps:false })
class Task extends Model2 {}
Task.init({ name: Sequelize.STRING }, { sequelize, modelName: 'task',freezeTableName:true,timestamps:false })
class Tool extends Model3 {}
Tool.init({ name: Sequelize.STRING }, { sequelize, modelName: 'tool' ,freezeTableName:true,timestamps:false})

Task.belongsTo(User)
User.hasMany(Task)
User.hasMany(Tool, { as: 'Instruments' })



// condition ====> Task.belongsTo(User)

// Task.findAll({ include: [ User ] }).then(tasks => {
//     console.log(JSON.stringify(tasks))
  
//     /*
//       [{
//         "name": "A Task",
//         "id": 1,
//         "createdAt": "2013-03-20T20:31:40.000Z",
//         "updatedAt": "2013-03-20T20:31:40.000Z",
//         "userId": 1,
//         "user": {
//           "name": "John Doe",
//           "id": 1,
//           "createdAt": "2013-03-20T20:31:45.000Z",
//           "updatedAt": "2013-03-20T20:31:45.000Z"
//         }
//       }]
//     */
//   })

//result ===>>> 

//   [{"id":2,"name":"cleaning","userId":1,"user":{"id":1,"name":"nandhu"}},{"id":3,"name":"cleaning","userId
//   ":2,"user":{"id":2,"name":"chinnu"}}]





// condition====>  User.hasMany(Task)

// User.findAll({ include: [ Task ] }).then(users => {
//     console.log(JSON.stringify(users))
  
//     /*
//       [{
//         "name": "John Doe",
//         "id": 1,
//         "createdAt": "2013-03-20T20:31:45.000Z",
//         "updatedAt": "2013-03-20T20:31:45.000Z",
//         "tasks": [{
//           "name": "A Task",
//           "id": 1,
//           "createdAt": "2013-03-20T20:31:40.000Z",
//           "updatedAt": "2013-03-20T20:31:40.000Z",
//           "userId": 1
//         }]
//       }]
//     */
//   })

//   // result :[{"id":1,"name":"nandhu","tasks":[{"id":2,"name":"cleaning","userId":1}]},{"id":2,"name":"chinnu","tasks":[{"id":3,"name":"cleaning","userId":2}]}]






//  condition ===>   User.hasMany(Tool, { as: 'Instruments' })

//note while querying also we shoiuld use instruments or else error will be thrown
//inner join using require:true inside include or else  without reuired or reuired: false it will be outer join

// User.findAll({
//     attributes:['name'],
//     include: [{
//         model: Tool,
//         as: 'Instruments',
       

//     }]
// }).then(users => {
//     console.log(JSON.stringify(users))

//     /*
//       [{
//         "name": "John Doe",
//         "id": 1,
//         "createdAt": "2013-03-20T20:31:45.000Z",
//         "updatedAt": "2013-03-20T20:31:45.000Z",
//         "Instruments": [{
//           "name": "Toothpick",
//           "id": 1,
//           "createdAt": null,
//           "updatedAt": null,
//           "userId": 1
//         }]
//       }],

//       [{
//         "name": "John Smith",
//         "id": 2,
//         "createdAt": "2013-03-20T20:31:45.000Z",
//         "updatedAt": "2013-03-20T20:31:45.000Z",
//         "Instruments": [{
//           "name": "Toothpick",
//           "id": 1,
//           "createdAt": null,
//           "updatedAt": null,
//           "userId": 1
//         }]
//       }],
//     */
//   })

// Result ===>>     [{"name":"nandhu","Instruments":[{"id":3,"name":"machine","userId":1}]},{"name":"chinnu","Instruments":[{"id":2,"name":"broom","userId":2}]}]


// User.findAll({
//     attributes:['name'],
//     include: [{
//         model: Tool,
//         as: 'Instruments',
//         required:false

//     }]
// }).then(users => {
//     console.log(JSON.stringify(users))

//     /*
//       [{
//         "name": "John Doe",
//         "id": 1,
//         "createdAt": "2013-03-20T20:31:45.000Z",
//         "updatedAt": "2013-03-20T20:31:45.000Z",
//         "Instruments": [{
//           "name": "Toothpick",
//           "id": 1,
//           "createdAt": null,
//           "updatedAt": null,
//           "userId": 1
//         }]
//       }],

//       [{
//         "name": "John Smith",
//         "id": 2,
//         "createdAt": "2013-03-20T20:31:45.000Z",
//         "updatedAt": "2013-03-20T20:31:45.000Z",
//         "Instruments": [{
//           "name": "Toothpick",
//           "id": 1,
//           "createdAt": null,
//           "updatedAt": null,
//           "userId": 1
//         }]
//       }],
//     */
//   })

// Result====>   [{"name":"chinnu","Instruments":[{"id":2,"name":"broom","userId":2}]},{"name":"nandhu","Instruments":[{"id":3,"name":"machine","userId":1}]},{"name":"karthik","Instruments":[]}]



// User.findAll({
//     attributes:['name'],
//     include: [{
//         model: Tool,
//         as: 'Instruments',
//         attributes:['id'],
//          where: {  },
//                  required:false
        

//     }]
// }).then(users => {
//     console.log(JSON.stringify(users))

//     /*
//       [{
//         "name": "John Doe",
//         "id": 1,
//         "createdAt": "2013-03-20T20:31:45.000Z",
//         "updatedAt": "2013-03-20T20:31:45.000Z",
//         "Instruments": [{
//           "name": "Toothpick",
//           "id": 1,
//           "createdAt": null,
//           "updatedAt": null,
//           "userId": 1
//         }]
//       }],

//       [{
//         "name": "John Smith",
//         "id": 2,
//         "createdAt": "2013-03-20T20:31:45.000Z",
//         "updatedAt": "2013-03-20T20:31:45.000Z",
//         "Instruments": [{
//           "name": "Toothpick",
//           "id": 1,
//           "createdAt": null,
//           "updatedAt": null,
//           "userId": 1
//         }]
//       }],
//     */
//   })




// User.findAll({
//     attributes:['name'],
//     include: [{
//         model: Tool,
//         as: 'Instruments',
//         // attributes:['id'],
//         // where: { name: "broom" }
//         required:true

//     }]
// }).then(users => {
//     console.log(JSON.stringify(users))

//     /*
//       [{
//         "name": "John Doe",
//         "id": 1,
//         "createdAt": "2013-03-20T20:31:45.000Z",
//         "updatedAt": "2013-03-20T20:31:45.000Z",
//         "Instruments": [{
//           "name": "Toothpick",
//           "id": 1,
//           "createdAt": null,
//           "updatedAt": null,
//           "userId": 1
//         }]
//       }],

//       [{
//         "name": "John Smith",
//         "id": 2,
//         "createdAt": "2013-03-20T20:31:45.000Z",
//         "updatedAt": "2013-03-20T20:31:45.000Z",
//         "Instruments": [{
//           "name": "Toothpick",
//           "id": 1,
//           "createdAt": null,
//           "updatedAt": null,
//           "userId": 1
//         }]
//       }],
//     */
//   })





// inner joining on two tables results in outer join since no Required attribute at all


User.findAll({
    include:[{model:Task},{model:Tool,as:'Instruments'}]
    
}).then(data=>console.log(JSON.stringify(data)));


//results in inner join

User.findAll({
    include:[{model:Task,required:true},{model:Tool,as:'Instruments',required:true}]
    
}).then(data=>console.log(JSON.stringify(data)));



//from another file just for example how multiple times attributes attribute etc... can be used inside include everytime

  Marks.findAll({attributes:['sub_id','std_id'],order:Sequelize.literal('sub_id DESC'),
    include:[{model:Students,as:'id',required:true,attributes:['name']},
              {model:Subjects,as:'ids',required:true,attributes:['name']}]
  }).then(data=>res.send(JSON.stringify(data)));
