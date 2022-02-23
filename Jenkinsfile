pipeline {
    agent any

    tools {nodejs "nodejs"}

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
