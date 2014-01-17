json.array!(@votes) do |vote|
  json.extract! vote, :vote, :user_id
  json.url vote_url(vote, format: :json)
end