# Population data application
## Architecture
### Lambda - dataset uploader
First part of the service is lambda in AWS, wich download the dataset and upload in to the s3 horly by event bride trigger.
There is the lambda code:
https://github.com/teaguru/population/blob/main/Lambda.py
![N|Pic](https://github.com/teaguru/population/blob/main/lambda.png?raw=true)
Than should be better provided with terraform but need time to realise.
### Web application
Than we have a web application wich based on Flask.
> As for me that part not required Docker and could be also realise with lanbda, but I contenerized it, beacuse it's task requirements.

Application extract data from s3 bucket and provede as html by particular country.
Service is hosted at ec2 instances.
![N|Pic](https://github.com/teaguru/population/blob/main/Cloud_Architecture.png?raw=true)
There is codebase:
https://github.com/teaguru/population


### CI/CD
CI/CD implemented with Jenkins
There is Jenkinsfile:
https://github.com/teaguru/population/blob/main/Jenkinsfile
We use ansible role to deploy application.


