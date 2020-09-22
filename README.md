# Employee-Directory

# Table-Contents
- [Description](#Description)
- [Installation Instructions](#Instructions)
- [Deployment](#Deployment)
- [Demo Link](#Link)
- [Contributors](#Contributors)
- [Questions](#Questions)

# Description:
An employee or manager would benefit greatly from being able to view non-sensitive data about other employees. It would be particularly helpful to be able to filter employees by name.

# Instructions:
Since this app is created with [React](https://reactjs.org/) we will need to install the boiler plate of sorts. This can be achieved by typing the following in your terminal. 
```
npx create-react-app <appname>
```
where "appname" is the name of the app we want to assign it. 

Following this installation will give us all of the necessary files and boiler plate codes in the right folder structure to help us get started. 
```
npm run start
```
to get the app started.

# Deployment:
This app will be deployed on github pages by doing the following steps in order: 

Install the "gh-pages" dependency in the app 
```
npm install gh-pages - save -dev
```

Next we add "homepage" property into the package.json file.
```
“homepage”: “http://{Github-username}.github.io/{Github-repo-name}"
```

We then add the following scripts under "scripts" in package.json
```
“scripts”: {
//…
“predeploy”: “npm run build”,
“deploy”: “gh-pages -d build”
}
```

The final step is to deploy it on github pages by typing 
```
npm run build
```

# Link
The link to the demo of the deployed app can be found [here](https://drive.google.com/file/d/1a-53EaHCkCfxgGXTOKVqZVOaelX60Xhl/view).

# Contributors
Anyone with a [Github](https://github.com/) account can fork the [Repo](https://github.com/maurya512/Employee-Directory) and contribute to it. 

# Questions
Any questions about this app or to collab for a project together shoot an [email](patelmaurya0512@gmail.com).

