pipeline {
    agent {
            docker {
                image 'node:lts-alpine'
                args '-p 3000:3000 -p 5000:5000'
            }
            }
    stages{
        stage("Test"){
            steps{
                dir("scripts"){
                    sh 'test.sh'
                }
            }
        }
        stage("Build"){
            steps{
                sh 'npm install'
            }
        }
    }
}