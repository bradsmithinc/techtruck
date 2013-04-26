require "test_helper"

describe User do
  before do
    @user = User.new
  end

  it "must be valid" do
    @user.must_be :valid?
  end
end
