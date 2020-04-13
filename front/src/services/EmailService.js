const getEmailList = async () => {
  const url = "http://192.168.0.31:3333/list";

  try {
    const resposeList = await fetch(url);
    if (resposeList.ok) {
      return await resposeList.json();
    }
  } catch (error) {
    console.log(error);
  }
};

export default {
  getEmailList,
};
