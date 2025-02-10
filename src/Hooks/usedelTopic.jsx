import { instance } from './api'
function usedelTopic() {
  const delTopic = async (nomi,mavzu ) => {
    console.log(nomi,mavzu)
    try {
      const response = await instance.delete(`/api/topic/${nomi}/${mavzu}`)
      window.location.reload();
    } catch (error) {
      console.error("dars o'chirishda xatolik", error)
    }
  }
  return ({delTopic})
}
export default usedelTopic;