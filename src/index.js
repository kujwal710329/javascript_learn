//----------------
// COUNTRIES BY REGION
//----------------

// async function findCountries(region, keyword){
//   let currpage = 1;
//   const allData = [];
//   const response = await fetch(`https://jsonmock.hackerrank.com/api/countries/search?region=${region}&name=${keyword}&page=${currpage}`)
//   const result = await response.json();
//   result.data.forEach((el)=>{
//     allData.push(el.name+","+el.population);
//   })
//   const totalpage = result.total_pages;
//   while(currpage<=totalpage){
//     currpage++;
//     const newresponse = await fetch(`https://jsonmock.hackerrank.com/api/countries/search?region=${region}&name=${keyword}&page=${currpage}`)
//     const newresult = await newresponse.json();
//     newresult.data.forEach((el)=>{
//       allData.push(el.name+","+el.population);
//     })
//   }
//   allData.sort((avalues, bvalues)=>{
//     const avalue = avalues.split(",")[1];
//     const bvalue = bvalues.split(",")[1];
//     return avalue-bvalue;
//   })
//   console.log(allData)
// }
// findCountries("Europe", "de");

//----------------
// MAXIMUM TRANSFER
//----------------

// async function maximumTransfer(name, city){
//   let currpage = 1;
//   const allData = [];
//   const response = await fetch(`https://jsonmock.hackerrank.com/api/transactions?page=${currpage}`);
//   const result = await response.json();
//   result.data.forEach((el)=>{
//     allData.push(el.txnType+" "+el.amount);
//   })
//   const totalpages = result.total_pages;
//   while(currpage <= totalpages){
//     currpage++;
//     const newresponse = await fetch(`https://jsonmock.hackerrank.com/api/transactions?page=${currpage}`);
//     const newresult = await newresponse.json();
//     newresult.data.forEach((el)=>{
//       allData.push(el.txnType+" "+el.amount);
//     })
//   }
//   const debitdata = allData.filter((el)=>{return el.startsWith("debit")})
//   const creditdata = allData.filter((el)=>{return el.startsWith("credit")})

//   const getnumeric = (el)=>{
//     return parseFloat(el.replace(/[^\d.-]/g, ""))
//   }
//   const maxdebit = debitdata.reduce((max, currvalue)=>{
//     const value = getnumeric(currvalue);
//     return value > max ? value : max;
//   }, 0)
//   const maxcredit = creditdata.reduce((max, currvalue)=>{
//     const value = getnumeric(currvalue);
//     return value > max ? value : max;
//   }, 0)
//   console.log(maxcredit)
//   console.log(maxdebit)

// }
// maximumTransfer("Helena Fernandez", "Ilchester");
