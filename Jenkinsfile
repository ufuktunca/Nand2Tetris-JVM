pipeline {
    agent any

     environment {
        HOME = '.'
    }

    tools {
        nodejs "npm"
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run test'
            }
        }
    }
}