import { ChannelT } from 'types/Types';

const channelsTypeGuard = (valToCheck: any): valToCheck is ChannelT => {
  if (typeof valToCheck.isText !== 'boolean') return false;

  return true;
};

export default channelsTypeGuard;
