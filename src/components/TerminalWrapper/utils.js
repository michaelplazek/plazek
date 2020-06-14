import compose from 'lodash/fp/compose';
import values from 'lodash/fp/values';
import omit from 'lodash/fp/omit';

export const hasFlags = args => args.length > 1;
export const getFlags = compose(
  values,
  omit('_')
);

export const hasArgs = compose(
  item => item.length,
  get('_')
);
export const getArgs = get('_');
