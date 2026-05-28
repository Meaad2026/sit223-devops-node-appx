pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Installing dependencies and preparing build...'
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running automated tests...'
                bat 'npm test'
            }
        }

        stage('Code Quality') {
            steps {
                echo 'Running ESLint code quality check...'
                bat 'npx eslint app.js'
            }
        }

        stage('Security') {
            steps {
                echo 'Running npm security audit...'
                bat 'npm audit --audit-level=high'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application to local deployment folder...'
                bat 'if exist deployed-app rmdir /S /Q deployed-app'
                bat 'mkdir deployed-app'
                bat 'copy app.js deployed-app\\app.js'
                bat 'copy package.json deployed-app\\package.json'
            }
        }

        stage('Release') {
            steps {
                echo 'Creating release version file...'
                bat 'echo Release version 1.0.%BUILD_NUMBER% > release-version.txt'
                bat 'type release-version.txt'
            }
        }

        stage('Monitoring') {
            steps {
                echo 'Running health check monitoring test...'
                bat 'npm test'
            }
        }
    }
}
