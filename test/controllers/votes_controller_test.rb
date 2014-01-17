require "test_helper"

describe VotesController do

  before do
    @vote = votes(:one)
  end

  it "must get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:votes)
  end

  it "must get new" do
    get :new
    assert_response :success
  end

  it "must create vote" do
    assert_difference('Vote.count') do
      post :create, vote: {  }
    end

    assert_redirected_to vote_path(assigns(:vote))
  end

  it "must show vote" do
    get :show, id: @vote
    assert_response :success
  end

  it "must get edit" do
    get :edit, id: @vote
    assert_response :success
  end

  it "must update vote" do
    put :update, id: @vote, vote: {  }
    assert_redirected_to vote_path(assigns(:vote))
  end

  it "must destroy vote" do
    assert_difference('Vote.count', -1) do
      delete :destroy, id: @vote
    end

    assert_redirected_to votes_path
  end

end
