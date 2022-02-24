pipeline {
    agent any

    stages {
        stage ("Build"){
            steps {
                sh "node -v"
                sh "npm install"
            }
        }

        stage ("Test"){
            steps {
                sh "npm run test"
            }
        }

        stage ("Lint"){
            steps {
                sh "npm run lint"
            }
        }
    }


} 
