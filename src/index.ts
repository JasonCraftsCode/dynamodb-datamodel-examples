import { table } from './Table';

/*
Layout:
- index (entry point)
- model
- router
- 

Take existing example?  Like seed?

Simple:
- REST
- Data validation
- 2 models
- GSI w/ composite key
- get, delete, put, update, query
- verified with tests (UI?)
- Test: unit, local mock, deployed in AWS.

Complex:
- ? Graphql
- 2+ models
- Split id
- Composite key w/ GSI (and LSI)
- Each Field
- Each action: get, delete, put, update, query
- Put + condition
- Delete + condition
- Query GSI and LSI
- Update + update expression
- Update + update expression + condition

Future:
- Query heterogeneous models (access pattern)
- Batch
- Transaction
- 

*/
