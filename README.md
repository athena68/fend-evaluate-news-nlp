# Project Intro

This project creates a Web App evaluate news using NLP by utilize MeaningCloud API for Sentimental Analysis

## Getting started

You will need to install everything:

`cd` into your new folder and run:
- `npm install`

## Setting up the API
You will be using the MeaningCloud Sentiment Analysis API for this project.
So firstly, you have to create an account with MeaningCloud, you will be given a license key to start using the API.

### Step 1: Signup for an API key
First, you will need to go [here](https://www.meaningcloud.com/developer/create-account). Signing up will get you an API key. Don't worry, currently, the API is free to use up to 20,000 requests per month. It is free to check how many requests you have remaining for the day.

### Step 2: Create your own .env file

- [ ] Create a new ```.env``` file in the root of your project
- [ ] Go to your .gitignore file and add ```.env``` - this will make sure that we don't push our environment variables to Github! If you forget this step, all of the work we did to protect our API keys was pointless.
- [ ] Fill the .env file with your API keys like this:
```
API_KEY=**************************
```
## Running
- `npm run build-prod`
- `npm run start`

