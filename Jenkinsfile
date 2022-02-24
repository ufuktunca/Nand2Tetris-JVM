pipeline {
    agent any

    tools {
        nodejs "npm"
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm i'
                sh 'npm run test'
            }
        }
    }
}