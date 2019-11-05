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
      script {
        sh "curl -u 2957b1a9-7cde-45c4-82c5-7941f40e2c0a:T0MdYldhEDMkiTi0mRnvYe1pWYy56SaC0li4fnFhVBxcUJvVWPQ2Cc2EMYPNP10a -X POST https://eu-de.functions.cloud.ibm.com/api/v1/namespaces/agirijak%40in.ibm.com_Kgspace/triggers/testDemoTrigger?blocking=true -d '{"message":"hahah jenkins"}' -H 'Content-Type: application/json'"
      }
      //script {
        //sh "curl -v 'https://jsonplaceholder.typicode.com/posts/1'"
        //echo 'One way or another, I have finished' 
     // }
    }
  }
}
