pipeline {
    agent any
    parameters {
        gitParameter (branchFilter: 'origin/(release.*|sprint.*|feature.*|hotfix.*|bugfix.*|main|develop)', defaultValue: 'none', name: 'GIT_REF', type: 'PT_BRANCH_TAG', useRepository: "https://github.com/teaguru/population.git", sortMode: 'DESCENDING_SMART')
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
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-registry', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                    script {
                        if (ALREADY_BUILT) {
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
        stage('Ansible deploy') {
            agent {
                docker {
                    image 'openebs/ansible-runner'
                    args '-u 0:0'
                    reuseNode true
                }
            }
            steps {
                // withCredentials([sshUserPrivateKey(credentialsId: 'private_key', keyFileVariable: 'Key')]) {
                withCredentials([file(credentialsId: 'ansible-key', variable: 'FILE')]) {
                    sh """sed 's/image_tag/${COMMIT_HASH}/g' deploy.yml"""
                    sh 'ls deploy.yml'
                    sh "ansible-playbook deploy.yml -i inventory --private-key ${FILE} --user ubuntu"

                }
            }

        }
    }
}