import {
  getEnvVariable,
  AUTHZ_USER_GROUPS,
} from "./envVariables";

export const isAuthorizedUser = (groups) => {
  let authorizedGroups = getEnvVariable(AUTHZ_USER_GROUPS);
  authorizedGroups =
      authorizedGroups && authorizedGroups !== ""
          ? authorizedGroups.split(" ")
          : [];
  if(authorizedGroups.length === 0) return true;
  return groups
      ? groups.some((group) => authorizedGroups.includes(group.code))
      : false;
};