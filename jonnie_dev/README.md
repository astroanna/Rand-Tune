This directory contains one express servers:
* Server.js + App.js - Encapsulated Node/Express web server w/ Mongo Access

Plyr: https://plyr.io/

File content:
* Server.ts - based http server
* App.ts - express server
* DbClient.ts - mongo db client
* DB population files are stored on the createDB file

Make sure you install the node.js server and Mongo DB sofware from the side.  Ensure your path variable contains the execution path of the node.js and mongo binary.

Before starting execute the following within the directory containing the app:

npm install
npm install mongodb
npm install mongoose
npm install plyr

ensure App.ts and AppServer.ts have been compiled to JS, then execute the following commands:

//create the db file directory
0. md db

//Starts the DB server on port 3000
1. start.db.cmd

//Continue from a separate command line
2. mongo --port 3000
>load ('createDB/createAdminUser.js');
>exit

3. startdbClient.admin.cmd
>load ('createDB/populateDB.js');
>exit

4. node AppServer.js 

//navigate to:

http://localhost:8080/
