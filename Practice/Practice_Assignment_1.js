//Create collection “Project_Data” with Fields (Project_ID, Project_Name, Project_Location,Budget)
//1. Insert minimum 10 documents in it.
  db.Project_Data.insertMany([
	{Project_ID:1,Project_Name:"Project 1",Project_Location:"Location A",Budget:100000},
	{Project_ID:2,Project_Name:"Project 2",Project_Location:"Location B",Budget:200000},
	{Project_ID:3,Project_Name:"Project 3",Project_Location:"Location C",Budget:300000},
	{Project_ID:4,Project_Name:"Project 4",Project_Location:"Location D",Budget:400000},
	{Project_ID:5,Project_Name:"Project 5",Project_Location:"Location  E",Budget:500000},
	{Project_ID:6,Project_Name:"Project 6",Project_Location:"Location F",Budget:600000},
	{Project_ID:7,Project_Name:"Project 7",Project_Location:"Location G",Budget:700000},
	{Project_ID:8,Project_Name:"Project 8",Project_Location:"Location H",Budget:800000},
	{Project_ID:9,Project_Name:"Project 9",Project_Location:"Location I",Budget:900000},
	{Project_ID:10,Project_Name:"Project 10",Project_Location:"Location J",Budget:1000000}
	])
	
//2. Write a MongoDB query to display all the documents in the collection Project_Data.
db.Project_Data.find()
 
//3. Write a query to display Project Name and Location.
db.Project_Data.find({},{Project_Name:1, Project_Location: 1, _id:0})

//4. Write a query to sort all the documents in ascending order of proejct ID.
db.Project_Data.find().sort({ Project_ID: 1 })

//5. Write a query to display first document from Project_Data
db.Project_Data.find().limit(1)  

//6. Write a query to display first five documents from Project_Data
db.Project_Data.find().limit(5)

//7. Write a query to sort all the documents in descending order of Project_Name
db.Project_Data.find().sort({Project_Name:-1})

//8. Write a query to display documents having budget over 25000.
db.Project_Data.find({Budget:{$gt:25000}})

//9. Write a query to display projects with ‘null’ budget.
db.Project_Data.find({Budget:null})

//10. Write a query to display number of documents available in Project_Data Collection
db.Project_Data.countDocuments()
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
