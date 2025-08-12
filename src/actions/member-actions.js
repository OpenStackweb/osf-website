import {
  getRequest,
  createAction,
  escapeFilterValue
} from "openstack-uicore-foundation/lib/utils/actions";

export const GET_MEMBERS = 'GET_MEMBERS';
export const GET_MEMBERS_SUCCESS = 'GET_MEMBERS_SUCCESS';
export const GET_MEMBERS_ERROR = 'GET_MEMBERS_ERROR';
export const GET_MEMBER_PROFILE = 'GET_MEMBER_PROFILE';
export const GET_MEMBER_PROFILE_SUCCESS = 'GET_MEMBER_PROFILE_SUCCESS';
export const GET_MEMBER_PROFILE_ERROR = 'GET_MEMBER_PROFILE_ERROR';
export const GET_ELECTION_MEMBER_PROFILE = 'GET_ELECTION_MEMBER_PROFILE';
export const GET_ELECTION_MEMBER_PROFILE_SUCCESS = 'GET_ELECTION_MEMBER_PROFILE_SUCCESS';
export const GET_ELECTION_MEMBER_PROFILE_ERROR = 'GET_ELECTION_MEMBER_PROFILE_ERROR';

export const getMembers = (keyword, letter, page = 1) => (dispatch, getState) => {

  const filter = ['active==1', 'membership_type==Individual'];

  if (keyword) {
    const escapedKeyword = escapeFilterValue(keyword);
    filter.push(`full_name=@${escapedKeyword},last_name=@${escapedKeyword},first_name=@${escapedKeyword},full_name=@${escapedKeyword},github_user=@${escapedKeyword},irc=@${escapedKeyword}`)
  }

  if (letter) {
    filter.push(`last_name@@${letter}`);
  }

  let params = {
    'filter[]': filter,
    per_page: 50,
    page: page
  };

  return getRequest(
    createAction(GET_MEMBERS),
    createAction(GET_MEMBERS_SUCCESS),
    `${window.API_BASE_URL}/api/public/v1/members`,
     null
  )(params)(dispatch)
    .then().catch((e) => {
      console.log(e);
      dispatch(createAction(GET_MEMBERS_ERROR)())
    });
}

export const getMemberProfile = (memberId) => (dispatch, getState) => {

  return getRequest(
    createAction(GET_MEMBER_PROFILE),
    createAction(GET_MEMBER_PROFILE_SUCCESS),
    `${window.API_BASE_URL}/api/public/v1/members/${memberId}`,
     null
  )({})(dispatch)
    .then().catch((e) => {
      dispatch(createAction(GET_MEMBER_PROFILE_ERROR)())
    });
}

export const getElectionMemberProfile =
    (
        memberId,
        expand = 'candidate_profile,candidate_profile.election,election_applications,election_applications.nominator,all_affiliations,all_affiliations.organization',
        fields = 'election_applications.nominator.first_name,election_applications.nominator.last_name',
        relations = 'election_applications.nominator.none'
    ) => (dispatch, getState) => {

  const filters = {
    expand: expand,
    fields: fields,
    relations: relations
  }

  return getRequest(
    createAction(GET_ELECTION_MEMBER_PROFILE),
    createAction(GET_ELECTION_MEMBER_PROFILE_SUCCESS),
    `${window.API_BASE_URL}/api/public/v1/members/${memberId}`, null
  )(filters)(dispatch)
    .then((payload) => {
      let{response:profile} = payload;
      return profile;
    }).catch((e) => {
      console.log(e);
      dispatch(createAction(GET_ELECTION_MEMBER_PROFILE_ERROR)())
    });
}
