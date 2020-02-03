class Api::StepsController < ApplicationController
  def index
    @steps = Step.all
    render json: @steps
  end

  def create
    @step = Step.new(step_params)

    if @step.save
      render json: @step
    else
      render json: @step.errors.full_messages, status: 422
    end
  end

  def show
    @step = Step.find_by_id(params[:id])
    render json: @step
  end

  def update
    @step = Step.find_by_id(params[:id])

    if @step.update_attributes(step_params)
      render json: @step
    else
      render json: @step.errors.full_messages, status: 422
    end
  end

  def destroy
    @step = Step.find_by_id(params[:id])

    if @step.destroy
      render json: @step
    else
      render @step.errors.full_messages, status: 422
    end
  end

  private

  def step_params
    params.require(:step).permit(:title, :body, :todo, :done)
  end
end