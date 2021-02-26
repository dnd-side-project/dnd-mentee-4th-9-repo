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
                    sh 'cp /var/lib/jenkins/.env ./frontend'
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
                sh "aws s3 rm s3://dnd-4th-9-see-at/* --recursive"
                sh "aws s3 sync ./build s3://dnd-4th-9-see-at --profile default"
                sh "aws cloudfront create-invalidation --distribution-id E2P190XS1LK5MX --paths '/*' --profile default"
                echo 'deploy done.'
                }
            }
        }
    }
}
