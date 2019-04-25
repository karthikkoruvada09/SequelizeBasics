const express=require('express');
const app=express();
const port=3000;



const Sequelize=require('sequelize');
const sequelize=new Sequelize('example','karthik','rapid@123',{
  host:'localhost',
  dialect : 'mysql'
});

//creating tables


//sequelize.sync();


//table2

const Model2 = Sequelize.Model;
class Students extends Model2 {}
Students.init({
  // attributes
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement : true,
    primaryKey: true
  },
    name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  gender:{
    type:Sequelize.STRING,
    allowNull: false
  }
}, {
  sequelize,
  timestamps:false,
  modelName: 'Students',
  freezeTableName: true,
});



//table3
const Model3 = Sequelize.Model;
class Subjects extends Model3 {}
Subjects.init({
  // attributes
  ids: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement : true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
}, {
  sequelize,
  timestamps:false,
  modelName: 'Subjects',
  freezeTableName: true,

});

//table4

const Model4 = Sequelize.Model;
class Marks extends Model4 {}
Marks.init({
  // attributes
  idm: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement : true,
    primaryKey: true
  },
  sub_id:{
    type:Sequelize.INTEGER,
    allowNull: false,
  },
  std_id:{
    type:Sequelize.INTEGER,
    allowNull: false,
  },
  score:{
    type :Sequelize.INTEGER,
    allowNull:false
  }
}, {
  sequelize,
  timestamps:false,
  modelName: 'Marks',
  freezeTableName: true,

});


//assigning multiple foreign keys on Marks table

Marks.belongsTo(Students,{
  as :'id',
  foreignKey :'std_id',
  onDelete :'CASCADE',
  onUpdate :'CASCADE'
});

Marks.belongsTo(Subjects,{
  as :'ids',
  foreignKey :'sub_id'
})





//queries

//find queries

// Students.findOne({where :{id :"1"},attributes :['name',['gender' ,'hehhe']]}).then(data=>{
// console.log(JSON.stringify(data));
// });


// Students.findOrCreate({where :{id : 4,gender :'m',name :"karan"}})
//   .then(([user,created])=>{
//     console.log(user.get({plain :true}))
//     console.log(created);
//   })

// Marks.findAndCountAll({include:[{model:Students,as :'id',required:true}]}).then(data=>{
//   console.log(JSON.stringify(data));
// });


// Students.findAndCountAll({where :{ },offset:2,limit:1}).then(result=>{
//   console.log(result.rows);
//   console.log(result.count);
// })

// Students.findAndCountAll({
//   include: [
//   ],
//   limit: 3
// }).then(result=>{
//     console.log(result.rows);
//     console.log(result.count);
//   })

//  const Op=Sequelize.Op;
// Students.findAll({attributes:['name'], where: { id: { [Op.gte]: [1] } } }).then(projects => {
//   console.log(JSON.stringify(projects.count));
// });

// Marks.findAll({ include: [ {model : Students ,as:'id'} ] }).then(tasks => {
//   console.log(JSON.stringify(tasks))

// });


// Marks.findAll({include :[Students],as :'id',limit:1}).then(data=>{
//   console.log(JSON.stringify(data[0]));
// })


// Marks.findAll({ include:[{model :Students,as :'id' }]}).then(data=>console.log(JSON.stringify(data)))

//


//INNER JOINING SUBJECTS AND STUDENT TABLES

 // Marks.findAll({include:[{model:Students,as:'id'}]}).then(data=>res.send(JSON.stringify(data)));

//SAME AS==> SELECT * FROM  Marks INNER JOIN Students ON STudents.id=Marks.std_id; 

 //Marks.findAndCountAll({ include: [{ all: true }]}).then(data=>res.send(JSON.stringify(data)));


    //SAME AS====>    select * from Marks INNER JOIN Students ON MArks.std_id=Students.id INNER JOIN Subjects ON Subjects.ids=Marks.sub_id;
 //SIMILARTO=====>Marks.findAll({ include: [{ all: true, nested: true }]}).then(data=>res.send(JSON.stringify(data)));;

 // Marks.findAll({include:[{model:Subjects,as:'ids'}]}).then(data=>res.send(JSON.stringify(data)));

 //SAME AS==> SELECT * FROM  Marks INNER JOIN Subjects ON Subjects.ids=Marks.std_id;



app.get('/',(req,res)=>{
//  Marks.findAndCountAll({ include: [{ all: true }]}).then(data=>{
//  res.send(data);

  //});

  
 
})

//AVG QUERY

// Marks.findAll({
//   include:[{model:Students,as:'id'}],        // it is included at last
//   attributes: [[sequelize.fn('AVG', sequelize.col('score')), 'minScorePerSub_id']],
//   group:'Marks.std_id',
//   order:Sequelize.literal('minScorePerSub_id DESC')
//   ,raw:true
// }).then(data=>console.log(data))



//MIN

// Marks.findAll({
//   include:[{model:Subjects,as:'ids'}],
//   attributes: ['Marks.sub_id',[sequelize.fn('MIN', sequelize.col('score')), 'MinSubjectMarksWithSubjectId']],
//   group:'Marks.sub_id'
//   ,raw:true
// }).then(data=>console.log(data))


//MAX

// Marks.findAll({
//   include:[{model:Subjects,as:'ids'}],
//   attributes: ['Marks.sub_id',[sequelize.fn('Max', sequelize.col('score')), 'MaxScoreOfEachSubjectWithSubjectId']],
//   group:'Marks.sub_id'
//   ,raw:true
// }).then(data=>console.log(data))


// Marks.findAll({
//   include:[{model:Students,as : 'id'}],
//   attributes:[[sequelize.fn('SUM',sequelize.col('score')),'percentage']],
//   group:'Marks.std_id',
//   raw:true
// }).then(data=>{
// console.log(data);
// });




//Students.create({id:5,name:"bobby",gender :"f"}).then(data=>console.log(JSON.stringify(data)));
//Students.bulkCreate([{id:6,name:"nani",gender:"m"},{id:7,name:"ram",gender:"m"}]).then(data=>console.log(JSON.stringify(data)));




app.listen(port,()=>{
  console.log(`running on port 3000`)
})