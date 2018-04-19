pipeline {
  agent any
  stages {
    stage('Say hello') {
      steps {
        echo 'Helloka'
      }
    }
    stage('sonar') {
      steps {
        waitForQualityGate()
      }
    }
  }
}