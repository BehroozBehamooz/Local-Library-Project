let people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
  ];
  
  function groupBy(objectArray, property) {
      grouped=objectArray.reduce((acc,singleObj)=>{
        let key=singleObj.age
        if ( !acc[key])
            acc[key]=[];

        acc[key].push(singleObj);
      },{});
  }