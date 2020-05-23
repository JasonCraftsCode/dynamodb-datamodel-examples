import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { Index, Table } from 'dynamodb-datamodel';

// Define a Global Secondary Index (GSI) key interface for GSI0.
export interface GSI0Key {
  G0P: Table.PrimaryKey.PartitionString;
  G0S?: Table.PrimaryKey.SortString;
}

// Create an Index object for GSI0 based on GSI0Key, and project all attributes.
export const gsi0 = Index.createIndex<GSI0Key>({
  name: 'GSI0',
  // Defines the key type ('HASH' or 'RANGE') for the GSI primary keys.
  keySchema: {
    G0P: Table.PrimaryKey.PartitionKeyType,
    G0S: Table.PrimaryKey.SortKeyType,
  },
  projection: { type: 'ALL' },
});

// Define a Local Secondary Index (LSI) key interface for LSI0, partition key must be same as the table's
export interface LSI0Key {
  P: Table.PrimaryKey.PartitionString;
  L0S?: Table.PrimaryKey.SortNumber;
}

// Create an Index object for LSI0 based on LSI0Key, and project all attributes.
export const lsi0 = Index.createIndex<LSI0Key>({
  name: 'LSI0',
  // Defines the key type ('HASH' or 'RANGE') for the LSI primary keys.
  keySchema: {
    P: Table.PrimaryKey.PartitionKeyType,
    L0S: Table.PrimaryKey.SortKeyType,
  },
  projection: { type: 'ALL' },
});

// Good practice to covert empty values to null
export const client = new DocumentClient({ convertEmptyValues: true });

// Define the table primary key interface.
export interface TableKey {
  P: Table.PrimaryKey.PartitionString;
  S?: Table.PrimaryKey.SortString;
}

// Define the combined primary keys across the table and secondary indexes.
interface KeyAttributes extends TableKey, GSI0Key, LSI0Key {}

// Create the table object with global and local secondary indexes.
// name, keyAttributes and keySchema should match the DynamoDB's table CloudFormation resource.
export const table = Table.createTable<TableKey, KeyAttributes>({
  client,
  name: 'ExampleTable',
  // Defines the attribute type ('S', 'N', 'B') for all primary keys, table and indexes.
  keyAttributes: {
    P: Table.PrimaryKey.StringType,
    S: Table.PrimaryKey.StringType,
    G0P: Table.PrimaryKey.StringType,
    G0S: Table.PrimaryKey.StringType,
    L0S: Table.PrimaryKey.NumberType,
  },
  // Defines the key type ('HASH' or 'RANGE') for the table primary keys.
  keySchema: {
    P: Table.PrimaryKey.PartitionKeyType,
    S: Table.PrimaryKey.SortKeyType,
  },
  globalIndexes: [gsi0] as Index[],
  localIndexes: [lsi0] as Index[],
});
