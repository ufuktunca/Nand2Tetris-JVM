pipeline {
    agent any

    tools {
        nodejs "npm"
    }
    stages {
        stage('Build') {
            steps {
                sh 'sudo npm -g config set user root'
                sh 'npm install'
                sh 'npm run test'
            }
        }
    }
}