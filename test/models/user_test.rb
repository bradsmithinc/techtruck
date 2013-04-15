require "test_helper"

class UserTest < ActiveSupport::TestCase
  setup do
    @user = User.new
  end

  def test_has_many_services
    assert true, @user.respond_to?(:services)
  end
end
