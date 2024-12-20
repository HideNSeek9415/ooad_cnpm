import http from '../../utils/http'

export const getAllQuestion = () => http.get('/admin/question')

export const getQuestionById = (id) => http.get(`/admin/question/${id}`)

export const handleStatusChange = (id, body) => http.put(`/admin/question/${id}`, body)

export const getQuestionsByTag = (tag_id) => http.get(`/admin/question/tag/${tag_id}`)
