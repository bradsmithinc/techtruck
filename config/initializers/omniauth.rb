Rails.application.config.middleware.use OmniAuth::Builder do
  provider :twitter, "zPSc0zoPYsDTlcck1Dnh1Q", "LWTWuTzzSGsSCHqPTYzLuZEKBmflmpcCauzc5BDVE"
  provider :github, ENV['GITHUB_KEY'], ENV['GITHUB_SECRET']
end
