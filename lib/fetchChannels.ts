export const fetchChannels = async () => {
  const res = await fetch('/api/channels', {
    method: 'GET',
  });
  const data = await res.json();

  return data.channels;
};
