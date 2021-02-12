def ACCESS_KEY_ID = ""
def SECRET_ACCESS_KEY = ""

pipeline {
    agent any
    tools {
        nodejs "node14"
        git "git"
    }

    stages {
        stage('prepare') {
            steps {
                dir('test_dir'){
                git branch: "${BRANCH}", credentialsId: "GIT_ACCOUNT", url: 'https://github.com/dnd-mentee-4th/dnd-mentee-4th-9-repo.git'
                    sh 'ls -al'
                    sh 'cp /var/lib/jenkins/.env ./backend'
                }
            }
        }
        stage('build') {
            steps {
                dir('test_dir'){
                    dir('backend'){
                    sh 'ls -al'
                     sh 'docker build --tag dnd-9th:1.0 .'
                    }
                }
            }
        }
        stage('deploy') {
            steps {
                dir('test_dir'){
                    sh 'ls -al'
                    dir('backend'){
                        sh 'docker-compose down'
                        sh 'docker-compose up -d --build'
                    }

                }
            }
        }
    }
}
