
# Schoolient
Cloud Computing, Backend, API

This app is using Express.js framework deployed on Google Cloud App Engine 

**check the endpoint here** :
https://capstone-c23-pc754.et.r.appspot.com/

Environment Setup

- Dependencies 
    - Express (framework) 
    - MySQL (Database/Query)
    - Axios (HTML POST/GET for the ML API)
    - CORS (cross-site)
    - Body Parser

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Deployment

By using Google Cloud SDK / Cloud Shell

```bash
  gcloud app deploy
```


## SQL

Using Google Cloud SQL Instance 

Each submitted data will first be input to the SQL Instance that has been deployed, after that the data will be processed using the POST method to the ML API Endpoint : https://schoolient-ml-pcwabiafva-et.a.run.app/predict


