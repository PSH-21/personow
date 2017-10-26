class TestController < ApplicationController
  
def schedule

  @shifts = Shift.where(user_id: params[:id])

end

end