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
             -u xxxxxxx-c2f0-xxxxxxx-92b0-xxxxxxx:ZMdVKJJIWSnszslxxxxxxxX6884zZ0VvzxxxxxxxZAIK89C \
             -d '{"message":"Started build for ${env.BUILD_TAG}", "status":"STARTED", "tag":"${env.BUILD_ID}${env.BUILD_ID}", "idValue":"${env.BUILD_ID}"}' \
             -X POST https://us-south.functions.cloud.ibm.com/api/v1/namespaces/axxxxxxx%40.xxxxxxx.com_demo/actions/SendBuildRepot?blocking=true
             """
      }
      }
    }
    stage('Cloning Git') {
      steps {
        git 'https://github.ibm.com/agirijak/JenkinsDemoNodejs.git'
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
      echo 'One way or another, I have finished execution' 
      echo "Post-Build result 2 : ${currentBuild.result}"
      echo "Init currentResult 2: ${currentBuild.currentResult}"
      echo "Init currentResult 2: ${currentBuild.currentResult}"
      echo "all details : ${GIT_BRANCH}, ${env.BUILD_NUMBER}, ${env.BUILD_TAG}"
      echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
      script {
        sh """
           curl -H 'Content-Type: application/json' \
           -u xxxxxxx-c2f0-xxxxxxx-92b0-xxxxxxx:ZMdVKJJIWSnszslxxxxxxxX6884zZ0VvzxxxxxxxZAIK89C \
           -d '{"message":"Finished build for ${env.BUILD_TAG}","status":"${currentBuild.currentResult}", "tag":"${env.BUILD_ID}${env.BUILD_ID}", "idValue":"${env.BUILD_ID}"}' \
           -X POST https://us-south.functions.cloud.ibm.com/api/v1/namespaces/axxxxxxx%40.xxxxxxx.com_demo/actions/SendBuildRepot?blocking=true
           """
      }
    }
  }
}
