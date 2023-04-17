import RejectedState from "./rejected.state.js";
import FinishedState from "../task-state/finished.state.js";
import InProgressState from "../task-state/in-progress.state.js";
import InPendingState from "./in-pending.state.js";

export default class AcceptedState {
  reviewStatus = 'accepted';

  constructor (taskStatus = '') {
    this.taskStatus = taskStatus;
  }

  next (taskOptions = {}) {
    if (taskOptions.reviewStatus === 'inPending') {
      return new InPendingState(this.taskStatus);
    }

    if (taskOptions.reviewStatus === 'reject') {
      return new RejectedState(this.taskStatus);
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
