pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        echo "build"
      }
    }
  }
  post {
    always {
      echo 'One way or another, I have finished' 
      //script {
        //sh "curl -v 'https://jsonplaceholder.typicode.com/posts/1'"
        //echo 'One way or another, I have finished' 
     // }
    }
  }
}
