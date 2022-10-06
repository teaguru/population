pipeline {

  agent none
  parameters {
    choice (
      name: 'DESTINATION',
      description: 'Which environment do you want to deploy to?',
      choices: [
        'dev',
        'stage',
        'prod'
      ]
    )
  }
  stages {
    stage('Set && echo env variables') {
      steps {
        script {
          sh "ls"

        }
      }
    }
  }    
  post {
    failure {
      script {
        echo "The job failed."
      }
    }
    success {
      script {
        echo "The job worked"
      }
    }
  }
}
