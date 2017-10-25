# personow

Steps to get started:

Update rails env to 5.1.0
Update Ruby version to...

Update postgresql: (commands)

psql [postgres or other_user]
CREATE DATABASE personow_development;
CREATE DATABASE personow_test;
\q

cd /final_project
cd /rails-backend
bundle install
bundle exec rake db:migrate
rails s -p 3001

cd ../react-frontend
npm start   [laucnhes project on port 3000]


