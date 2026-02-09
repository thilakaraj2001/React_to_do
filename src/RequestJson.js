const requestJson = async (url = '', options = {},errorMsg=null) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
   
  } catch (error) {
    return errorMsg=error.message;
  }
};
export default requestJson;