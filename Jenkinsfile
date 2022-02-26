pipeline {
    agent any

    tools {
        nodejs "npm"
    }
    stages {
        stage('Build') {
            steps {
                sh 'rm -rf /bitnami/jenkins/home/workspace/JVM/node_modules'
                sh 'npm install'
                sh 'npm run test'
            }
        }
    }
}