class TestController < ApplicationController
  
def schedule
  p '-----------------------HIT SCHEDULE------------------'
  p params[:id]
  p '-----------------------------------------------------'

  @shifts = Shift.where(:user_id == params[:id])

end

end