I had the same issue and was able to resolve it thanks to this thread https://stackoverflow.com/a/50029962/6943587.

You need to specify the docker label, aka which slave(s) have docker. There are two ways to do this, that I know of.

(Option 1 - preferred) Set docker label in Jenkinsfile
Set the agent as docker image with docker slave label.

// Jenkinsfile

pipeline {
  // Assign to docker slave(s) label, could also be 'any'
  agent {
    label 'docker' 
  }

  stages {
    stage('Docker node test') {
      agent {
        docker {
          // Set both label and image
          label 'docker'
          image 'node:7-alpine'
          args '--name docker-node' // list any args
        }
      }
      steps {
        // Steps run in node:7-alpine docker container on docker slave
        sh 'node --version'
      }
    }

    stage('Docker maven test') {
      agent {
        docker {
          // Set both label and image
          label 'docker'
          image 'maven:3-alpine'
        }
      }
      steps {
        // Steps run in maven:3-alpine docker container on docker slave
        sh 'mvn --version'
      }
    }
  }
} 
(Option 2) Set docker label in configuration
Set the "docker label" in the Jenkins configuration under "Pipeline Model Definition", per the Jenkins docs here. This will only run the pipeline builds on slaves with this label. Then you can create your pipeline like so...

// Jenkinsfile

pipeline {
  // "Top-level" agent is assigned to docker slaves via Jenkins pipeline configuration
  agent none

  stages {
    stage('Docker node test') {
      agent {
        docker {
          image 'node:7-alpine'
          args '--name docker-node' // list any args
        }
      }
      steps {
        // Steps run in node:7-alpine docker container on docker slave
        sh 'node --version'
      }
    }
    
    stage('Docker maven test') {
      agent {
        docker {
          image 'maven:3-alpine'
        }
      }
      steps {
        // Steps run in maven:3-alpine docker container on docker slave
        sh 'mvn --version'
      }
    }
  }
}