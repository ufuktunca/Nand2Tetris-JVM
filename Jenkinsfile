pipeline {
    agent any

    tools {
        nodejs "npm"
    }
    stages {
        stage('Build') {
            steps {
                sh 'rm -r node_modules/MODULE'
                sh 'npm cache clean --force'
                sh 'npm install'
                sh 'npm run test'
            }
        }
    }
}