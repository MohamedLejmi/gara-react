import axios from 'axios';

const apiUrl = 'https://e91zk92efh.execute-api.eu-west-3.amazonaws.com/v1';

export const getGameById = async (params) => {
  try {
    const headers = {};
    const queryParams = {};
    if (params.id != null) queryParams.id = params.id.toString();
    if (params.tag != null) queryParams.tag = params.tag.toString();
    if (params.countryCode != null) queryParams.countryCode = params.countryCode.toString();
    if (params.appUserId != null) queryParams.appUserId = params.appUserId.toString();
    
    const response = await axios.get(`${apiUrl}/api/msearch/game`, {
      headers,
      params: queryParams,
      responseType: 'json',
    });
   
    return {
      data: response.data,
      status: response.status,
    };
    
  } catch (error) {
    throw error;
  }
};
