pipeline {
    agent any

    tools {
        nodejs "npm"
    }
    stages {
        stage('Build') {
            steps {
                sh 'chown -R 1001:0 "/.npm"'
                sh 'npm install'
                sh 'npm run test'
            }
        }
    }
}