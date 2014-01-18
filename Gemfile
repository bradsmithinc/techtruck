ruby "2.0.0"
source 'https://rubygems.org'

gem "twitter-bootstrap-rails"
gem 'twitter'
gem 'rails', '4.0.0.beta1'

group :assets do
  gem 'sass-rails', '~> 4.0.0.beta1'
  gem 'bootstrap-sass'
  gem 'coffee-rails', '~> 4.0.0.beta1'
  gem 'uglifier', '>= 1.0.3'
  gem 'font-awesome-rails'
end

gem 'jquery-rails'
gem 'turbolinks'
gem 'jbuilder', '~> 1.0.1'

gem 'omniauth'
gem 'omniauth-twitter'
gem 'omniauth-facebook'
gem 'twilio-ruby'
group :production do
  gem 'rails_log_stdout', github: 'heroku/rails_log_stdout'
  gem 'rails3_serve_static_assets', github: 'heroku/rails3_serve_static_assets'
end

group :production, :test do
  #gem 'pg'
end

group :development, :test do
  gem 'sqlite3'
  gem 'fabrication'
end

group :development do
  gem 'figaro'
  gem 'pry-rails'
  gem 'awesome_print'
  gem 'better_errors'
  gem 'binding_of_caller'
end
