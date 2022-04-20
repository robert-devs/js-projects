const companies = [
  { name: "company one", category: "finance", start: 1981, end: 2003 },
  { name: "company two", category: "Retail", start: 1992, end: 2008 },
  { name: "company Three", category: "auto", start: 1992, end: 2007 },
  { name: "company four", category: "Retail", start: 1992, end: 2010 },
  { name: "campany five", category: "technology", start: 2009, end: 2014 },
  { name: "campany six", category: "finance", start: 1987, end: 2010 },
  { name: "company seven", category: "auto", start: 1986, end: 1996 },
  { name: "company eight", category: "techonoly", start: 2011, end: 2016 },
  { name: "company nine", category: "Retail", start: 1981, end: 1989 },
];
const ages = [33, 12, 20, 16, 5, 54, 44, 13, 61, 13, 15, 45, 25, 64, 32];

//for(let i=0;i<companies.length;i++){
//  console.log(companies[i]);
//}

// For Each
//companies.forEach(function(company){
//console.log(company);
//})

//filter
// let canDrink=[];
// for(let i=0;i<ages.length; i++){
//     if(ages[i]>21){
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink);

// const canDrink=ages.filter(function(ages){
//     if(ages>=21){
//         return true
//     }
// })

// const canDrink =  ages.filter(age=> age>=21);
// console.log(canDrink);

// filter retailCompanies
// const retailCompanies = companies.filter(function(company){
//     if(company.category ==='Retail')
//     return true
// })

const retailCompanies = companies.filter(
  (company) => company.category === "Retail"
);
// console.log(retailCompanies);

//Get 80`s comapaniies

const eightiesCompanis = companies.filter(
  (company) => company.start >= 1980 && company.start <1990
);
// console.log(eightiesCompanis)

// lasted for 10yeer
const lastTenYears= companies.filter(company=>(company.end-company.start >=10));

//console.log(lastTenYears)


//MAP
// create arrarys of campany name

const companyNmes = companies.map(function(company){
    return company.name;
});

const testMap = companies.map(company=>`${company,name} [${company.start}-{company.end}]`);

const agesSquare=ages.map(age=>Math.sqrt(age));
// console.log(agesSquare)
const agesTimesTwo=ages.map(age=> age*2);

//console.log(agesTimesTwo)


//Sort

//sort companies by start
// const sortedCompanies = companies.sort(function( c1,c2){
//   if(c1.start>c2.start){
//     return 1

//   }else{
//     return -1;
//   }

// });
//console.log(sortedCompanies);

//eE6 sort method =>
// const sortedCompanies = companies.sort((a,b)=>(a.start>b.start ?1:-1));

// console.log(sortedCompanies)

//sort ages

// const sortAges = ages.sort((a,b) => (a-b));

// console.log(sortAges)


//reduce

// let ageSum = 0;
// for(let i = 0; i < ages.length;i++){
//   ageSum +=ages[i];
// }

// const ageSum = ages.reduce(function(total,age){
//  return total+age;
// },0);
// const ageSum = ages.reduce((total,age) =>total+age,0);
// console.log(ageSum);

//get total years for companies




// const totalCompanies = companies.reduce((total,company) => total+company.end-company.start,0);

// console.log(totalCompanies)


const combined = ages
.map(ages => ages*2)
.filter(age =>ages =>40)
.sort((a,b) => a-b)
.reduce((a,b) => a+b,0)

console.log(combined)