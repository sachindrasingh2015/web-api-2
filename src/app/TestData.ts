import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService{

  createDb(){

    let bookdetails =[
      {id:100, name:"sachindra singh", Designation:"Developer"},
      {id:200, name:"manish singh", Designation:"Developer"},
      {id:300, name:"biswajit singh", Designation:"Developer"},
      {id:400, name:"lovly singh", Designation:"Developer"}
    ];
    return {books:bookdetails};
  }
}
