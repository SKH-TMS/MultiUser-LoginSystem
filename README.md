# MultiUser-LoginSystem

we are using two different connections for the user and admin and to differentiate between both User and Admin i am Adding the userType, when i log in so if we login through the user the token of user will be generated and vise-versa. this is implemented in token/route.ts and also in both these pages ie in adminData/LoginAdmin and userData/LoginUser:-

function: sessionStorage.setItem()

You can use below link to know how to create this app

https://available-soon

**If you face any error after doing below steps, then please update current version of your installed NodeJS software.**

## Starting Code (Base code)

Repositry Number: T18

## Versions Detail

### Version 0 (v0)

- Navigation bar is common for all users
- Home page is also common for all user

### Version 1 (v1)

- Navigation bar is different
- Home page is common for all user

## How to Run:

- Open folder for any version
- Open this folder with VS Code
- Open VS code terminal and type command

      npm install

- Above command will install all neccessary packages and create node_modules folder in your downloaded code.

- Now run below command to run this app

      npm run dev

- env.local file is necessary. Rename env.txt file as .env.local

- Import database into MongoDB Compass:

      1. Open MongoDB Compass.
      2. Create new database named as "team_manager_db" and collection name as "register_user". These names are defined in src/app/api/register/route.ts
      3. Database name is also used in .env.local file
      4. If you want to add our created-data, then you can follow below instructions.
            a. Before proceed instructions, it is noted that if you already created data, then unique ID may be duplicated with our Data-IDs. Therefore, be carefull otherwise database-error may rise.
            Create database and collection as mentioned above.
            b. Navigate to the database and click on "Add Data" > "Import File"
            c. Select the team_manager_db.register_user.json file and import it into the appropriate collection
