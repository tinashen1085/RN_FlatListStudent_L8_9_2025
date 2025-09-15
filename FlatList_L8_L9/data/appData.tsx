/*
This file will define the dataType we are using in our app
We will also create the array DATA here and then
export both so we can import wherever we need them
*/
// declare datatype for each item in array
  type dataType ={
    id: string; //unique identifier
    title: string; // text displayed in flatlist
  }

  const DATA: dataType[] = [
    {id: '1', title: 'First Item'},
    {id: '2', title: 'Second Item'},
    {id: '3', title: 'Third Item'},
    {id: '4', title: 'Fourth Item'},
  ];

  //when epxporting more than one item, we DON'T use
  //the word default, and instead put them in {}
  export { DATA, dataType };
