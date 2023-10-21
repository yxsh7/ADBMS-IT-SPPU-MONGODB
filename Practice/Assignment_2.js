/*
TI28

Create first Collection 
Universities (Country, City, Name, Location, Students:[
    { year : 2014, number : 24774 },
    { year : 2015, number : 23166 },
    { year : 2016, number : 21913 },
    { year : 2017, number : 21715 }
  ]
)

Insert minimum 10 documents

Create second collection
Courses (University, Name, Level, Marks)
(Level can be Basic, Intermediate, Excellent)

Insert minimum 10 documents

Display documents with country “India” and City “Pune”
Display all documents with fields country, city and name
Find number of documents per university
Find total number of marks Level wise
Find average marks university wise
Find maximum marks level wise and arrange them in descending order
Find minimum marks university wise, arrange them in ascending order and display only first document
Find total number of universities
Split students array field as separate document
Display first and last documents from courses
*/


// Create the "Universities" collection
db.createCollection("Universities")

// Insert 10 university documents

db.Universities.insertMany([
  {
    Country: "India",
    City: "Pune",
    Name: "University A",
    Location: "Location A",
    Students: [
      { year: 2014, number: 24774 },
      { year: 2015, number: 23166 },
      { year: 2016, number: 21913 },
      { year: 2017, number: 21715 },
    ]
  },
  {
    Country: "USA",
    City: "New York",
    Name: "University B",
    Location: "Location B",
    Students: [
      { year: 2014, number: 30000 },
      { year: 2015, number: 28000 },
      { year: 2016, number: 27000 },
      { year: 2017, number: 26000 },
    ]
  },
  {
    Country: "UK",
    City: "London",
    Name: "University C",
    Location: "Location C",
    Students: [
      { year: 2014, number: 18000 },
      { year: 2015, number: 17500 },
      { year: 2016, number: 17000 },
      { year: 2017, number: 16800 },
    ]
  },
  {
    Country: "Canada",
    City: "Toronto",
    Name: "University D",
    Location: "Location D",
    Students: [
      { year: 2014, number: 25000 },
      { year: 2015, number: 24500 },
      { year: 2016, number: 24000 },
      { year: 2017, number: 23500 },
    ]
  },
  {
    Country: "Australia",
    City: "Sydney",
    Name: "University E",
    Location: "Location E",
    Students: [
      { year: 2014, number: 32000 },
      { year: 2015, number: 31000 },
      { year: 2016, number: 30800 },
      { year: 2017, number: 30500 },
    ]
  },
  {
    Country: "India",
    City: "Delhi",
    Name: "University F",
    Location: "Location F",
    Students: [
      { year: 2014, number: 28000 },
      { year: 2015, number: 27500 },
      { year: 2016, number: 27000 },
      { year: 2017, number: 26500 },
    ]
  },
  {
    Country: "USA",
    City: "Los Angeles",
    Name: "University G",
    Location: "Location G",
    Students: [
      { year: 2014, number: 40000 },
      { year: 2015, number: 39000 },
      { year: 2016, number: 38500 },
      { year: 2017, number: 38000 },
    ]
  },
  {
    Country: "UK",
    City: "Manchester",
    Name: "University H",
    Location: "Location H",
    Students: [
      { year: 2014, number: 18000 },
      { year: 2015, number: 17500 },
      { year: 2016, number: 17200 },
      { year: 2017, number: 16900 },
    ]
  },
  {
    Country: "Canada",
    City: "Vancouver",
    Name: "University I",
    Location: "Location I",
    Students: [
      { year: 2014, number: 27000 },
      { year: 2015, number: 26500 },
      { year: 2016, number: 26000 },
      { year: 2017, number: 25500 },
    ]
  },
  {
    Country: "Australia",
    City: "Melbourne",
    Name: "University J",
    Location: "Location J",
    Students: [
      { year: 2014, number: 34000 },
      { year: 2015, number: 33500 },
      { year: 2016, number: 33000 },
      { year: 2017, number: 32500 },
    ]
  }
])

// Create the "Courses" collection
db.createCollection("Courses")

// Insert 10 course documents
db.Courses.insertMany([
  { University: "University A", Name: "Course 1", Level: "Basic", Marks: 80 },
  { University: "University A", Name: "Course 2", Level: "Intermediate", Marks: 90 },
  { University: "University B", Name: "Course 3", Level: "Basic", Marks: 70 },
  { University: "University B", Name: "Course 4", Level: "Intermediate", Marks: 85 },
  { University: "University C", Name: "Course 5", Level: "Basic", Marks: 75 },
  { University: "University C", Name: "Course 6", Level: "Intermediate", Marks: 88 },
  { University: "University D", Name: "Course 7", Level: "Basic", Marks: 92 },
  { University: "University D", Name: "Course 8", Level: "Intermediate", Marks: 78 },
  { University: "University E", Name: "Course 9", Level: "Basic", Marks: 83 },
  { University: "University E", Name: "Course 10", Level: "Intermediate", Marks: 89 },
])

// 1. Display documents with country “India” and City “Pune”
db.Universities.find({Country: "India", City: "Pune"})

// 2. Display all documents with fields country, city and name
db.Universities.find({},{Country: 1, City: 1, Name: 1, _id: 0})

// 3. Find number of documents per university
db.Courses.aggregate([
  { $group: { _id: "$University", count: { $sum: 1 } } }
])

// 4. Find total number of marks Level wise
db.Courses.aggregate([
    { $group: {_id: "$Level", count: {$sum: "$Marks"}}}
])

// 5. Find average marks university wise
db.Courses.aggregate([
  { $group: { _id: "$University", averageMarks: { $avg: "$Marks" } } }
])

// 6. Find maximum marks level wise and arrange them in descending order

db.Courses.aggregate([
  { $group: { _id: "$Level", maxMarks: { $max: "$Marks" } } },
  { $sort: { maxMarks: -1 } }
])

// 7. Find minimum marks university wise, arrange them in ascending order and display only first document

db.Courses.aggregate([
  { $group: { _id: "$University", minMarks: { $min: "$Marks" } } },
  { $sort: { minMarks: 1 } },
  { $limit: 1 }
])

// 8. Find total number of universities

db.Universities.find().count()

// 9. Split students array field as separate document

db.Universities.aggregate([
  { $unwind: "$Students" }
])

// 10. Display first and last documents from courses

db.Courses.find({}).limit(1)
db.Courses.find({}).sort({ _id: -1 }).limit(1)



