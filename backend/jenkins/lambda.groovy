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
                }
            }
        }
        stage('deploy') {
            steps {
                dir('test_dir'){
                    dir('backend'){
                        dir('deployment'){
                            dir('lambda'){
                                sh 'npm install serverless-python-requirements'
                                sh 'sls deploy --region ap-northeast-2' 
                            }
                        }
                    }
                    
                }
            }
        }
    }
}