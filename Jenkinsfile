pipeline {
    agent any

    stages {
        stage('Clone') {
    steps {
        git branch: 'main', url: 'https://github.com/a250009/nodejs_deployement.git'
    }
}

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Deploy') {
            steps {
                bat 'node app.js'
            }
        }
    }
}
