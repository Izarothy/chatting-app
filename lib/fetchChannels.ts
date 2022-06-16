export const fetchChannels = async () => {
  const res = await fetch('/api/channels', {
    method: 'GET',
  });
  const data = await res.json();

  console.log(data);
  return data;
};
