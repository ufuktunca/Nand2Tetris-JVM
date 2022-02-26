pipeline {
    agent any

    tools {
        nodejs "npm"
    }
    stages {
        stage('Build') {
            steps {
                
                sh 'npm run test'
            }
        }
    }
}