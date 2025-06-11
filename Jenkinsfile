pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                git 'git@github.com:Narendra738/devops-starter.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t devops-starter .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh 'docker stop react || true && docker rm react || true'
                sh 'docker run -d -p 80:80 --name react devops-starter'
            }
        }
    }
}
