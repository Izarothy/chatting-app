import { MemberT } from 'types/Types';

const memberTypeGuard = (valToCheck: any): valToCheck is MemberT => {
  if (valToCheck === null) return false;
  if (typeof valToCheck.content === 'string') return false;
  if (typeof valToCheck.isText === 'boolean') return false;

  return true;
};

export default memberTypeGuard;
