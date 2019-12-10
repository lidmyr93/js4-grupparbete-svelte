export const getBeer = (id = "random") =>
  new Promise((resolve, reject) => {
    fetch(`https://api.punkapi.com/v2/beers/${id}`)
      .then(res => (res.status === 200 ? res.json() : null))
      .then(data => resolve(data[0]))
      .catch(() => reject({ error: "Something went wrong, please try again!" }));
  });
