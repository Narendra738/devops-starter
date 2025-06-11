pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git url: 'git@github.com:Narendra738/devops-starter.git', branch: 'master'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t my-vite-react-app:latest .'
            }
        }
        stage('Deploy to EC2') {
            steps {
                sh '''
                         docker stop my-vite-react-app || true
                         docker rm -f my-vite-app || true
                         docker run -d -v 80:80 --name my-vite-app my-vite-react-app:latest
                     '''
            }
        }
    }
}
