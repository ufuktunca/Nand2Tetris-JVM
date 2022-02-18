pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
        }
    }

    stages {
        stage ("Build"){
            steps {
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