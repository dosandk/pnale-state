import InPendingState from "../review-state/in-pending.state.js";
import AcceptedState from "../review-state/accepted.state.js";
import RejectedState from "../review-state/rejected.state.js";
import FinishedState from "./finished.state.js";

export default class InProgressState {
  taskStatus = 'inProgress';
  reviewStatus = 'not-assigned';

  constructor (reviewStatus = '') {
    this.reviewStatus = reviewStatus;
  }

  next (taskOptions = {}) {
    if (taskOptions.finished) {
      return new FinishedState(this.reviewStatus);
    }

    if (taskOptions.reviewStatus === 'inReview') {
      return new InPendingState(this.taskStatus);
    }

    if (taskOptions.reviewStatus === 'accept') {
      return new AcceptedState(this.taskStatus);
    }

    if (taskOptions.reviewStatus === 'reject') {
      return new RejectedState(this.taskStatus);
    }

    return this;
  }
};
