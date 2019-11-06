pipeline {
  agent any
  environment {
    json = '{"message":"hahah jenkins 34"}'
  }
  stages {
    stage('build') {
      steps {
        echo "build HA HA HA "
        echo "Post-Build result 1: ${currentBuild.displayName}"
        echo "Init currentResult 1 : ${currentBuild.currentResult}"

      }
    }
  }
  post {
    always {
      echo 'One way or another, I have finished' 
      echo "Post-Build result 2 : ${currentBuild.result}"
      echo "Init currentResult 2: ${currentBuild.currentResult}"
      script {
        sh """
           curl -H 'Content-Type: application/json' \
           -u 2957b1a9-7cde-45c4-82c5-7941f40e2c0a:T0MdYldhEDMkiTi0mRnvYe1pWYy56SaC0li4fnFhVBxcUJvVWPQ2Cc2EMYPNP10a \
           -d '{"message":"status ${currentBuild.currentResult}"}' \
           -X POST https://eu-de.functions.cloud.ibm.com/api/v1/namespaces/agirijak%40in.ibm.com_Kgspace/triggers/testDemoTrigger?blocking=true 
           """
      }
    }
  }
}
