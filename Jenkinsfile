pipeline {
  agent none
  stages {
    stage('Say hello') {
      steps {
        echo 'Helloka'
      }
    }
    stage('build') {
      steps {
        sh 'npm i'
      }
    }
  }
}