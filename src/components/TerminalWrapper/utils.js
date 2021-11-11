import compose from "lodash/fp/compose";
import keys from "lodash/fp/keys";
import omit from "lodash/fp/omit";
import get from "lodash/fp/get";

export const hasFlags = args => keys(args).length > 1;
export const getFlags = compose(keys, omit("_"));

export const hasArgs = compose(item => item.length && item !== "", get("_"));
export const getArgs = get("_");

export const isEmpty = args => !hasFlags(args) && !hasArgs(args);
