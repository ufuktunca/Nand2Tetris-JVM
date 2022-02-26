pipeline {
    agent any

    tools {
        nodejs "npm"
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm cache clean'
                sh 'npm install'
                sh 'npm run test'
            }
        }
    }
}