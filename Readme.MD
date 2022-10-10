# Population data application
## Architecture
### Lambda - dataset uploader
First part of the service is lambda in AWS, which downloads the dataset and uploads it into the s3 hourly by event bridge trigger.
![N|Pic](https://github.com/teaguru/population/blob/main/lambda_schedule.png?raw=true)
There is the lambda code:
https://github.com/teaguru/population/blob/main/Lambda.py

![N|Pic](https://github.com/teaguru/population/blob/main/lambda.png?raw=true)

It is better to deploy with terraform but it needs time to implement.

### Web application
Then we have a web application which is based on Flask.
![N|Pic](https://github.com/teaguru/population/blob/main/app.png?raw=true)
> As for me, that part does not require Docker and could be also realised with lanbda, but I contenerized it, because it's task requirement.

Application extracts data from s3 bucket and provides it as html by particular country.
![N|Pic](https://github.com/teaguru/population/blob/main/results.png?raw=true)

Service is hosted at ec2 instances.
It is better to provide infrastructure with terraform.
For example, some of my previous terraform repos:
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
There is a playbook:
https://github.com/teaguru/population/blob/main/deploy.yml
There is a docker install role:
https://github.com/teaguru/population/tree/main/roles

Pipeline is simple, we could add testing stages and quality gates.
Also dev, stage and prod enviroments must be implemented.

