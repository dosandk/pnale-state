import InPendingState from "./in-pending.state.js";
import AcceptedState from "./accepted.state.js";
import FinishedState from "../task-state/finished.state.js";
import InProgressState from "../task-state/in-progress.state.js";

export default class RejectedState {
  reviewStatus = 'rejected';

  constructor (taskStatus = '') {
    this.taskStatus = taskStatus;
  }

  next (taskOptions = {}) {
    if (taskOptions.reviewStatus === 'accept') {
      return new AcceptedState(this.taskStatus);
    }

    if (taskOptions.reviewStatus === 'inReview') {
      return new InPendingState(this.taskStatus);
    }

    if (taskOptions.finished) {
      return new FinishedState(this.reviewStatus);
    }

    if (taskOptions.inProgress) {
      return new InProgressState(this.reviewStatus);
    }

    return this;
  }
}
