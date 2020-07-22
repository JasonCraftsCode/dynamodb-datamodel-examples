# Ideas to capture on this example

Goal is to have a mostly realistic app, with several access patterns that require 2 or more indexes.

Indexes:

- Local
- Global
- Sort key:
  - string
  - number
  - ? boolean
- Projection:
  - All - simple items that contain all user display data.
  - Key - lookup lots of keys, infrequent lookup, frequent writes or large set of items.
  - List - limited set of common or type specific attributes, on "large" items or avoid frequently updating attributes.

So at least 3 indexes for each projection type.

Areas:

- Schools
- Non-profits
- Government
- First responders
- Cities and parks
- Volunteers
- Small Business
- Startup
- Disabilities
- Open source
- Public domain
- DevOps
- Kids
- Toys
- Hobbies

Restrictions:

- Maximum size of data to store (like not big images or files, or lots of little files)
- Maximum read and write
- Maximum life time of data
- Compute runs in lambda
- Useful to a small set of people
- Minimal AWS costs
- Limit to services that can scale to zero, mostly just aws lambda and dynamodb
- Fun
- Simple but useful
- Use either good sample data or auto generated data.

Storage data types:

- Aggregated data, running calculation (like metrics)
- Saved data to recall later (like todo)
- Shared data between two or more users (like chat)

Access patterns:

-

Ideas:

- Todo app
- Inventory
- Notes
- Q&A
- Facebook
- Twitter
- Teams
- StackOverflow

What could be turned into an open source project that individuals or organizations could use:

- Start simple
- Loosely coupled

Basic table:

- Users
- Groups
- ## Items

Relationships:

- one to one -
- one to many - like a collection of items off the main table
- many to many -
- many to one -
- adjacent lists -
- transactions
-

Read and write conditions:

- ReadOnly
- Hidden
- Deleted
- Owner
- Revision

Data Types:

- Strings -
- Numbers -
- Boolean -
- Binary - Small image
- StringSet -
- NumberSet -
- List of objects
- Map as object
- Map of objects
- Date
- ID
- Composite key
- Split key
- Custom Field
