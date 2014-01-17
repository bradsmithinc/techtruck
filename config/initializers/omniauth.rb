Rails.application.config.middleware.use OmniAuth::Builder do
  provider :twitter, "zPSc0zoPYsDTlcck1Dnh1Q", "LWTWuTzzSGsSCHqPTYzLuZEKBmflmpcCauzc5BDVE"
  provider :facebook, "431448366986838", "2bc6a086c4eae01812ce91bb41c33deb"
end
