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
        stage('deploy') {
            steps {
                dir('resources'){
                sh "aws s3 sync . s3://seeat-image-dev-image-bucket --delete --profile seeat"
                echo 'deploy done.'
                }
            }
        }
    }
}
