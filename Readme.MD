# Population data application
## Architecture
### Lambda - dataset uploader
First part of the service is lambda in AWS, wich download the dataset and upload in to the s3 horly by event bride trigger.
![N|Pic] (https://github.com/teaguru/population/blob/main/lambda_schedule.png?raw=true)
There is the lambda code:
https://github.com/teaguru/population/blob/main/Lambda.py

![N|Pic] (https://github.com/teaguru/population/blob/main/lambda.png?raw=true)

That should be better deployed with terraform but need time to implement.

### Web application
Than we have a web application wich based on Flask.
![N|Pic] (https://github.com/teaguru/population/blob/main/app.png?raw=true)
> As for me that part not required Docker and could be also realise with lanbda, but I contenerized it, beacuse it's task requirements.

Application extract data from s3 bucket and provede as html by particular country.
Service is hosted at ec2 instances.
Infrastructure should be better provided with terraform.
For example one of my previous terraform repos:
https://github.com/teaguru/Terraform-Aws-Wordpress
https://github.com/teaguru/terraform-aws-route53

That could be necessary to add autoscaling groups.
![N|Pic](https://github.com/teaguru/population/blob/main/Cloud_Architecture.png?raw=true)
There is codebase:
https://github.com/teaguru/population
Main logic is here:
https://github.com/teaguru/population/blob/main/script.py
Later we could add uploading of the artifact to S3. For now country for selection is hardcoded but that culd be fixed.
Application could be run manually with 
``flask run``

### CI/CD
CI/CD implemented with Jenkins
There is Jenkinsfile:
https://github.com/teaguru/population/blob/main/Jenkinsfile
We use ansible role to deploy application.
Pipeline is simple, we could add testing stages and quality gates.

