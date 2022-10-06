pipeline {
    agent any
    parameters {
        choice (
            name: 'DESTINATION',
            description: 'Which environment do you want to deploy to?',
            choices: [
                'dev',
                'prod'
            ]
        )
    }
    stages {
        stage('Set && echo env variables') {
            steps {
                script {
                    sh "ls"
                    DOCKER_REGISTRY='858784405926.dkr.ecr.us-east-1.amazonaws.com'
                    ALREADY_BUILT = false
                    DOCKER_IMAGE_NAME='population'
                    COMMIT_HASH = sh(script: "git rev-parse HEAD", returnStdout: true).trim().take(11)


                }
            }
        }

        stage('Docker Build') {
            agent any
            //docker {
            //}
            //}
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-registry', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                    script {
                        if (ALREADY_BUILT && !FORCE_DOCKER_BUILD_BOOLEAN) {
                            echo "The app was already built for COMMIT_HASH: ${COMMIT_HASH}."
                        } else {
                            sh """
                            ###############################
                            ## Docker Build Instructions ##
                            ###############################
                            ls -lah
                            echo '${DOCKER_PASSWORD}' | docker login ${DOCKER_REGISTRY} -u ${DOCKER_USERNAME} --password-stdin
                            docker build -f Dockerfile -t ${DOCKER_REGISTRY}/${DOCKER_IMAGE_NAME}:${COMMIT_HASH} .
                            docker push ${DOCKER_REGISTRY}/${DOCKER_IMAGE_NAME}:${COMMIT_HASH}
                            """
                        }
                    }
                }
            }

        }
        stage('kubectl') {
             agent {
                docker { image 'lqstoronto/helm-jenkins-slave' }
    }
            //docker {
            //}
            //}
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-registry', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                    script {
                        sh 'kubectl cluster-info'
                    }
                }
            }

        }
    }
}
