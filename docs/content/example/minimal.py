from random import randint, random

import mlflow
from mlflow import log_metric, log_param

mlflow.set_tracking_uri("http://localhost:5000")
mlflow.set_experiment("my-experiment")


if __name__ == "__main__":
    # Log a parameter (key-value pair)
    log_param("param1", randint(0, 100))

    # Log a metric; metrics can be updated throughout the run
    log_metric("foo", random())
    log_metric("foo", random() + 1)
    log_metric("foo", random() + 2)
