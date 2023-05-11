const SERVER_FOR_SENT = '';

const sendData = (onSuccess, onError, body) => {
  fetch(
    SERVER_FOR_SENT,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError();
      }
    })
    .catch(() => {
      onError();
    });
};

export {sendData};
