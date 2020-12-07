pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                sh 'npm install'
                sh 'npm start &'
            }
        }
        stage('Test') { 
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'cp index.html /var/www/html'
                sh 'cp -r css /var/www/css'
                sh 'cp -r images /var/www/images'
            }
        }
    }
}