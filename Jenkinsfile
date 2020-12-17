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
                sh 'cp -r css /var/www/html/css'
                sh 'cp -r images /var/www/html/images'

                sh 'cp index.html /etc/puppetlabs/code/environments/production/modules/modulos/files'
                sh 'cp -r css /etc/puppetlabs/code/environments/production/modules/modulos/files'
                sh 'cp -r images /etc/puppetlabs/code/environments/production/modules/modulos/files'

            }
        }
    }
}