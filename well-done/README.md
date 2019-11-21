# WellDone Dashboard

You can find the deployed project at https://well-done.welldone.now.sh/.
Backend is deployed at https://welldone-db.herokuapp.com/ 

## Contributors
---------------------------------------------------------------------------------------------------------------------------------------------------------|
| ### Joshua Diamond 
| [<img src="https://avatars2.githubusercontent.com/u/46494969?s=400&v=4" width = "50" />](https://avatars2.githubusercontent.com/u/46494969?s=400&v=4) | 
| [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Josh-Diamond)|                            
|  [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/josh-e-diamond/) | 
----------------------------------------------------------------------------------------------------------------------------------------------------------|
|### Julie Thrall-Stewart 
|[<img src="https://avatars3.githubusercontent.com/u/51095071?s=400&v=4" width = "50" />](https://avatars3.githubusercontent.com/u/51095071?s=400&v=4) | 
|[<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/juliehtrallstewart)| 
----------------------------------------------------------------------------------------------------------------------------------------------------------|
| ### LaVon Mejia
| [<img src="https://avatars2.githubusercontent.com/u/5023620?s=400&u=f90e57af87fdd9d4d9396344c92c40968a882116&v=4" width = "100" />](https://avatars2.githubusercontent.com/u/5023620?s=400&u=f90e57af87fdd9d4d9396344c92c40968a882116&v=4) | 
| [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/lavonmejia)                                  |                              
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/lavonmejia/) | 
----------------------------------------------------------------------------------------------------------------------------------------------------------|
| ### Reese Kunz	
| [<img src="https://avatars3.githubusercontent.com/u/50683954?s=400&v=4" width = "50" />](https://avatars3.githubusercontent.com/u/50683954?s=400&v=4) | 
| [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/reesekunz)     |    
|  [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/reesekunz/)  |
----------------------------------------------------------------------------------------------------------------------------------------------------------|
| ### Anthony Rende 	
| [<img src="https://avatars1.githubusercontent.com/u/20798984?s=400&v=4" width = "50" />](https://avatars1.githubusercontent.com/u/20798984?s=400&v=4) | 
| [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/jazz-code)    |
|----------------------------------------------------------------------------------------------------------------------------------------------------------|
|### Jason Prince  	
|[<img src="https://avatars3.githubusercontent.com/u/20310701?s=400&v=4" width = "50" />](https://avatars3.githubusercontent.com/u/20310701?s=400&v=4) |
|[<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/endersgame1977) |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|
|### Hong Tran	
| [<img src="https://avatars2.githubusercontent.com/u/50851248?s=400&v=4" width = "50" />](https://avatars2.githubusercontent.com/u/50851248?s=400&v=4) |
| [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Jessiehongtran)                                 |
|  [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/hong-jessie-tran-35970286/) |                      
|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Troy Schnennum 
| [<img src="https://avatars2.githubusercontent.com/u/51007480?s=400&v=4" width = "50" />](https://avatars2.githubusercontent.com/u/51007480?s=400&v=4) |
| [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/TroySchennum)                                 |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|

    
<br>
<br>


## Project Overview

WellDone International is a non-profit organization working to improve access to clean water which is essential to human health, productivity, and well-being. They place proprietary modular sensors on pumps in Cambodia and soon also in Uganda.

Their  work combines research, technology, and design to catalyze development solutions that are transformative, community-driven, and sustainable.

Building on the work of Labs 15, they enlisted our teams support in order to build out their internal dashboard for monitoring the real time statuses of pump functionality.  This involved building a robust backend and updating the aesthetics and user friendliness of the front-end.  In addition, we have included dozens of tests, robust information for future developers on this project, including a detailed readme and API documentation.

[Trello Board](https://trello.com/b/BhNi8L2H/labs-17-welldone)

[Product Canvas](https://www.notion.so/2505aad2c6a24aa2bd68c332370bfbfc?v=fcba394b346b46f6a8c2673571dc7151)

[UX Design files](https://www.figma.com/file/VtIl2XiHAPvsDYvmdejQFc/WellDone-Hand-off)



### Key Features

- Authenticated Sign-In - Only Users with Admin created accounts can access the dashboard 
- Interactive Dashboard Map - Shows all pumps, filterable by status, links to a detail of each pumps history 
- Overview - Qualitative summary of all pumps including a sortable, filterable grid, and ability to export to CSV, the grid can accomodate more data as well   
- Settings - Admin can create, update and delete accounts
- Robust backend Endpoints - endpoints pull in data from a remote 

## Tech Stack

### Front end built using:

#### React 
#### Emotion CSS & SCSS
#### Axios and Fetch
#### React Router
#### Formik/Yup

#### Front end deployed to NOW
### Details
- Log In - users as organizations has the ability to log in and get access into pump and sensor data, without logging in, users are prevented from accessing into pages and getting pump data. 
- Log Out - users as organizations has the ability to log out and end access the web app. 
- Search - to locate a specific pump, users are able to search on map based on village name or sensor physical id. 
- Filter - add in to search function, users can select certain village or type of pump (functional, non-functional, unknown) to filter pumps. 
- See pump details - by clicking into a pump on map, users can see the recent statuses of the pump and can be directed into a detail page of that pump.
- Access into pure sensor data - at Monitor page, users can get access into all sensor information. 
- Edit name, email, password - users can edit/update their information including name, email, password. 
- Superusers - can add new pumps and organizations into the Prismic Welldone Dashboard.

#### [Back end](https://github.com/labs17-WellDone/backend) built using:

#### Node/Express/SQLite3, with PostgreSQL used upon deploy to Heroku
#### Knex.js
#### AxioswithAuth and JWT
#### Jest
### Details
- Dynamic sensor data is aggregated from IoTile for each sensor every day and then stored directly into our PostgreSQL schema.
- Static pump and organization data is aggregated from the Prismic API and inserted into 
the Welldone database.


# API Documentation
[All Endpoint Documentation for API] (https://app.swaggerhub.com/apis-docs/Jessiehongtran/well-done/1.0.0#/Organizations)


## Site Structure Diagrams
[Diagram](https://github.com/labs17-WellDone/backend)
[Iteration of Database] (https://app.dbdesigner.net/designer/schema/0-welldone_database_schema-a7343184-1ae8-49cd-83b1-3d37f142bd2e)


# Installation Instructions

Clone this repo into your local, and run `npm` to install your dependencies.

## Other Scripts

    * build - `npm build`
    * start - `npm start`
    * test - `npm test`



## Historical Documentation
Labs 15 Code Base
https://github.com/labs17-WellDone/frontend_old
