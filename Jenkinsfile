pipeline {
    agent any

    tools {
        nodejs "npm"
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm cache clean --force'
                sh 'npm install'
                sh 'npm run test'
            }
        }
    }
}