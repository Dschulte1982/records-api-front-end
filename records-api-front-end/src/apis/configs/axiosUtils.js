export function defineCancelApiObject(apiObject) {
  const cancelApiObject = {};

  Object.getOwnPropertyNames(apiObject).forEach((apiPropertyName) => {
    const cancellationControllerObject = {
      controller: undefined,
    };

    cancelApiObject[apiPropertyName] = {
      handleRequstCancellation: () => {
        // If the controller already exists, cancel the request
        if (cancellationControllerObject.controller) {
          // Cancel the request and return this message
          cancellationControllerObject.controller.abort();
        }

        // Generate a new controller with the AbortController factory
        cancellationControllerObject.controller = new AbortController();

        return cancellationControllerObject.controller;
      },
    };
  });

  return cancelApiObject;
}
