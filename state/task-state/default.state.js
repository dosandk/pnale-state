import FinishedState from "./finished.state.js";
import InProgressState from "./in-progress.state.js";

export default class DefaultState {
  taskStatus = 'default';
  reviewStatus = 'not-assigned';

  next (taskOptions = {}) {
    if (taskOptions.finished) {
      return new FinishedState(this.reviewStatus);
    }

    if (taskOptions.inProgress) {
      return new InProgressState(this.reviewStatus);
    }

    return this;
  }
}
