pipeline {
    agent any

        docker {
        image 'node:15-alpine'
        args '-u root:root'
        reuseNode true
    }
    stages {
        stage('Build') {
            steps {
//                sh 'rm -rf /bitnami/jenkins/home/workspace/JVM/node_modules'
                sh 'npm install'
                sh 'npm run test'
            }
        }
    }
}