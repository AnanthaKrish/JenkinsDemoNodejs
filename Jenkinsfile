pipeline {
  environment {
    json = '{"message":"hahah jenkins 34"}'
  }
  agent any
  tools {nodejs "node"}
  stages {

    stage('Sending message') {
    steps {
    script {
          sh """
             curl -H 'Content-Type: application/json' \
             -u 2957b1a9-7cde-45c4-82c5-7941f40e2c0a:T0MdYldhEDMkiTi0mRnvYe1pWYy56SaC0li4fnFhVBxcUJvVWPQ2Cc2EMYPNP10a \
             -d '{"message":"Started build for ${env.BUILD_TAG}", "status":"STARTED"}' \
             -X POST https://eu-de.functions.cloud.ibm.com/api/v1/namespaces/agirijak%40in.ibm.com_Kgspace/triggers/testDemoTrigger?blocking=true 
             """
      }
      }
    }
    stage('Cloning Git') {
      steps {
        git 'https://github.com/AnanthaKrish/JenkinsDemoNodejs'
      }
    }
 
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         sh 'npm test'
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
           -d '{"message":"Finished build for ${env.BUILD_TAG}","status":"${currentBuild.currentResult}"}' \
           -X POST https://eu-de.functions.cloud.ibm.com/api/v1/namespaces/agirijak%40in.ibm.com_Kgspace/triggers/testDemoTrigger?blocking=true 
           """
      }
    }
  }
}
