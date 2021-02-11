def ACCESS_KEY_ID = "AWS_ACCESS_KEY_ID"
def SECRET_ACCESS_KEY = "AWS_SECRET_ACCESS_KEY"

pipeline {
    agent any
    tools {
        nodejs "node14"
        git "git"
    }

    stages {
        stage('prepare') {
            steps {
                    git branch: "${BRANCH}", credentialsId: "GIT_ACCOUNT", url: 'https://github.com/dnd-mentee-4th/dnd-mentee-4th-9-repo.git'
            }
        }
        stage('build') {
            steps {
                    dir('frontend'){
                        sh "yarn install"
                        sh "CI=false yarn build"
                }
            }
        }
        stage('deploy') {
            steps {
                dir('frontend'){
                sh "aws s3 sync ./build s3://dnd-4th-9-see-at --profile default"
                echo 'deploy done.'
                }
            }
        }
    }
}
